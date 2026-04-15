export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light text-white/90 mb-4">404</h1>
        <p className="text-white/50 mb-8">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 bg-amber-500 text-black rounded-md font-semibold hover:bg-amber-400 transition-colors"
        >
          Back to BANDA
        </a>
      </div>
    </div>
  );
}
