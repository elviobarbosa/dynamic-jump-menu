"use client";

import { createContext, useCallback, useContext, useState } from "react";

export type Section = {
  id: string;
  title: string;
  ref: React.RefObject<HTMLElement>;
  priority: number;
  visible: boolean;
};

const SectionContext = createContext<{
  sections: Map<string, Section>;
  registerSection: (section: Section) => void;
  removeSection: (id: string) => void;
}>({
  sections: new Map(),
  registerSection: () => {},
  removeSection: () => {},
});

export const useSectionContext = () => useContext(SectionContext);

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sections, setSections] = useState(new Map<string, Section>());

  const registerSection = useCallback((section: Section) => {
    setSections((prev) => {
      const updated = new Map(prev);
      updated.set(section.id, section);
      return updated;
    });
  }, []);

  const removeSection = useCallback((id: string) => {
    setSections((prev) => {
      const updated = new Map(prev);
      updated.delete(id);
      return updated;
    });
  }, []);

  return (
    <SectionContext.Provider
      value={{ sections, registerSection, removeSection }}
    >
      {children}
    </SectionContext.Provider>
  );
};
