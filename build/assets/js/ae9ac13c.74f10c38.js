"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[2811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"CSS Grid"},i=void 0,l={unversionedId:"gatsby/labs/CSSGrid",id:"gatsby/labs/CSSGrid",title:"CSS Grid",description:"Applying Grid to Acme",source:"@site/docs/gatsby/labs/05-CSSGrid.md",sourceDirName:"gatsby/labs",slug:"/gatsby/labs/CSSGrid",permalink:"/docs/gatsby/labs/CSSGrid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gatsby/labs/05-CSSGrid.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"CSS Grid"},sidebar:"someSidebar",previous:{title:"Data",permalink:"/docs/gatsby/labs/Data"},next:{title:"Images",permalink:"/docs/gatsby/labs/Images"}},s={},d=[{value:"Applying Grid to Acme",id:"applying-grid-to-acme",level:2},{value:"Using CSS",id:"using-css",level:3},{value:"Using Tailwind Utility Classes",id:"using-tailwind-utility-classes",level:3},{value:"<code>srccomponentslayout.js</code>",id:"srccomponentslayoutjs-1",level:4}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"applying-grid-to-acme"},"Applying Grid to Acme"),(0,r.kt)("h3",{id:"using-css"},"Using CSS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"acme")," gatsby directory in an editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"footer.js")," to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," element instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"."),(0,r.kt)("h4",{parentName:"li",id:"srccomponentsfooterjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\footer.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\nexport default function Footer() {\n  return (\n-    <div>\n+    <footer>\n      <nav className="my-8">\n        <FooterLink>Privacy</FooterLink>\n        <FooterLink>Terms</FooterLink>\n        <FooterLink>Careers</FooterLink>\n        <span className="text-gray-400"> &#169; Acme Inc.</span>\n      </nav>\n-    </div>\n+    </footer>\n  )\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"layout")," to include three distinct areas: Header, Main, and Footer."),(0,r.kt)("h4",{parentName:"li",id:"srccomponentslayoutjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\layout.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nexport default function Layout({ children }) {\n  return (\n    <div className="p-2 mx-auto container w-auto border-box">\n      <Header />\n      <main>{children}</main>\n      <aside>\n        <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">\n          <blockquote className="text-xl text-gray-600 ">\n            "We here at Acme Inc. understand that it is better to leverage\n            efficiently than to benchmark extensibly."\n          </blockquote>\n          <figcaption>\n            -Anders Reinfeld, <em>CEO</em>\n          </figcaption>\n        </figure>\n      </aside>\n      <Footer />\n    </div>\n  );\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following css to create a two column, three row grid layout."),(0,r.kt)("h4",{parentName:"li",id:"srcstylesglobalcss"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\styles\\global.css")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  display: grid;\n  grid-template-columns: 1fr 20em;\n  grid-template-rows: 6em 1fr 6em;\n}\n\nheader,\nfooter {\n  grid-column: 1/3;\n}\n\n/*comment these styles after getting it working, these will just allow us to see the grid */\n.grid-item,\nheader,\nmain,\naside,\nfooter {\n  border: 1px solid red !important;\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the site and verify the new layout.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the quote below the image on the home page as it is now in the aside. You will need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"top-margin")," to the paragraph below the image...use Tailwind utility class."))),(0,r.kt)("h3",{id:"using-tailwind-utility-classes"},"Using Tailwind Utility Classes"),(0,r.kt)("p",null,"In this section we are going to achieve the same CSS grid using tailwind utility classes instead of custom CSS."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Comment out the existing CSS grid styles."),(0,r.kt)("h4",{parentName:"li",id:"srcstylesglobalcss-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\styles\\global.css")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* .container {\n  display: grid;\n  grid-template-columns: 1fr 20em;\n  grid-template-rows: 6em 1fr 6em;\n}\n\nheader,\nfooter {\n  grid-column: 1/3;\n} */\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extend Tailwind's theme to define ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-columns-layout")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-rows-layout")," classes with the desired 2 column, 3 row layout."),(0,r.kt)("h4",{parentName:"li",id:"tailwindconfigjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"tailwind.config.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'\nmodule.exports = {\n  purge: ["./src/**/*.js"],\n  darkMode: false, // or \'media\' or \'class\'\n  theme: {\n    extend: {\n+      gridTemplateColumns: {\n+        layout: "1fr 20em",\n+      },\n+      gridTemplateRows: {\n+        layout: "6em 1fr 6em",\n+      },\n    },\n  },\n  variants: {\n    extend: {\n      borderWidth: ["hover"],\n      borderStyle: ["hover"],\n      borderColor: ["hover"],\n    },\n  },\n  plugins: [],\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add those new utility classes and the grid class to the layout."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Be sure to remove ",(0,r.kt)("inlineCode",{parentName:"p"},"p-2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"w-auto"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"border-box"))),(0,r.kt)("h4",{id:"srccomponentslayoutjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\layout.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\nexport default function Layout({ children }) {\n  return (\n-     <div className="p-2 mx-auto container w-auto border-box">\n+    <div className="container mx-auto grid grid-cols-layout grid-rows-layout">\n      <Header />\n      <main>{children}</main>\n      <aside>\n        <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">\n          <blockquote className="text-xl text-gray-600 ">\n            "We here at Acme Inc. understand that it is better to leverage\n            efficiently than to benchmark extensibly."\n          </blockquote>\n          <figcaption>\n            -Anders Reinfeld, <em>CEO</em>\n          </figcaption>\n        </figure>\n      </aside>\n      <Footer />\n    </div>\n  )\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"col-start-1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"col-end-3")," utility classes from Tailwind to the ",(0,r.kt)("inlineCode",{parentName:"p"},"header.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer.js")),(0,r.kt)("h4",{parentName:"li",id:"srccomponentsheaderjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\header.js")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Add any additional utitlity classes to the header that are shown below if they don't already exist")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\nexport default function Header() {\n...\n\n  return (\n-    <header className="pt-5 pb-10 border-b-2 border-solid border-gray-600">\n+    <header className="col-start-1 col-end-3 pt-5 pb-10 border-b-2 border-solid border-gray-600">\n      <Link to="/" className="text-4xl mx-4">\n        {data.site.siteMetadata.title}\n      </Link>\n      <nav className="inline">\n        <NavLink to="/">Home</NavLink>\n        <NavLink to="/about">About</NavLink>\n      </nav>\n    </header>\n  )\n}\n')),(0,r.kt)("h4",{parentName:"li",id:"srccomponentsfooterjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\footer.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'export default function Footer() {\n  return (\n-    <footer>\n+    <footer className="col-start-1 col-end-3">\n      <nav className="my-8">\n        <FooterLink>Privacy</FooterLink>\n        <FooterLink>Terms</FooterLink>\n        <FooterLink>Careers</FooterLink>\n        <span className="text-gray-400"> &#169; Acme Inc.</span>\n      </nav>\n    </footer>\n  )\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If time permits, add a CSS transform to the aside in ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.js"),"."),(0,r.kt)("h4",{parentName:"li",id:"srccomponentslayoutjs-2"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\layout.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\nexport default function Layout({ children }) {\n  return (\n    <div className="container mx-auto grid grid-cols-layout grid-rows-layout">\n      <Header />\n      <main>{children}</main>\n-      <aside>\n-        <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">\n+      <aside className="m-2 p-2 bg-gray-100 w-full h-56 flex-none rounded-xl">\n+        <figure className="transform -rotate-1 p-6 shadow-sm rounded-md  bg-red-200  my-2 mx-0">\n          <blockquote className="text-xl text-gray-600 ">\n            "We here at Acme Inc. understand that it is better to leverage\n            efficiently than to benchmark extensibly."\n          </blockquote>\n          <figcaption>\n            -Anders Reinfeld, <em>CEO</em>\n          </figcaption>\n        </figure>\n      </aside>\n      <Footer />\n    </div>\n  )\n}\n')))))}m.isMDXComponent=!0}}]);