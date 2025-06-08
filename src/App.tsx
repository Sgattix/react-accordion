import Accordion from "./components/Accordion";
import {
  IconAB,
  IconKeyFilled,
  IconMoon,
  IconPackage,
  IconPaintFilled,
  IconQuestionMark,
} from "@tabler/icons-react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-fuchsia-600 to-orange-600">
      <Accordion
        title="Accordion Title"
        content={{
          questions: [
            {
              question: "How can I use this component?",
              answer: (
                <div className="p-4">
                  You can use this component by importing it and passing the
                  required props. Required props:
                  <ul className="list-disc pl-5">
                    <li className="font-mono bg-neutral-950 w-fit px-2 text-red-500">
                      title: string
                    </li>
                    <li className="font-mono bg-neutral-950 w-fit px-2 text-red-500">
                      content:{" "}
                      {`{ questions: { question: string, answer: ReactNode, icon: ReactNode }[] }`}
                    </li>
                  </ul>
                  Optional props:
                  <ul className="list-disc pl-5">
                    <li className="font-mono">className: string</li>{" "}
                    <li className="font-mono">titleClassName: string</li>
                  </ul>
                </div>
              ),
              icon: <IconQuestionMark />,
            },

            {
              question: "What is the purpose of this component?",
              answer: (
                <p className="p-4">
                  This component is designed to be a reusable accordion UI
                  element. It allows you to display a list of questions and
                  answers in a collapsible format.
                </p>
              ),
              icon: <IconPackage />,
            },

            {
              question: "What are the key features of this component?",
              answer: (
                <div className="p-4">
                  This component offers several key features:
                  <ul className="list-disc pl-5">
                    <li>Collapsible sections for each question</li>
                    <li>Customizable styles and classes</li>
                    <li>Support for rich content in answers</li>
                  </ul>
                </div>
              ),
              icon: <IconKeyFilled />,
            },
            {
              question: "How can I customize the styles?",
              answer: (
                <p className="p-4">
                  You can customize the styles by passing your own class names
                  to the <code>className</code> and <code>titleClassName</code>{" "}
                  props. This allows you to apply your own styles to the
                  accordion and title elements.
                </p>
              ),
              icon: <IconPaintFilled />,
            },
            {
              question: "Can I use this component in a dark theme?",
              answer: (
                <p className="p-4">
                  Yes, this component supports dark mode. You can use it in a
                  dark theme by applying the appropriate classes to your parent
                  elements.
                </p>
              ),
              icon: <IconMoon />,
            },
            {
              question: "How can I add icons to the questions?",
              answer: (
                <p className="p-4">
                  You can add icons to the questions by passing an icon element
                  in the <code>icon</code> property of each question object.
                </p>
              ),
              icon: <IconAB />,
            },
            // You can add more valid questions here if needed.
          ],
        }}
      />
    </div>
  );
}

export default App;
