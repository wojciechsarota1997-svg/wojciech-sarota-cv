"use client";

export function PrintButton() {
  return (
    <button className="btn" type="button" onClick={() => window.print()}>
      Download CV as PDF
    </button>
  );
}
