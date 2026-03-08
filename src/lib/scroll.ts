import type React from "react";

export function scrollToSection(sectionId: string, event?: React.MouseEvent, updateHash = false) {
  event?.preventDefault();
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });

  if (updateHash) {
    history.replaceState(null, "", `#${sectionId}`);
  }
}
