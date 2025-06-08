import React, { type ReactNode } from "react";
import AccordionQuestion from "./AccordionQuestion";

type AccordionProps = {
  title: string;
  content: {
    questions: {
      question: string;
      answer: ReactNode;
      icon?: React.ReactNode;
    }[];
  };
  className?: string;
  titleClassName?: string;
};

export default function Accordion({
  title,
  content,
  className,
  titleClassName,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div
      className={`w-full lg:w-1/2 p-8 bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 relative rounded-2xl shadow-md h-max block ${className}`}
      aria-label="Accordion"
      role="region"
    >
      <h1
        className={`text-2xl font-bold mb-4 p-4 ${titleClassName} absolute -top-12 left-0 dark:bg-neutral-800 bg-gray-100 rounded-tl-2xl rounded-tr-2xl`}
      >
        {title}
      </h1>
      <div className="space-y-4 block">
        {content.questions.map((q, i) => (
          <AccordionQuestion
            question={q.question}
            answer={q.answer}
            icon={q.icon}
            key={q.question}
            isOpen={activeIndex === i}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Sgattix"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Sgattix
          </a>
        </p>
      </div>
    </div>
  );
}
