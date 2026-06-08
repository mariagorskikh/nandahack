import { NextResponse } from "next/server";

// Server-side redirect to the NANDA Town site.
// Kept on the server so the destination URL never appears in the page source
// that ships to the browser — the page only ever links to this MIT path.
const NANDA_TOWN_URL = "https://nandatown.projectnanda.org";

export function GET() {
  return NextResponse.redirect(NANDA_TOWN_URL, 307);
}
