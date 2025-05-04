"use client";

import { useSectionContext } from "@/app/context/section-context";

export function Sidebar() {
  const { sections } = useSectionContext();

  const visibleSections = [...sections.values()]
    .filter((section) => section.visible)
    .sort((a, b) => a.priority - b.priority);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside>
      <ul>
        {visibleSections.map((section) => (
          <li key={section.id}>
            <button onClick={() => scrollToSection(section.ref)}>
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
