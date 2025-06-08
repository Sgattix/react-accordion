import React from "react";
import { IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionQuestionProps {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export default function AccordionQuestion({
  question,
  answer,
  icon,
  isOpen = false,
  onClick = () => {},
}: AccordionQuestionProps) {
  const [error, setError] = React.useState<string | null>(null);
  const answerRef = React.useRef(null);

  React.useEffect(() => {
    if (!question) {
      setError(
        `Question prop is required, but was not provided. (AccordionQuestion.jsx) Provided Value: ${JSON.stringify(
          question
        )}`
      );
      return;
    }
    if (!answer) {
      setError(
        `Answer prop is required, but was not provided. (AccordionQuestion.jsx) Provided Value: ${JSON.stringify(
          answer
        )}`
      );
      return;
    }
  }, []);

  if (error) {
    return <div className="text-red-500 text-sm p-4">{error}</div>;
  }

  return (
    <div
      className={`transition-all duration-500 ease-in-out bg-gray-200 dark:bg-neutral-700 rounded-lg shadow-md mb-4 w-full h-auto relative ${
        isOpen ? "z-20" : "z-10"
      }`}
      aria-label={`Accordion question: ${question}`}
      role="button"
      onClick={onClick}
    >
      {/* Question row */}
      <button
        type="button"
        className="flex justify-between w-full p-4 items-center cursor-pointer focus:outline-none "
        aria-expanded={isOpen}
        aria-controls={`accordion-answer-${question}`}
      >
        <div className="flex items-center gap-4">
          {icon}
          <h2 className="text-xl">{question}</h2>
        </div>
        <IconPlus
          className={`${isOpen ? "rotate-45" : ""} transition-all duration-500`}
        />
      </button>
      {/* Animated answer, OUTSIDE the button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={answerRef}
            className="absolute left-0 right-0 z-10 bg-gray-100 dark:bg-neutral-800 rounded-b-lg shadow-lg px-4"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="overflow-y-auto">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
