import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const tabs = ['React', 'XMCloud', 'DevOps'];

// React Q&A (already included in your file)
const reactQuestions = [
  {
    question: "### Q1. What is React?",
    answer: "React is an open-source JavaScript library for building user interfaces or UI components, developed by Facebook."
  },
  {
    question: "### Q2. Explain JSX",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React for describing what the UI should look like."
  },
  {
    question: "### Q3. What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by updating only the changed parts of the actual DOM."
  },
  {
    question: "### Q4. What is the significance of keys in React?",
    answer: "Keys are used to uniquely identify and differentiate between components in React. They help React identify which items have changed, added, or removed."
  },
  {
    question: "### Q5. What are state and props in React?",
    answer: "State is an internal data store that belongs to a specific component, and it can be changed over time. Props are properties passed to a component from its parent, and they are immutable."
  },
  {
    question: "### Q6. What is the difference between state and props?",
    answer: "State is internal to a component and can be changed over time, while props are external and passed to a component."
  },
  {
    question: "### Q7. Explain the concept of lifting state up.",
    answer: "Lifting state up is a pattern where the state of a child component is moved to its parent component, allowing multiple child components to share the same state."
  },
  {
    question: "### Q8. What is the purpose of setState in React?",
    answer: "setState is used to update the state of a component and trigger a re-render."
  },
  {
    question: "### Q9. What is React Router?",
    answer: "React Router is a library that enables navigation among views in a React application, allowing for the development of single-page applications."
  },
  {
    question: "### Q10. Explain the useEffect hook.",
    answer: "The useEffect hook in React is used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
  },
  {
    question: "### Q11. What are controlled components in React?",
    answer: "Controlled components are components where the form data is controlled by React state. The input elements receive their current value from the state and have their value updated through a callback function."
  },
  {
    question: "### Q12. What is Redux, and why is it used?",
    answer: "Redux is a state management library for JavaScript applications, commonly used with React. It helps manage the state of an application in a predictable way."
  },
  {
    question: "### Q13. Explain the concept of higher-order components (HOC).",
    answer: "Higher-order components are functions that take a component and return a new component with additional features or props."
  },
  {
    question: "### Q14. What is the purpose of the useReducer hook?",
    answer: "The useReducer hook is used for managing complex state logic in React applications. It is an alternative to useState when state transitions are more complex."
  },
  {
    question: "### Q15. What is the significance of the key attribute in React lists?",
    answer: "The key attribute is used to uniquely identify elements in a list. It helps React efficiently update the DOM when the list changes."
  },
  {
    question: "### Q16. What is the difference between class components and functional components?",
    answer: "Class components use ES6 classes and have additional features like state and lifecycle methods, while functional components are simpler and are often used with hooks."
  },
  {
    question: "### Q17. Explain the concept of refs in React.",
    answer: "Refs are used to access the DOM directly or to reference a React element. They provide a way to interact with the underlying DOM nodes in React."
  },
  {
    question: "### Q18. What are React hooks?",
    answer: "React hooks are functions that allow functional components to use state, lifecycle methods, and other React features."
  },
  {
    question: "### Q19. Explain the purpose of the useContext hook.",
    answer: "The useContext hook is used to access the value of a React context within a functional component."
  },
  {
    question: "### Q20. What is the significance of the dangerouslySetInnerHTML property in React?",
    answer: "dangerouslySetInnerHTML is used to inject HTML directly into a component, but it should be used with caution to avoid cross-site scripting (XSS) vulnerabilities."
  },
  {
    question: "### Q21. What is the purpose of the componentDidMount lifecycle method?",
    answer: "componentDidMount is invoked immediately after a component is mounted, making it suitable for initial AJAX requests or setting up subscriptions."
  },
  {
    question: "### Q22. What is the React developer tool?",
    answer: "The React Developer Tools is a browser extension that allows developers to inspect and debug React component hierarchies in the Chrome and Firefox browsers."
  },
  {
    question: "### Q23. Explain the concept of context in React.",
    answer: "Context provides a way to pass data through the component tree without having to pass props manually at every level. It is often used to share values like themes or authentication status."
  },
  {
    question: "### Q24. What are the advantages of using React?",
    answer: "React offers a virtual DOM for improved performance, a component-based architecture for modular development, and a strong community support, among other advantages."
  },
  {
    question: "### Q25. How does React handle prop drilling, and how can it be avoided?",
    answer: "Prop drilling occurs when props are passed down through multiple levels of components. It can be avoided by using context or state management libraries like Redux."
  },
  {
    question: "### Q26. What is the purpose of the shouldComponentUpdate method?",
    answer: "shouldComponentUpdate is a lifecycle method that determines if a component should re-render. Developers can use it to optimize performance by preventing unnecessary renders."
  },
  {
    question: "### Q27. Explain the significance of React Fragments.",
    answer: "React Fragments allow developers to group multiple elements without adding an extra node to the DOM, helping to keep the structure clean."
  },
  {
    question: "### Q28. What is the significance of the key prop in React Router?",
    answer: "The key prop in React Router is used to force the remounting of a component when the key changes, ensuring that the component is fully reinitialized."
  },
  {
    question: "### Q29. What is the purpose of the forwardRef function in React?",
    answer: "forwardRef is used to forward refs through components, allowing parent components to interact with the child's DOM node."
  },
  {
    question: "### Q30. Explain the concept of error boundaries in React.",
    answer: "Error boundaries are components that catch JavaScript errors anywhere in their child component tree and log those errors, display a fallback UI, or take other actions."
  },
  {
    question: "### Q31. What is the significance of the memo function in React?",
    answer: "memo is a higher-order component that memoizes the rendering of a functional component, preventing unnecessary re-renders if the props have not changed."
  },
  {
    question: "### Q32. How does React handle forms?",
    answer: "React handles forms by using controlled components, where form data is controlled by the React state."
  },
  {
    question: "### Q33. Explain the purpose of the useMemo hook.",
    answer: "The useMemo hook is used to memoize the result of a function, preventing unnecessary calculations and improving performance."
  },
  {
    question: "### Q34. What is the significance of the useCallback hook?",
    answer: "useCallback is used to memoize callback functions, preventing them from being recreated on every render."
  },
  {
    question: "### Q35. What are React portals?",
    answer: "React portals provide a way to render children into a DOM node that exists outside the parent component's hierarchy."
  },
  {
    question: "### Q36. Explain the concept of suspense in React.",
    answer: "Suspense is a feature in React that allows components to 'wait' for something before rendering, such as data fetching or code splitting."
  },
  {
    question: "### Q37. What is the purpose of the useEffect cleanup function?",
    answer: "The cleanup function in useEffect is used to perform cleanup tasks, such as unsubscribing from subscriptions or clearing intervals, when a component is unmounted."
  },
  {
    question: "### Q38. How does React handle routing?",
    answer: "React can handle routing using the React Router library, which provides a way to navigate between different views or pages in a React application."
  },
  {
    question: "### Q39. What is the purpose of the useLayoutEffect hook?",
    answer: "useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations. It is often used for measuring and synchronizing layout."
  },
  {
    question: "### Q40. Explain the concept of lazy loading in React.",
    answer: "Lazy loading is a technique where components or modules are loaded only when they are actually needed, improving initial load times."
  },
  {
    question: "### Q41. What is the significance of the React.memo function?",
    answer: "React.memo is a higher-order component that memoizes the rendering of a functional component, preventing unnecessary re-renders if the props have not changed."
  },
  {
    question: "### Q42. How does React handle code splitting?",
    answer: "React supports code splitting, allowing developers to split their code into smaller chunks that are loaded on demand, improving performance by reducing the initial bundle size."
  },
  {
    question: "### Q43. What is the purpose of the useImperativeHandle hook?",
    answer: "useImperativeHandle is used to customize the instance value that is exposed when using React.forwardRef."
  },
  {
    question: "### Q44. Explain the concept of the useDebugValue hook.",
    answer: "useDebugValue is used to display a label for custom hooks in React DevTools."
  },
  {
    question: "### Q45. What is the purpose of the useState hook?",
    answer: "The useState hook is used to add state to functional components in React."
  },
  {
    question: "### Q46. Explain the significance of the SuspenseList component in React.",
    answer: "SuspenseList is a component that allows developers to coordinate the loading of multiple components in a way that provides a better user experience."
  },
  {
    question: "### Q47. What is the significance of the react-scripts package in a React application?",
    answer: "react-scripts is a set of scripts and configurations used by Create React App to set up and manage a React project without the need for complex configuration."
  },
  {
    question: "### Q48. Explain the concept of error boundaries in React.",
    answer: "Error boundaries are components that catch JavaScript errors anywhere in their child component tree and log those errors, display a fallback UI, or take other actions."
  },
  {
    question: "### Q49. What is the purpose of the useReducer hook?",
    answer: "useReducer is a hook in React used for state management in functional components. It is particularly useful when the state logic is complex and involves multiple sub-values or when the next state depends on the previous state."
  },
  {
    question: "### Q50. How does React handle forms?",
    answer: "React handles forms using controlled components, where the form elements are controlled by React state. This allows React to be the single source of truth for the form data."
  }
];

// Sitecore XM Cloud Q&A
const sitecoreQuestions = [
  {
    question: '### Q1. What is Sitecore XM Cloud?',
    answer: 'Sitecore XM Cloud is a cloud-native, headless CMS offered by Sitecore. It allows content authors to create, manage, and publish content without infrastructure management. It is based on Sitecore Experience Manager (XM), built for scalability, flexibility, and modern development practices.'
  },
  {
    question: '### Q2. Difference between Sitecore XP and XM Cloud?',
    answer: 'XP supports full personalization and analytics with xDB. XM Cloud is headless, cloud-native, and integrates with CDP/Personalize for personalization.'
  },
  {
    question: '### Q3. What is Headless CMS?',
    answer: 'A headless CMS separates the backend (content repository) from the frontend (presentation). Sitecore XM Cloud uses a headless approach by delivering content via APIs (GraphQL or REST) to any front-end framework (e.g., React, Next.js).'
  },
  {
    question: '### Q4. What tools are used with XM Cloud?',
    answer: 'Sitecore CLI, DevEx for VSCode, GraphQL Edge API, Sitecore Pages, JSS, and GitHub Actions for CI/CD.'
  },
  {
    question: '### Q5. How is content delivered in XM Cloud?',
    answer: 'Using GraphQL APIs through Sitecore Experience Edge, enabling fast, CDN-based, headless content delivery.'
  },
  {
    question: '### Q6. What is Sitecore Pages?',
    answer: 'A visual WYSIWYG editor in XM Cloud that allows drag-and-drop editing of components in a headless environment.'
  },
  {
    question: '### Q7. How do you deploy in XM Cloud?',
    answer: 'Push code to GitHub; deployment is automated via GitHub Actions or Vercel. Sitecore CLI can also be used for serialization and content deploy.'
  },
  {
    question: '### Q8. What is Sitecore Edge?',
    answer: 'A CDN-powered delivery platform to serve published content quickly through GraphQL APIs.'
  },
  {
    question: '### Q9. What is the role of CDP and Personalize with XM Cloud?',
    answer: 'CDP captures user data; Personalize delivers tailored content. XM Cloud integrates with them for advanced personalization.'
  },
  {
    question: '### Q10. What is the purpose of sitecore.json in XM Cloud?',
    answer: 'It defines site/project settings including app name, components, and deployment details for CLI-based automation.'
  }
];

function About() {
  const [activeTab, setActiveTab] = useState('React');
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getFilteredQuestions = (questions) =>
    questions.filter(({ question, answer }) =>
      question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const renderAccordion = (questions) =>
    questions.map(({ question, answer }, index) => (
      <div
        key={index}
        style={{
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          background: '#f9f9f9'
        }}
      >
        <div
          onClick={() => handleAccordion(index)}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#007bff'
          }}
        >
          <ReactMarkdown>{question}</ReactMarkdown>
        </div>
        {openIndex === index && (
          <div style={{ marginTop: '10px' }}>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    ));

  const renderContent = () => {
    const tabData = {
      React: reactQuestions,
      XMCloud: sitecoreQuestions,
      DevOps: []
    };

    const filteredQuestions = getFilteredQuestions(tabData[activeTab] || []);

    return (
      <>
        <input
          type="text"
          placeholder={`Search ${activeTab} Q&A...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            marginBottom: '20px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        {renderAccordion(filteredQuestions)}
      </>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSearchTerm('');
              setOpenIndex(null);
            }}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderBottom: activeTab === tab ? '3px solid #007bff' : 'none',
              background: 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              color: activeTab === tab ? '#007bff' : '#333'
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
