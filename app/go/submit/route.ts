import { NextResponse } from "next/server";

// Server-side redirect to the NANDA Town skill-submission page.
// Kept on the server so the destination URL never appears in the page source
// that ships to the browser — the page only ever links to this MIT path.
const SUBMIT_SKILL_URL = "https://nandatown.projectnanda.org/skills";

export function GET() {
  return NextResponse.redirect(SUBMIT_SKILL_URL, 307);
}
