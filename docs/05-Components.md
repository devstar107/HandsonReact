---
title: Components
sidebar_label: Components
slug: /components
---

## Overview

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.

> Use the [`React DevTools extension`](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) in Chrome to inspect the application we will build during the labs and show the component hierarchy. Use the solution code from Lab 16.

## Creating an Element

1. Previously we created a React element and rendered it as shown below.

   ```js
   const element = <div className="container">Hello Element</div>;

   const rootElement = document.getElementById('root');
   ReactDOM.createRoot(rootElement).render(element);
   ```

To make that element reusable we need to turn it into a component.
There are two types of components: functions and classes in React.

## Creating a Function Component

When you want to reuse code you often extract it into a function. React function components allow you to reuse bits of UI in the same way.

1. Create the following function which returns a `JSX` element.

   ```js
   function helloWorld() {
     return <div className="container">Hello Function Component</div>;
   }
   ```

## Rendering a Component

Function and class components are rendered the same way.

1. Render the component by using the class or function name as the tag name. Initially, have the first letter lower be lowercased.

   ```js
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<helloWorld />);
   ```

1. You will receive the following error.

   ```
   react-dom.development.js:500 Warning: <helloWorld /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
       in helloWorld
   ```

1. Open the [JavaScript Compiler Babel's REPL](https://babeljs.io/repl) or the [TypeScript Playground](https://www.typescriptlang.org/play?#code/Q) depending on which language you are using to build your React applications.
1. Paste `<helloWorld />` in the left pane.
1. The following will display in the right pane: `React.createElement("helloWorld", null);`
   > Note that `helloWorld` is a string similar to `div` compiling to `React.createElement("div", null);`
1. Change `<helloWorld />` in the left pane to `<HelloWorld />`
1. The following will display in the right pane: `React.createElement(HelloWorld, null);`
   > React will invoke this function
1. Change the first letter of the function to a capital `H` and refer to it with a capitalized tag name.

   ```js
   function HelloWorld() {
     return <div className="container">Hello Function Component</div>;
   }

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<HelloWorld />);
   ```

   OR

   ```js
   function HelloWorld() {
     return <div className="container">Hello Function Component</div>;
   }
   const rootElement = document.getElementById('root');
   const element = <HelloWorld />;
   ReactDOM.createRoot(rootElement).render(element);
   ```

1. The text will now display as shown below.

   ```
   Hello Function Component
   ```

   > The Babel compiler differentiates native DOM elements that it needs to create like `div` from components you create such as `HelloWorld` by looking for `PascalCase` instead of `lowerCase` elements.

## Composing & Reuse

In order to get reuse this component we need another wrapping component to hold multiple instances of our component.

1. Create an `App` component and render multiple instances of `HelloWorld` inside of it.

   ```js
   function HelloWorld() {
     return <div className="container">Hello Function Component</div>;
   }

   function App() {
     return (
       <div>
         <HelloWorld />
         <HelloWorld />
         <HelloWorld />
         <HelloWorld />
       </div>
     );
   }

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<App />);
   ```

2. Result
   ```
   Hello World
   Hello World
   Hello World
   Hello World
   ```
3. Open `Chrome DevTools` and the `React DevTools` tab and show how the components are composing into an application.

   ```html
   <App>
     <div>
       <HelloWorld />
       <HelloWorld />
       <HelloWorld />
       <HelloWorld />
     </div>
   </App>
   ```

## Creating a Class Component

Alternatively, you can reuse code by making a class and then you can create multiple instances of it. The `render` method on the class is similar to the function when we created a function component.

1. Create a class with a `render` function that returns `JSX`.

   ```js
   class HelloWorld extends React.Component {
     render() {
       return <div className="container">Hello Class Component</div>;
     }
   }
   ```

1. The text will now display as shown below.
   ```
   Hello Class Component
   ```

## Optional Exercise

Visit one or several of the following sites and view the components that make up the application using [`React DevTools extension`](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

- netflix.com
- instagram.com
- facebook.com
- airbnb.com
- dropbox.com

## Reference

- [Sites Built with React](https://www.quora.com/Which-are-the-top-10-sites-built-with-ReactJS)
