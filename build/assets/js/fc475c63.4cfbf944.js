"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[7589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Lab 21 a: Route Transitions"},i=void 0,s={unversionedId:"labs/js/21a-RouterTransitions",id:"labs/js/21a-RouterTransitions",title:"Lab 21 a: Route Transitions",description:"This lab is optional and should only be done if time permits",source:"@site/docs/labs/js/21a-RouterTransitions.md",sourceDirName:"labs/js",slug:"/labs/js/21a-RouterTransitions",permalink:"/docs/labs/js/21a-RouterTransitions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/labs/js/21a-RouterTransitions.md",tags:[],version:"current",frontMatter:{title:"Lab 21 a: Route Transitions"},sidebar:"someSidebar",previous:{title:"Lab 21: Route Parameters",permalink:"/docs/labs/js/RouteParameters"},next:{title:"Lab 21 b: Splash Screen",permalink:"/docs/labs/js/21b-SplashScreen"}},p={},l=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Libraries Compared",id:"libraries-compared",level:3},{value:"Reference",id:"reference",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lab is optional and should only be done if time permits")),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Animate in and out pages as routes transition")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-transition-group")," library."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"React Transition Group")," exposes simple components useful for defining entering and exiting transitions.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://reactcommunity.org/react-transition-group/"},"React Transition Group")," used to be part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," library itself but has since been removed and is part of ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactCommunity.org"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# npm\nnpm install react-transition-group\n\n# if using TypeScript\nnpm install @types/react-transition-group\n\n# yarn\nyarn add react-transition-group\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Router>")," component up one level to wrap the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),". This is necessary for us to be able to access the new ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook that is part of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router")," at the point we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSSTransition")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Routes")," components. We get the ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can't use any of the hooks from within the same component that puts the Router into the tree.\nYou need to move your BrowserRouter out of that component. It can go in the root.render() call, for instance.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"React Transition Group")," is ",(0,r.kt)("strong",{parentName:"p"},"not an animation library")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"React-Motion"),", it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.")),(0,r.kt)("h4",{parentName:"li",id:"srcappjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\App.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\nimport {\n-  BrowserRouter as Router,\nRoute,\nNavLink,\nRoutes,\n+  useLocation,\n} from \'react-router-dom\';\n\n...\n\nfunction App() {\n+  let location = useLocation();\nreturn (\n    <Provider store={store}>\n-      <Router>\n    <header className="sticky">\n        <span className="logo">\n        <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />\n        </span>\n        <NavLink to="/" className="button rounded">\n        <span className="icon-home"></span>\n        Home\n        </NavLink>\n        <NavLink to="/projects/" className="button rounded">\n        Projects\n        </NavLink>\n    </header>\n    <div className="container">\n        <Routes location={location}>\n        <Route path="/"  component={HomePage} />\n        <Route path="/projects" component={ProjectsPage} />\n        <Route path="/projects/:id" component={ProjectPage} />\n        </Routes>\n    </div>\n-      </Router>\n    </Provider>\n);\n}\n\nexport default App;\n')),(0,r.kt)("h4",{parentName:"li",id:"srcindexjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\index.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"...\n+ import { BrowserRouter as Router } from 'react-router-dom';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n<React.StrictMode>\n+  <Router>\n     <App />\n+  </Router>\n</React.StrictMode>\n);\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Routes")," component with a ",(0,r.kt)("inlineCode",{parentName:"p"},"TransitionGroup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CSSTransition")," component from the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-transition-group")," library."),(0,r.kt)("h4",{parentName:"li",id:"srcappjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\App.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { CSSTransition, TransitionGroup } from \'react-transition-group\';\n\nfunction App() {\nlet location = useLocation();\nreturn (\n    <Provider store={store}>\n    <header className="sticky">\n        <span className="logo">\n        <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />\n        </span>\n        <NavLink to="/" className="button rounded">\n        <span className="icon-home"></span>\n        Home\n        </NavLink>\n        <NavLink to="/projects/" className="button rounded">\n        Projects\n        </NavLink>\n    </header>\n    <div className="container">\n+        <TransitionGroup>\n+          <CSSTransition key={location.key} classNames="fade"  timeout={{ enter: 400, exit: 200 }}>\n-           <Routes>\n+           <Routes location={location}>\n            <Route path="/" component={HomePage} />\n            <Route path="/projects" component={ProjectsPage} />\n            <Route path="/projects/:id" component={ProjectPage} />\n            </Routes>\n+          </CSSTransition>\n+        </TransitionGroup>\n    </div>\n    </Provider>\n);\n}\n\nexport default App;\n')))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fade")," CSS styles."),(0,r.kt)("h5",{parentName:"li",id:"srcindexcss"},(0,r.kt)("inlineCode",{parentName:"h5"},"src\\index.css")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"... \n/* add these below existing styles */\n\n.fade-enter {\n  opacity: 0;\n  z-index: 1;\n}\n\n.fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: opacity 400ms ease-in;\n}\n\n.fade-exit.fade-exit-active {\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n")),(0,r.kt)("p",{parentName:"li"},"This style should already exist but it is also important to ensure your container has a height of 100 percent."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  height: 100%;\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click through the pages in the application and see the previous page content fade out and the new page content fade in to view."))),(0,r.kt)("h3",{id:"libraries-compared"},"Libraries Compared"),(0,r.kt)("p",null,"React Transition Group just makes transitions easier. It is not an animation library.\nReact Spring and React Framer Motion are animation libraries. Historically, React Spring has been the most popular library but React Framer Motion was released more recently and tends to be easier to use and comprehend. This article can be useful in making a decision on a library: ",(0,r.kt)("a",{parentName:"p",href:"https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/"},"What\u2019s the most developer-friendly React animation library?"),"."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactcommunity.org/react-transition-group/"},"React Transition Group Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/animation.html"},"React Documentation Animation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/"},"What\u2019s the most developer-friendly React animation library?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactrouter.com/web/example/animated-transitions"},"React Router Animated Transitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router/issues/7015"},"Cannot read property 'location' of undefined at useLocation\n"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NUQkajBdnmQ"},"How to create page transitions with React Router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=53Y8q-SgLF0"},"Animated Transitions with React Router v4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qJt-FtzJ5fo&t=24s"},"Page Transitions in React Router (With Framer Motion)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.react-spring.io/"},"React Spring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.framer.com/motion/"},"React Framer Motion"))))))}m.isMDXComponent=!0}}]);