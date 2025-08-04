import React, { useState } from 'react';

const tabs = ['React', 'Sitecore', 'DevOps'];

const reactQuestions = [
  "What is React and why is it popular?",
  "What are the limitations of React?",
  "Key advantages of using React in large-scale apps?",
  "Explain Strict Mode in React, when do you use it?",
  "Can React Hooks replace Redux in all scenarios?",
  "Difference between useState() and useReducer().",
  "How does useEffect() work? List real use cases.",
  "How do you prevent unnecessary re-renders in React?",
  "What’s the Virtual DOM and why does it matter?",
  "Controlled vs uncontrolled components, when to use each?",
  "Handling forms and form validation in React.",
  "How do refs work? When should you use them?",
  "Error boundaries, how and why to use them?",
  "React context API, how does it help with prop drilling?",
  "useCallback() vs useMemo(), when and why?",
  "SSR vs CSR, benefits and trade-offs in React.",
  "What is lazy loading in React? Give practical examples.",
  "Code splitting in React, how do you implement it?",
  "How do you manage global state in React apps?",
  "Redux vs Context API, when to choose what?",
  "What’s the purpose of keys in lists? Why are they needed?",
  "Fragment vs div, how and when to use each?",
  "Portals in React, what are they, and why would you use one?",
  "useRef(), how does it differ from createRef()?",
  "useLayoutEffect() vs useEffect().",
  "Best practices for side effects in React apps.",
  "Debouncing and throttling in React, where and how?",
  "How do you handle component communication (parent-child, siblings)?",
  "Prop drilling, problems and solutions.",
  "React Router, how do you manage navigation and params?",
  "Dynamic routing, how do you set it up?",
  "How do you test React components? (unit, integration, e2e)",
  "How does React handle events? Custom vs native events.",
  "How do you optimize React performance in large apps?",
  "What is reconciliation? How does React diff trees?",
  "Mounting, updating, and unmounting phases, what happens when?",
  "How do you fetch data on mount? (show code)",
  "When should you use class components over function components (if ever)?",
  "HOCs vs render props, differences, use cases, gotchas.",
  "Lifting state up, what is it and when do you do it?",
  "Memoization, how do you actually use React.memo()?",
  "How to handle browser resize or scroll events in React.",
  "How to secure a React app? (common vulnerabilities)",
  "Integrating third-party libraries in React (charts, maps, etc.)",
  "Common pitfalls with useEffect() and how to avoid them.",
  "How do you handle authentication in React?",
  "Accessibility in React, what do you do for a11y?",
  "How do you manage environment variables in a React app?",
  "Deployment strategies for React apps (static, server-side, etc.)",
  "Debugging tools and techniques for React developers."
];

// Placeholder content for Sitecore and DevOps tabs
const sitecoreContent = (
  <p>Coming soon: Sitecore Interview Questions & Answers!</p>
);
const devopsContent = (
  <p>Coming soon: DevOps Interview Questions & Answers!</p>
);

function About() {
  const [activeTab, setActiveTab] = useState('React');

  const renderContent = () => {
    switch (activeTab) {
      case 'React':
        return (
          <>
            <h2>🚀 50 Fundamental #React Questions 💡</h2>
            <ol>
              {reactQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
          </>
        );
      case 'Sitecore':
        return sitecoreContent;
      case 'DevOps':
        return devopsContent;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your technical friend</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderBottom: activeTab === tab ? '3px solid #007bff' : 'none',
              background: 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              color: activeTab === tab ? '#007bff' : '#333',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default About;
