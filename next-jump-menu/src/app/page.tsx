import RegisterSection from "@/components/register-section";
import { SectionProvider } from "./context/section-context";
import { Sidebar } from "@/components/sidebar";

const generateLoremIpsum = () => {
  const lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    "Deserunt mollit anim id est laborum.",
  ];
  return lorem[Math.floor(Math.random() * lorem.length)];
};

const sections = Array.from({ length: 30 }, (_, index) => ({
  id: `section-${index + 1}`,
  title: `Seção ${index + 1}`,
  content: Array.from({ length: 3 }, () => generateLoremIpsum()).join(" "),
}));

export default function Home() {
  return (
    <SectionProvider>
      <div className="grid grid-cols-[20%_auto] gap-4">
        <Sidebar />
        <div>
          {sections.map((section) => (
            <RegisterSection
              key={section.id}
              id={section.id}
              title={section.title}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
              </div>
            </RegisterSection>
          ))}
        </div>
      </div>
    </SectionProvider>
  );
}
