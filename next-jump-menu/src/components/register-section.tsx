"use client";
import { useSectionContext } from "@/app/context/section-context";
import { useEffect, useRef } from "react";

type Props = {
  id: string;
  title: string;
  priority?: number;
  visible?: boolean;
  children: React.ReactNode;
};

export default function RegisterSection({
  id,
  title,
  priority = 0,
  visible = true,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { registerSection, removeSection } = useSectionContext();

  useEffect(() => {
    if (visible) {
      registerSection({
        id,
        title,
        priority,
        ref: ref as React.RefObject<HTMLElement>,
        visible: true,
      });
    } else {
      removeSection(id);
    }
  }, [visible]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}
