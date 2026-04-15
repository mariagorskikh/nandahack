"use client";

import { useEffect, useRef, useCallback } from "react";

const LAND: [number, number, number, number][] = [
  [55, -100, 18, 28], [45, -100, 12, 25], [35, -95, 10, 18],
  [65, -100, 10, 30], [72, -100, 6, 25], [63, -150, 10, 18],
  [25, -102, 7, 10], [15, -88, 6, 4], [10, -84, 4, 3],
  [72, -40, 12, 14],
  [2, -62, 12, 14], [-8, -55, 12, 14], [-18, -52, 12, 10],
  [-30, -63, 12, 7], [-42, -68, 8, 4], [-50, -72, 5, 3],
  [50, 10, 8, 14], [55, 25, 8, 15], [63, 15, 7, 10],
  [62, 25, 6, 8], [40, -2, 4, 7], [42, 13, 4, 5],
  [39, 24, 3, 5], [55, -5, 4, 4], [53, -8, 3, 3],
  [28, 10, 10, 16], [15, 10, 10, 16], [5, 22, 10, 14],
  [-5, 28, 10, 12], [-18, 30, 10, 10], [-28, 27, 8, 7],
  [-20, 46, 4, 2],
  [33, 45, 8, 12], [28, 50, 5, 8], [22, 55, 5, 6],
  [60, 50, 8, 30], [58, 90, 8, 25], [62, 120, 8, 25],
  [65, 150, 7, 18], [63, 170, 6, 12], [50, 70, 8, 15],
  [45, 62, 6, 10],
  [35, 105, 12, 18], [28, 112, 8, 10], [42, 125, 6, 8],
  [45, 90, 8, 12],
  [24, 80, 10, 8], [14, 78, 6, 4],
  [18, 100, 8, 8], [12, 105, 5, 5], [3, 105, 4, 5],
  [37, 137, 4, 3], [35, 130, 3, 3], [43, 143, 3, 2],
  [24, 121, 2, 2], [12, 123, 4, 2],
  [-2, 110, 4, 12], [-5, 120, 3, 5], [-7, 130, 3, 5],
  [-4, 138, 4, 4],
  [-25, 134, 14, 18], [-15, 133, 8, 14],
  [-40, 174, 5, 2],
  [-78, 0, 12, 180], [-85, 0, 8, 180],
];

const WATER: [number, number, number, number][] = [
  [56, -82, 5, 7], [40, 18, 4, 9], [26, -88, 4, 5],
  [43, 50, 4, 6], [15, 45, 4, 4], [28, 42, 2, 3],
];

function isLand(lat: number, lon: number): boolean {
  let land = false;
  for (const [clat, clon, rlat, rlon] of LAND) {
    const dlat = lat - clat;
    let dlon = lon - clon;
    if (dlon > 180) dlon -= 360;
    if (dlon < -180) dlon += 360;
    if ((dlat / rlat) ** 2 + (dlon / rlon) ** 2 <= 1) { land = true; break; }
  }
  if (!land) return false;
  for (const [clat, clon, rlat, rlon] of WATER) {
    const dlat = lat - clat;
    let dlon = lon - clon;
    if (dlon > 180) dlon -= 360;
    if (dlon < -180) dlon += 360;
    if ((dlat / rlat) ** 2 + (dlon / rlon) ** 2 <= 1) return false;
  }
  return true;
}

const DOTS = 36;
const SIZE = 600;
const R = SIZE * 0.46;
const CHARS = "!@#$%^&*+=~?/<>{}[]|;:".split("");

export default function AsciiGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef = useRef(0);
  const rafRef = useRef(0);
  const seedRef = useRef(0);
  const tintRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const rot = rotRef.current;

    const tint = tintRef.current;
    // Amber gold tint for BANDA
    const baseR = 245; const baseG = 158; const baseB = 11;
    const landR = baseR + (255 - baseR) * tint;
    const landG = baseG + (255 - baseG) * tint;
    const landB = baseB + (255 - baseB) * tint;
    const waterBaseR = 180; const waterBaseG = 120; const waterBaseB = 20;
    const waterR = waterBaseR + (255 - waterBaseR) * tint;
    const waterG = waterBaseG + (255 - waterBaseG) * tint;
    const waterB = waterBaseB + (255 - waterBaseB) * tint;

    for (let i = 0; i <= DOTS; i++) {
      const lat = 90 - (180 * i) / DOTS;
      const latRad = (lat * Math.PI) / 180;
      const cosLat = Math.cos(latRad);
      const sinLat = Math.sin(latRad);
      const count = Math.max(1, Math.round(DOTS * 2 * cosLat));

      for (let j = 0; j < count; j++) {
        const lon = -180 + (360 * j) / count;
        const lonRad = ((lon + rot) * Math.PI) / 180;
        const x = cosLat * Math.sin(lonRad);
        const y = -sinLat;
        const z = cosLat * Math.cos(lonRad);
        if (z < 0.05) continue;

        const px = cx + x * R;
        const py = cy + y * R;
        const land = isLand(lat, lon);
        const depth = 0.4 + 0.6 * z;
        const ch = CHARS[(i * 53 + j * 17 + seedRef.current) % CHARS.length];

        if (land) {
          ctx.font = "bold 24px monospace";
          ctx.fillStyle = `rgba(${landR}, ${landG}, ${landB}, ${0.75 * depth})`;
          ctx.fillText(ch, px, py);
        } else {
          ctx.font = "8px monospace";
          ctx.fillStyle = `rgba(${waterR}, ${waterG}, ${waterB}, ${0.1 * depth})`;
          ctx.fillText(ch, px, py);
        }
      }
    }
  }, []);

  const animate = useCallback(() => {
    if (startTimeRef.current === null) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    tintRef.current = Math.min(1, elapsed / 1000);
    rotRef.current += 0.12;
    draw();
    rafRef.current = requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    const shuffleId = setInterval(() => { seedRef.current++; }, 50);
    return () => { cancelAnimationFrame(rafRef.current); clearInterval(shuffleId); };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      width={SIZE}
      height={SIZE}
      className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[580px] lg:h-[580px] select-none opacity-80"
      aria-hidden="true"
    />
  );
}
