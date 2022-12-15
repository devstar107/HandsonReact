"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[1730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Routing",sidebar_label:"Routing",slug:"/routing"},r=void 0,l={unversionedId:"Routing",id:"Routing",title:"Routing",description:"Overview",source:"@site/docs/15-Routing.md",sourceDirName:".",slug:"/routing",permalink:"/docs/routing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/15-Routing.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Routing",sidebar_label:"Routing",slug:"/routing"},sidebar:"someSidebar",previous:{title:"Lab 19: HTTP PUT",permalink:"/docs/labs/ts/HTTP-PUT"},next:{title:"Build & Deploy",permalink:"/docs/build-deploy"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Not Found (404)",id:"not-found-404",level:3},{value:"URL Parameters",id:"url-parameters",level:3},{value:"Nesting",id:"nesting",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Similar in function to a server-side router in an MVC framework",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Associates a route (url) with a particular controller action"))),(0,o.kt)("li",{parentName:"ul"},"React Router switches between (page/container) components when a route changes"),(0,o.kt)("li",{parentName:"ul"},"Back button is broken by default when page/container components change",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the browser's history is not updated with a new url when page/container components change"),(0,o.kt)("li",{parentName:"ul"},"React Router programmatically adds entries to the browser's history"),(0,o.kt)("li",{parentName:"ul"},"enables the back button to work in React applications")))),(0,o.kt)("p",null,"There are two versions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"BrowserRouter (react-router-dom) for web applications."),(0,o.kt)("li",{parentName:"ol"},"NativeRouter (react-router-native) for use with React Native.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the package"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install react-router-dom@6\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the script tag"),(0,o.kt)("h4",{parentName:"li",id:"indexhtml"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.html")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'\n...\n    <script src="/node_modules/react/umd/react.development.js"><\/script>\n    <script src="/node_modules/react-dom/umd/react-dom.development.js"><\/script>\n\n+   <script src="/node_modules/history/umd/history.development.js"><\/script>\n+   <script src="/node_modules/react-router/umd/react-router.development.js"><\/script>\n+   <script src="/node_modules/react-router-dom/umd/react-router-dom.development.js"><\/script>\n\n    <script src="/node_modules/@babel/standalone/babel.min.js"><\/script>\n    <script src="/node_modules/axios/dist/axios.min.js"><\/script>\n    <script type="text/babel" src="/main.js"><\/script>\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"! Be sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," script tag's src attribute starts with a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," or the router will not work properly when you refresh the page."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log the ",(0,o.kt)("inlineCode",{parentName:"p"},"RouterRouterDOM")," to verify it is installed properly"),(0,o.kt)("h4",{parentName:"li",id:"mainjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"main.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(window.ReactRouterDOM);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the console you should see:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"{BrowserRouter: \u0192, HashRouter: \u0192, Link: \u0192, \xa0\u2026}\n")))),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add these styles"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* styles.css */\n\n.container {\n  border: 1px solid #ddd;\n  margin: 30px;\n  padding: 30px;\n}\n\nnav ul {\n  list-style: none;\n}\n\nnav ul li {\n  display: inline;\n}\n\nnav ul li:after {\n  content: ' | ';\n}\n\nnav ul li:last-child:after {\n  content: '';\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try this code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n  BrowserRouter: Router,\n  Route,\n  Routes,\n  Link,\n  NavLink,\n  Navigate,\n  useParams,\n  useLocation,\n  useNavigation,\n} = window.ReactRouterDOM;\n\nfunction Home() {\n  return <h2>Home</h2>;\n}\n\nfunction About() {\n  return <h2>About</h2>;\n}\n\nfunction Contact() {\n  return <h2>Contact</h2>;\n}\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <nav>\n          <ul>\n            <li>\n              <Link to="/">Home</Link>\n            </li>\n            <li>\n              <Link to="/about">About</Link>\n            </li>\n            <li>\n              <Link to="/contact">Contact</Link>\n            </li>\n          </ul>\n        </nav>\n\n        <div className="container">\n          <Routes>\n            <Route path="/" element={<Home />} />\n            <Route path="about" element={<About />} />\n            <Route path="contact" element={<Contact />} />\n          </Routes>\n        </div>\n      </div>\n    </Router>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\'root\')).render(<App />);\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the Link tags to NavLink tags"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<nav>\n  <ul>\n    <li>\n      <NavLink to="/">Home</NavLink>\n    </li>\n    <li>\n      <NavLink to="/about">About</NavLink>\n    </li>\n    <li>\n      <NavLink to="/contact">Contact</NavLink>\n    </li>\n  </ul>\n</nav>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following style"),(0,o.kt)("h4",{parentName:"li",id:"stylescss"},(0,o.kt)("inlineCode",{parentName:"h4"},"styles.css")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},"... .active {\n  background-color: #bee5eb;\n  padding: 10px;\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh the browser and see the navigation items are highlighted."))),(0,o.kt)("h3",{id:"not-found-404"},"Not Found (404)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Be sure you are running a development web server like serve with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-s")," flag."),(0,o.kt)("h4",{parentName:"li",id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "start": "serve -s",\n    ...\n  },\n  ...\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the URL to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/noroute"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The navigation renders but the page is blank. Ideally, we would like to show a ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," component when this happens."))),(0,o.kt)("p",null,"3) Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function NotFound() {\n  return (\n    <>\n      <h2>Uh oh.</h2>\n      <p>\n        The page you requested could not be found. Is there any chance you\n        were looking for one of these?\n      </p>\n    </>\n  );\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a route for it with ",(0,o.kt)("strong",{parentName:"p"},"no path")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="about" element={<About />} />\n    <Route path="contact" element={<Contact />} />\n+   <Route path="*" element={<NotFound />} />\n  </Routes>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the home route and then the contact route and notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," component shows when visiting every route")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the various routes again and notice that only when you manually go to a route that doesn't exist like: ",(0,o.kt)("inlineCode",{parentName:"p"},"/noroute")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," component renders."))),(0,o.kt)("h3",{id:"url-parameters"},"URL Parameters"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This example builds on the code from the previous demonstrations in this section.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie")," model class."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add it just before the App component")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Movie {\n  constructor(id, name, description, type) {\n    this.id = id;\n    this.name = name;\n    this.description = description;\n    this.type = type;\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an array of mock movies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const movies = [\n  new Movie(\n    1,\n    ' Titanic',\n    'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',\n    'Drama'\n  ),\n  new Movie(\n    2,\n    ' E.T. the Extra-Terrestrial',\n    'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.',\n    'Fantasy'\n  ),\n  new Movie(\n    3,\n    'The Wizard of Oz',\n    // tslint:disable-next-line:max-line-length\n    'Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.',\n    'Fantasy'\n  ),\n  new Movie(\n    4,\n    'Star Wars: Episode IV - A New Hope ',\n    // tslint:disable-next-line:max-line-length\n    'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.',\n    'Action'\n  ),\n];\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Movies")," component to list movies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function MovieList({ movies }) {\n  return (\n    <div>\n      <h2>Movies</h2>\n      <ul>\n        {movies.map((movie) => (\n          <li key={movie.id}>\n            <Link to={`./${movie.id}`}>{movie.name}</Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a Route to go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Movies")," component"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Notice how we pass props to a the ",(0,o.kt)("inlineCode",{parentName:"p"},"Movies")," component which is rendered by the React Router")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="about" element={<About />} />\n  <Route path="contact" element={<Contact />} />\n+ <Route path="movies" element={<MovieList movies={movies} />} />\n  <Route path="movies/:id" element={<MovieDetail />} />\n  <Route path="*" element={<NotFound />} />\n</Routes>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a NavLink to navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Movies")," component."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'<nav>\n  <ul>\n    <li>\n      <NavLink to="/">Home</NavLink>\n    </li>\n    <li>\n      <NavLink to="/about">About</NavLink>\n    </li>\n    <li>\n      <NavLink to="/contact">Contact</NavLink>\n    </li>\n+    <li>\n+      <NavLink to="/movies">Movies</NavLink>\n+    </li>\n  </ul>\n</nav>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieDetail")," component to show the detail about a particular movie."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function MovieDetail() {\n  let { id } = useParams();\n  id = Number(id);\n  const movie = movies.find((movie) => movie.id === id);\n\n  return (\n    <div>\n      <h3>{movie.name}</h3>\n      <p>{movie.description}</p>\n    </div>\n  );\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a Route to go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieDetail")," component."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'...\n<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="about" element={<About />} />\n  <Route path="contact" element={<Contact />} />\n  <Route path="movies" element={<MovieList movies={movies} />} />\n+ <Route path="movies/:id" element={<MovieDetail />} />\n  <Route path="*" element={<NotFound />} />\n</Routes>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test the application and verify you can now click on a movie in the list and the movie detail route and component loads. Verify the browser's back button still works to return to the list after visiting the detail component."))),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieList")," component to nest the ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieDetail")," component route inside itself."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'function MovieList({ movies }) {\n  return (\n    <div>\n      <h2>Movies</h2>\n      <ul>\n        {movies.map((movie) => (\n          <li key={movie.id}>\n            <Link to={`./${movie.id}`}>{movie.name}</Link>\n          </li>\n        ))}\n      </ul>\n+      <div style={{ marginLeft: "40px" }}>\n+        <Routes>\n+          <Route path=":id" element={<MovieDetail />} />\n+        </Routes>\n+      </div>\n    </div>\n  );\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieDetail")," route from the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component. Add an astericks (","*",") after the ",(0,o.kt)("inlineCode",{parentName:"p"},"movies")," route so it can find the nested routes."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'...\n<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="about" element={<About />} />\n  <Route path="contact" element={<Contact />} />\n+  <Route path="movies/*" element={<MovieList movies={movies} />} />\n- <Route path="movies/:id" element={<MovieDetail />} />\n  <Route path="*" element={<NotFound />} />\n</Routes>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh the browser and notice that the movie detail now shows below the movie list after clicking a movie link."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/community/routing.html"},"List of all React Routers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router"},"React Router")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactrouter.com/docs/en/v6/upgrading/v5"},"Upgrading from v5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/react-router-4/"},"React Router 4 changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/8lgmmo/router5_or_reactrouter_4/"},"Change in React Router 4 and 5 from Earlier Versions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reach.tech/router/"},"Reach Router (now merged back into React Router)"))))}u.isMDXComponent=!0}}]);