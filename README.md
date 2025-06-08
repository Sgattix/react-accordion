# React Accordion Component

This is a simple React Accordion component that allows you to expand and collapse sections of content. It is built using functional components and hooks.

## Dependencies

- React
- PropTypes
- Tailwind CSS (for styling)

## Features

- Expand and collapse sections
- Customizable styles
- Keyboard accessibility

## Installation

You can install the component downloading the source code:

```bash
git clone https://github.com/Sgattix/react-accordion
cd react-accordion
npm install
```

## Usage

To use the Accordion component, import it into your React application and pass the necessary props. Here is an example:

```jsx
import React from "react";
import Accordion from "./accordion-component/Accordion";
import "./accordion-component/src/index.css";
const App = () => {
  const items = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div>
      <h1>React Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;
```

## Props

| Prop          | Type       | Description                                                                                            |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `items`       | `Array`    | An array of objects containing `title` and `content` for each section.                                 |
| `defaultOpen` | `Number`   | The index of the section that should be open by default. Defaults to `0`.                              |
| `onToggle`    | `Function` | Callback function that is called when a section is toggled. Receives the index of the toggled section. |
| `className`   | `String`   | Additional CSS classes to apply to the accordion container.                                            |
| `style`       | `Object`   | Inline styles to apply to the accordion container.                                                     |

## Example

```jsx
import React from "react";
import Accordion from "./accordion-component/components/Accordion";
import "./accordion-component/src/index.css";

const items = [
  {
    title: "Section 1",
    content: (
      <>
        <p>Content for section 1</p>
      </>
    ),
  },
  {
    title: "Section 2",
    content: (
      <>
        <p>Content for section 2</p>
      </>
    ),
  },
  {
    title: "Section 3",
    content: (
      <div className="p-4">
        <p>Content for section 3</p>
      </div>
    ),
  },
];

const App = () => {
  return (
    <div>
      <h1>React Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;
```
