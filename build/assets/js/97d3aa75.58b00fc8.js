"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const l={title:"Conditional Rendering",sidebar_label:"Conditional Rendering",slug:"/conditional-rendering"},r=void 0,o={unversionedId:"ConditionalRendering",id:"ConditionalRendering",title:"Conditional Rendering",description:"Null",source:"@site/docs/10-ConditionalRendering.md",sourceDirName:".",slug:"/conditional-rendering",permalink:"/docs/conditional-rendering",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-ConditionalRendering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Conditional Rendering",sidebar_label:"Conditional Rendering",slug:"/conditional-rendering"},sidebar:"someSidebar",previous:{title:"Side Effects & Lifecyle",permalink:"/docs/side-effects-lifecyle"},next:{title:"Component Architecture",permalink:"/docs/component-architecture"}},s={},u=[{value:"Null",id:"null",level:3},{value:"Syntax Summary",id:"syntax-summary",level:2},{value:"if",id:"if",level:5},{value:"if else",id:"if-else",level:5},{value:"? (inline)",id:"-inline",level:4},{value:"&amp;&amp; (inline)",id:"-inline-1",level:4},{value:"if",id:"if-1",level:2},{value:"Function Component Example (using hooks)",id:"function-component-example-using-hooks",level:4},{value:"Class Component Example",id:"class-component-example",level:4},{value:"Conditional Operator ? true : false",id:"conditional-operator--true--false",level:2},{value:"Function Component Example (with hooks)",id:"function-component-example-with-hooks",level:4},{value:"Class Component Example",id:"class-component-example-1",level:4},{value:"Logical &amp;&amp; Operator",id:"logical--operator",level:2},{value:"Function Component Example (with hooks)",id:"function-component-example-with-hooks-1",level:4},{value:"Class Component Example",id:"class-component-example-2",level:4},{value:"Reference",id:"reference",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"null"},"Null"),(0,i.kt)("p",null,"An element that is null or undefined will render nothing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Example(){\n    const elementVariable;\n\n    return (\n        <>\n        <h3>Nothing will be rendered below</h3>\n        {elementVariable}\n        </>\n    )\n}\n")),(0,i.kt)("h2",{id:"syntax-summary"},"Syntax Summary"),(0,i.kt)("p",null,"Just use the features in the JavaScript language."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if statement"),(0,i.kt)("li",{parentName:"ul"},"conditional ? (ternary) operator"),(0,i.kt)("li",{parentName:"ul"},"logical && operator")),(0,i.kt)("h5",{id:"if"},"if"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const condition = props.condition;\nconst elementVariable;\nif(condition){\n    elementVariable = <div>true</div>\n}\n\nreturn (\n    <>\n    <h3>Element Variables</h3>\n    {elementVariable}\n    </>\n)\n")),(0,i.kt)("h5",{id:"if-else"},"if else"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const condition = props.condition;\nconst elementVariable;\nif(condition){\n    elementVariable = <div>true</div>\n}\nelse{\n    elementVariable = <div>false</div>\n}\n\nreturn (\n    <>\n    <h3>Element Variables</h3>\n    {elementVariable}\n    </>\n)\n")),(0,i.kt)("p",null,"In summary, ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"can be used in the function body, but not after a ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," statement"),(0,i.kt)("li",{parentName:"ul"},"requires you to create an element variable and then later render that variable"),(0,i.kt)("li",{parentName:"ul"},"are easy to read, particularly for beginners to React"),(0,i.kt)("li",{parentName:"ul"},"can be used when you have an if or an if else condition"),(0,i.kt)("li",{parentName:"ul"},"in rare cases, can be used to opt-out early from a render method and prevent a component from rendering at all")),(0,i.kt)("h4",{id:"-inline"},"? (inline)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return condition ? <div>true</div> : <div>false</div>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"conditional operator in JavaScript (called ternary operator in other languages)"),(0,i.kt)("li",{parentName:"ul"},"can be used after a ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," statement (so the code reads more like a traditional templating language)"),(0,i.kt)("li",{parentName:"ul"},"is less code than an ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," because it is not necessary to create a variable to hold the JSX element"),(0,i.kt)("li",{parentName:"ul"},"requires you to return null if you don't want to render anything in the false case")),(0,i.kt)("h4",{id:"-inline-1"},"&& (inline)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return condition && <div>true</div>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it."))),(0,i.kt)("li",{parentName:"ul"},"can be used after a ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," statement (so the code reads more like a traditional templating language)"),(0,i.kt)("li",{parentName:"ul"},"is less code than an ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," because it is not necessary to create a variable to hold the JSX element"),(0,i.kt)("li",{parentName:"ul"},"When there isn't an ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," condition, using a logical ",(0,i.kt)("inlineCode",{parentName:"li"},"&&")," operator can make the conditional rendering logic more readable.")),(0,i.kt)("h2",{id:"if-1"},"if"),(0,i.kt)("p",null,"Here is an example of how to add or remove a part of a component (element) using an element variable."),(0,i.kt)("p",null,"As mentioned previously, you can't use an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement in JavaScript. ",(0,i.kt)("strong",{parentName:"p"},"Element variables")," allow you to capture and store an element(s) in a variable to later be rendered."),(0,i.kt)("h4",{id:"function-component-example-using-hooks"},"Function Component Example (using hooks)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function DropdownMenu() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setIsOpen((currentIsOpen) => !currentIsOpen);\n  };\n\n  let menu;\n  if (isOpen) {\n    menu = (\n      <ul>\n        <li>Edit</li>\n        <li>Remove</li>\n        <li>Archive</li>\n      </ul>\n    );\n  }\n  return (\n    <div>\n      <button onClick={handleClick}>Actions</button>\n      {menu}\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);\n")),(0,i.kt)("h4",{id:"class-component-example"},"Class Component Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DropdownMenu extends React.Component {\n  state = {\n    isOpen: false,\n  };\n\n  handleClick = () => {\n    this.setState((state) => {\n      return { isOpen: !state.isOpen };\n    });\n  };\n\n  render() {\n    let menu;\n    if (this.state.isOpen) {\n      menu = (\n        <ul>\n          <li>Edit</li>\n          <li>Remove</li>\n          <li>Archive</li>\n        </ul>\n      );\n    }\n    return (\n      <div>\n        <button onClick={this.handleClick}>Actions</button>\n        {menu}\n      </div>\n    );\n  }\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);\n")),(0,i.kt)("h2",{id:"conditional-operator--true--false"},"Conditional Operator ? true : false"),(0,i.kt)("h4",{id:"function-component-example-with-hooks"},"Function Component Example (with hooks)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function DropdownMenu() {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const handleClick = () => {\n    setIsOpen((currentIsOpen) => !currentIsOpen);\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Actions</button>\n      {isOpen ? (\n        <ul>\n          <li>Edit</li>\n          <li>Remove</li>\n          <li>Archive</li>\n        </ul>\n      ) : null}\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);\n")),(0,i.kt)("h4",{id:"class-component-example-1"},"Class Component Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DropdownMenu extends React.Component {\n  state = {\n    isOpen: false,\n  };\n\n  handleClick = () => {\n    this.setState((state) => {\n      return { isOpen: !state.isOpen };\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Actions</button>\n        {this.state.isOpen ? (\n          <ul>\n            <li>Edit</li>\n            <li>Remove</li>\n            <li>Archive</li>\n          </ul>\n        ) : null}\n      </div>\n    );\n  }\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);\n")),(0,i.kt)("p",null,"When there isn't an ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," condition, the return of ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," becomes awkward and difficult to read. In the next section, we'll look at a solution to this the logical && operator."),(0,i.kt)("h2",{id:"logical--operator"},"Logical && Operator"),(0,i.kt)("h4",{id:"function-component-example-with-hooks-1"},"Function Component Example (with hooks)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function DropdownMenu() {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const handleClick = () => {\n    setIsOpen((currentIsOpen) => !currentIsOpen);\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Actions</button>\n      {isOpen && (\n        <ul>\n          <li>Edit</li>\n          <li>Remove</li>\n          <li>Archive</li>\n        </ul>\n      )}\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);\n")),(0,i.kt)("h4",{id:"class-component-example-2"},"Class Component Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DropdownMenu extends React.Component {\n  state = {\n    isOpen: false,\n  };\n\n  handleClick = () => {\n    this.setState((state) => {\n      return { isOpen: !state.isOpen };\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Actions</button>\n        {this.state.isOpen && (\n          <ul>\n            <li>Edit</li>\n            <li>Remove</li>\n            <li>Archive</li>\n          </ul>\n        )}\n      </div>\n    );\n  }\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/conditional-rendering.html"},"Conditional Rendering: Official Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.robinwieruch.de/conditional-rendering-react/"},"All React Conditional Rendering Techniques")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbnb/javascript/issues/520"},"AirBnb Styleguide: Conditional Rendering (Discussion: no rule yet)"))))}p.isMDXComponent=!0}}]);