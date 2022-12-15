---
title: Events
sidebar_label: Events
slug: /events
---

## Subscribing (an Event Handler)

You can listen/subscribe/wire to an `Event` by attaching a event handler. An `event handler` is simply a function that will be called when the event is raised/fired/emitted.

Handling events with **React elements** is very similar to handling events on **DOM elements**. There are some **syntactic differences**:

- React `events` are **named** using `camelCase`, **rather than lowercase**.
- With JSX you **pass a function** as the event handler, **rather than a string**.
  - Because it is a function and not a string you don't want to invoke the function when you listen as this would result in your event handler function being called immediately when the component renders instead of waiting for the event to trigger it.

### In Vanilla JavaScript

#### Setup

1. Delete or comment out all current code in `main.js`

#### Steps

1. Add a button to `index.html`
   ```diff
   <div id="root">
   +  <button onclick="handleClick()">Click Me!</button>
   </div>
   ```
2. Add an event handler function to `main.js`
   ```js
   //main.js
   function handleClick() {
     console.log('clicked');
   }
   ```
3. Refresh the page in your browser
4. Open `Chrome DevTools` to the `Console` tab
5. Click the button on the page
6. You should see `clicked` being logged to the console.

   > Note: the Chrome browser will place a number next to the log message if it is logged multiple times. The number indicates the number of times the message has been logged.

### In a React Function Component

#### Setup

1. Delete the button in `index.html`.
2. Be sure to leave the root `div` on the page so React can render into it.

#### Steps

1. Create a function component that renders a button and wire up the event handler you created in the last section as shown below

   ```js
   function handleClick() {
     console.log('clicked');
   }

   function Button() {
     return <button onClick={handleClick()}>Click Me!</button>;
   }

   ReactDOM.createRoot(document.getElementById('root')).render(<Button />);
   ```

2. If not already opened from the previous step, open `Chrome DevTools` switch to the `Console` tab
3. Refresh the page in your browser
4. Notice that since the event handler is invoked with (), the function is run immediately. We want the function to only run when the button is clicked.
5. Remove the function invocation `()` so the function will no longer run immediately.
   ```js
   function Button() {
     return <button onClick={handleClick}>Click Me!</button>;
   }
   ```
6. Refresh the page in your browser
7. Notice the function is no longer run when the component renders
8. Click the button
9. You should see `clicked` being logged to the console again

## Passing Parameters

Inside a loop (we'll learn about loops in the next section) it is common to want to pass a parameter to identify the item in the loop.

As we discussed earlier, we can't invoke a function when we subscribe to an event with parenthesis `()` because that would cause the function to be immediately called.

1. Comment or remove all code from `main.js`
2. Paste the following code into `main.js`

   ```js
   function FruitListItem(props) {
     function handleClick(id) {
       console.log(`removed ${id}`);
     }

     return <li onClick={handleClick(props.fruit.id)}>{props.fruit.name} </li>;
   }

   function FruitList(props) {
     const fruitListItems = props.fruits.map((fruit) => (
       <FruitListItem key={fruit.id} fruit={fruit} />
     ));
     return <ul>{fruitListItems}</ul>;
   }

   const data = [
     { id: 1, name: 'apple' },
     { id: 2, name: 'orange' },
     { id: 3, name: 'blueberry' },
     { id: 4, name: 'banana' },
     { id: 5, name: 'kiwi' },
   ];

   ReactDOM.createRoot(document.getElementById('root')).render(
     <FruitList fruits={data} />
   );
   ```

3. If not already opened from the previous step, open `Chrome DevTools` switch to the `Console` tab
4. Refresh the page in your browser
5. In the `Console` notice that all items invoked the `handleClick` function when the page was loaded.
6. Click any item on the list and note that `handleClick` is not called so no logging occurs in the `Console`.

   So how can we pass arguments to an event handler or callback?

There are two solutions to this problem:

### Using Arrow Functions

1. Wrap `handleClick` in an arrow function

   ```diff
   function FruitListItem(props) {
     function handleClick(id) {
       console.log(`removed ${id}`);
     }

     return (
   -    <li onClick={handleClick(props.fruit.id)}>{props.fruit.name} </li>
   +    <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>
     );
   }

   function FruitList(props) {
     const fruitListItems = props.fruits.map((fruit) => (
       <FruitListItem key={fruit.id} fruit={fruit} />
     ));
     return <ul>{fruitListItems}</ul>;
   }

   const data = [
     { id: 1, name: 'apple' },
     { id: 2, name: 'orange' },
     { id: 3, name: 'blueberry' },
     { id: 4, name: 'banana' },
     { id: 5, name: 'kiwi' },
   ];

   ReactDOM.createRoot(document.getElementById("root")).render(
    <FruitList fruits={data} />
   );
   ```

### Reference

[How do I pass a parameter to an event handler or callback?](https://reactjs.org/docs/faq-functions.html#how-do-i-pass-a-parameter-to-an-event-handler-or-callback)

## Accessing Event Information

Handling events requires us to prevent the default browser behavior.

### Using Arrow Functions

1. Comment or remove all code from `main.js`
2. Paste the following code into `main.js`

   ```js
   function FruitListItem(props) {
     function handleClick(e, id) {
       console.log(e);
       console.log(`removed ${id}`);
     }

     return (
       <li onClick={(e) => handleClick(e, props.fruit.id)}>
         {props.fruit.name}{' '}
       </li>
     );
   }

   function FruitList(props) {
     const fruitListItems = props.fruits.map((fruit) => (
       <FruitListItem key={fruit.id} fruit={fruit} />
     ));
     return <ul>{fruitListItems}</ul>;
   }

   const data = [
     { id: 1, name: 'apple' },
     { id: 2, name: 'orange' },
     { id: 3, name: 'blueberry' },
     { id: 4, name: 'banana' },
     { id: 5, name: 'kiwi' },
   ];

   ReactDOM.createRoot(document.getElementById('root')).render(
     <FruitList fruits={data} />
   );
   ```

3. If not already opened from the previous step, open `Chrome DevTools` switch to the `Console` tab
4. Refresh the page in your browser
5. Click an item on the list
6. In the `Console` you should see something similar to the following:

   ```
     SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: li, …} main.js:4
     removed 2
   ```

> Note that with bind any further arguments including the event object is automatically forwarded.

> Note: returning false does not prevent the default browser behavior as it does in vanilla JavaScript as shown in this example.

### Synthetic Events

The event object we are returned in the previous example is an imitation of but not actually the same as the `Event` object in the browsers' `Document Object Model (DOM)`.

A `SyntheticEvent` is a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

## Subscribing in a Class Component

#### Setup

1. Comment out the function component that renders a button
2. Comment out the event handler
3. If not already opened from the previous step, open `Chrome DevTools` switch to the `Console` tab

#### Steps

1. Create a class component that renders a button
2. Create a class method to be your event handler
3. Bind the class method in the constructor

   ```js
   class Button extends React.Component {
     constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);
     }

     handleClick() {
       console.log('clicked');
     }

     render() {
       return <button onClick={this.handleClick}>Click Me!</button>;
     }
   }

   ReactDOM.createRoot(document.getElementById('root')).render(<Button />);
   ```

   > Bind? The next section discusses why binding is necessary as well as alternative syntaxes that can be used to bind the event handler including which are considering the best practice.

   > It is mandatory to call `super(props);` in the constructor. It sets `this.props` in your constructor in case you want to access them there. They would be `undefined` when accessing `this.props` in your constructor otherwise.

4. Refresh the page in your browser
5. Click the button
6. You should see `clicked` being logged to the console again.

### Binding (the Event Handler)

The event handler is a function that needs to get bound to the class instance if you are using class components instead of function components.

### Why Binding is Necessary?

Binding is necessary in JavaScript because the value of the function context `this` inside a method depends on how the method is invoked.

In the example below, code snippet A and B are not equivalent.

- A) returns an instance of the class
- B) returns undefined
  > Note: Because we are using Babel to transpile our JavaScript code we are in strict mode ('use strict'). If we were not in strict mode B) would have returned `window`

```js
class Logger {
  log() {
    console.log(this);
  }
}

// code snippet A
let logger = new Logger();
logger.log();
// Logger{}

// code snippet B
let logFn = logger.log;
logFn();
// undefined
```

This next section is about the different ways to do the binding.

### Binding Examples

- Example A: just creating a method on a class (DOESN'T WORK)

  ```js
  // class method: no binding
  // logs undefined
  class ExplainBindingsComponent extends React.Component {
    handleClick() {
      console.log(this);
    }
    render() {
      return (
        <button onClick={this.handleClick} type="button">
          Click Me
        </button>
      );
    }
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <ExplainBindingsComponent />
  );
  ```

- Example B: binding the method in the constructor (to an instance of the class: this) (WORKS but VERBOSE so AVOID)

  ```js
  // class method: bind in constructor
  // logs instance of the component
  class ExplainBindingsComponent extends React.Component {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      console.log(this);
    }
    render() {
      return (
        <button onClick={this.handleClick} type="button">
          Click Me
        </button>
      );
    }
  }
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ExplainBindingsComponent />
  );
  ```

  - Best Practice
  - Why?

    - Binding only happens once when the component is instantiated

- Example C: Assign an arrow function to a class field (WORKS: RECOMMENDED)

  ```js
  // arrow function: assigned to class field
  // logs instance of the component
  class ExplainBindingsComponent extends React.Component {
    handleClick = () => {
      console.log(this);
    };

    render() {
      return (
        <button onClick={this.handleClick} type="button">
          Click Me
        </button>
      );
    }
  }
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ExplainBindingsComponent />
  );
  ```

  - Best Practice (emerging)
  - Why?

    - The binding in the constructor is repetitive and can be forgotten
    - Although arrow functions are commonly used in ES6/ES2015, this technique also uses a class field declaration which is a [Stage 3 Proposal](https://github.com/tc39/proposal-class-fields) and can require additional configuration to get setup.
    - Class field declarations are setup/configured in a Create-React-App by default
    - Facebook says they will support a `code-mod` (easy migration path, rewriting current syntax automatically)
      - Facebook has thousands of React components and does not want to do this manually

- Example D: In a Function Component (WORKS: RECOMMENDED)

  Binding to `this` is really about being able to access a member variable (loading, message, projects) or function (handleClick, loadProjects, setState).

  With function components there is no instance of a component and all member variables and functions can just be defined inside the function that creates the components so they are easily accessed without worrying about the value of `this`.

  ```js
  function ExplainBindingsComponent() {
    const memberValue = 'test';
    function handleClick() {
      console.log(memberValue);
    }

    return (
      <button onClick={handleClick} type="button">
        Click Me
      </button>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <ExplainBindingsComponent />
  );
  ```

  OR using an arrow function after you get comfortable with the syntax

  ```js
  function ExplainBindingsComponent() {
    const memberValue = 'test';
    const handleClick = () => {
      console.log(memberValue);
    };

    return (
      <button onClick={handleClick} type="button">
        Click Me
      </button>
    );
  }
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ExplainBindingsComponent />
  );
  ```

### Binding (the Event Handler): Other Approaches to Avoid

- In the render method (to an instance of the class: this)

  ```js
  // class method: bind in render
  // logs instance of the component
  class ExplainBindingsComponent extends React.Component {
    handleClick() {
      console.log(this);
    }
    render() {
      return (
        <button onClick={this.handleClick.bind(this)} type="button">
          Click Me
        </button>
      );
    }
  }
  const element = <ExplainBindingsComponent />;
  ```

  - Avoid
  - Why?
    - Binds the class method every time the render method runs, meaning every time the component updates.
    - Eventually impact application performance (how quickly it renders).

- By defining it in the constructor

  ```js
  // class method: define in constructor w/ arrow function
  // logs instance of the component
  class ExplainBindingsComponent extends React.Component {
    constructor() {
      super();
      this.handleClick = () => {
        console.log(this);
      };
    }

    render() {
      return (
        <button onClick={this.handleClick} type="button">
          Click Me
        </button>
      );
    }
  }
  const element = <ExplainBindingsComponent />;
  ```

  - Avoid
  - Why?
    - Clutters constructor with business logic
    - Constructor only there to instantiate your class and initialize properties

## Reference

- [React Documentation: Handling Events](https://reactjs.org/docs/handling-events.html)
- [React Documentation: Passing Functions to Components](https://reactjs.org/docs/faq-functions.html)
