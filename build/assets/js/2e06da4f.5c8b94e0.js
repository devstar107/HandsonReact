"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[3590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>j});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,j=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(j,s(s({ref:t},l),{},{components:r})):n.createElement(j,s({ref:t},l))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Lab 8: More Reusable Components"},s=void 0,p={unversionedId:"labs/js/MoreReusableComponents",id:"labs/js/MoreReusableComponents",title:"Lab 8: More Reusable Components",description:"Objectives",source:"@site/docs/labs/js/08-MoreReusableComponents.md",sourceDirName:"labs/js",slug:"/labs/js/MoreReusableComponents",permalink:"/docs/labs/js/MoreReusableComponents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/labs/js/08-MoreReusableComponents.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Lab 8: More Reusable Components"},sidebar:"someSidebar",previous:{title:"Lab 7: Displaying List Data",permalink:"/docs/labs/js/DisplayingListData"},next:{title:"Lab 9: Responding to an Event",permalink:"/docs/labs/js/RespondingToEvent"}},i={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Create another reusable component",id:"create-another-reusable-component",level:3},{value:"Render the reusable component",id:"render-the-reusable-component",level:3},{value:"\u2714 You have completed Lab 8",id:"-you-have-completed-lab-8",level:3}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create another reusable component"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Render the reusable component")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"create-another-reusable-component"},"Create another reusable component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectCard.js"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectCard")," as a ",(0,a.kt)("strong",{parentName:"p"},"function")," (not class) component that meets the following specifications:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Takes a ",(0,a.kt)("inlineCode",{parentName:"li"},"project")," object as a ",(0,a.kt)("inlineCode",{parentName:"li"},"prop"),"."),(0,a.kt)("li",{parentName:"ol"},"Cut the ",(0,a.kt)("inlineCode",{parentName:"li"},'<div className="card">...</div>')," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"ProjectList")," component and use it as the JSX for the ",(0,a.kt)("inlineCode",{parentName:"li"},"ProjectCard")," component."),(0,a.kt)("li",{parentName:"ol"},"Add a function to format the description to 60 characters and call it when rendering the description.")),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectcardjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectCard.js")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Project } from './Project';\nimport React from 'react';\nimport PropTypes from 'prop-types';\n\nfunction formatDescription(description) {\n  return description.substring(0, 60) + '...';\n}\n\nfunction ProjectCard(props) {\n  const { project } = props;\n  return (\n    <div className=\"card\">\n      <img src={project.imageUrl} alt={project.name} />\n      <section className=\"section dark\">\n        <h5 className=\"strong\">\n          <strong>{project.name}</strong>\n        </h5>\n        <p>{formatDescription(project.description)}</p>\n        <p>Budget : {project.budget.toLocaleString()}</p>\n      </section>\n    </div>\n  );\n}\n\nProjectCard.propTypes = {\n  project: PropTypes.instanceOf(Project).isRequired,\n};\n\nexport default ProjectCard;\n")))),(0,a.kt)("h3",{id:"render-the-reusable-component"},"Render the reusable component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectList.js"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Render the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectCard")," component passing it the ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," as a ",(0,a.kt)("inlineCode",{parentName:"p"},"prop"),"."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectlistjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectList.js")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { Project } from \'./Project\';\n+ import ProjectCard from \'./ProjectCard\';\n\nfunction ProjectList ({ projects }) {\n    const items = projects.map(project => (\n      <div key={project.id} className="cols-sm">\n-      <div className="card">\n-      <img src={project.imageUrl} alt={project.name} />\n-       <section className="section dark">\n-         <h5 className="strong">\n-           <strong>{project.name}</strong>\n-         </h5>\n-         <p>{project.description}</p>\n-        <p>Budget : {project.budget.toLocaleString()}</p>\n-       </section>\n-     </div>\n+      <ProjectCard project={project}></ProjectCard>\n      </div>\n    ));\n    return <div className="row">{items}</div>;\n\n}\n\nProjectList.propTypes = {\n   projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired\n};\n\nexport default ProjectList;\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verify")," the ",(0,a.kt)("strong",{parentName:"p"},"project")," ",(0,a.kt)("strong",{parentName:"p"},"data")," ",(0,a.kt)("strong",{parentName:"p"},"displays")," correctly (",(0,a.kt)("em",{parentName:"p"},"it should still look the same as it did in the last lab except for the ... after the description"),") in the browser."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/93270134-717a4580-f77e-11ea-95f5-73b8d6a17684.png",alt:"image"})))),(0,a.kt)("blockquote",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-you-have-completed-lab-8"},"\u2714"," You have completed Lab 8"))}m.isMDXComponent=!0}}]);