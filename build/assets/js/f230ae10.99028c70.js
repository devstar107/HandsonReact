"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[9870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Lab 14: Component Communication through Multiple Levels"},i=void 0,p={unversionedId:"labs/js/MultipleLevelComponentCommunication",id:"labs/js/MultipleLevelComponentCommunication",title:"Lab 14: Component Communication through Multiple Levels",description:"Objectives",source:"@site/docs/labs/js/14-MultipleLevelComponentCommunication.md",sourceDirName:"labs/js",slug:"/labs/js/MultipleLevelComponentCommunication",permalink:"/docs/labs/js/MultipleLevelComponentCommunication",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/labs/js/14-MultipleLevelComponentCommunication.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Lab 14: Component Communication through Multiple Levels"},sidebar:"someSidebar",previous:{title:"Lab 13: More Component Communication",permalink:"/docs/labs/js/MoreComponentCommunication"},next:{title:"Lab 11: Communicating from Child to Parent Component",permalink:"/docs/labs/ts/CommunicatingChildToParentComponent"}},l={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"In a child component, accept a function as a prop and invoke it and pass a parameter",id:"in-a-child-component-accept-a-function-as-a-prop-and-invoke-it-and-pass-a-parameter",level:3},{value:"At the next level in the component hierarchy, accept a function as a prop and invoke it",id:"at-the-next-level-in-the-component-hierarchy-accept-a-function-as-a-prop-and-invoke-it",level:3},{value:"In a parent component, implement a function and pass it as a prop to a child component",id:"in-a-parent-component-implement-a-function-and-pass-it-as-a-prop-to-a-child-component",level:3},{value:"\u2714 You have completed Lab 14",id:"-you-have-completed-lab-14",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objectives"},"Objectives"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","In a child component, accept a function as a prop and invoke it and pass a parameter"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","At the next level in the component hierarchy, accept a function as a prop and invoke it"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","In a parent component, implement a function and pass it as a prop to a child component")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"in-a-child-component-accept-a-function-as-a-prop-and-invoke-it-and-pass-a-parameter"},"In a child component, accept a function as a prop and invoke it and pass a parameter"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open")," the ",(0,o.kt)("strong",{parentName:"p"},"file")," ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectForm.js"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To the ",(0,o.kt)("inlineCode",{parentName:"p"},"propTypes"),", ",(0,o.kt)("strong",{parentName:"p"},"add")," an ",(0,o.kt)("inlineCode",{parentName:"p"},"onSave")," function."),(0,o.kt)("h4",{parentName:"li",id:"srcprojectsprojectformjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectForm.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"...\nProjectForm.propTypes = {\n+ onSave: PropTypes.func.isRequired,\n  onCancel: PropTypes.func.isRequired\n};\n...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an event handler function ",(0,o.kt)("inlineCode",{parentName:"p"},"handleSubmit")," to handle the submission of the form."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The function should prevent the default behavior of the browser to post to the server and then invoke the function passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSave")," ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," and pass a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," that you create inline for now with just a name as shown below.")),(0,o.kt)("p",{parentName:"li"},"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," tag in the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," method to invoke handleSubmit and pass the SyntheticEvent object representing the DOM submit event."),(0,o.kt)("h4",{parentName:"li",id:"srcprojectsprojectformjs-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectForm.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'...\n+  import { Project } from \'./Project\';\n\n- function ProjectForm({ onCancel }) {\n+ function ProjectForm({ onSave, onCancel }) {\n\n+  const handleSubmit = (event) => {\n+    event.preventDefault();\n+    onSave(new Project({ name: \'Updated Project\' }));\n+  };\n\nreturn (\n\n   <form className="input-group vertical"\n+    onSubmit={handleSubmit}\n   >\n      <label htmlFor="name">Project Name</label>\n      <input type="text" name="name" placeholder="enter name" />\n      <label htmlFor="description">Project Description</label>\n      <textarea name="description" placeholder="enter description" />\n      <label htmlFor="budget">Project Budget</label>\n      <input type="number" name="budget" placeholder="enter budget" />\n      <label htmlFor="isActive">Active?</label>\n      <input type="checkbox" name="isActive" />\n      <div className="input-group">\n      <button className="primary bordered medium">Save</button>\n      <span />\n      <button type="button" className="bordered medium" onClick={onCancel}>\n         cancel\n      </button>\n      </div>\n   </form>\n);\n}\n...\nexport default ProjectForm;\n')))),(0,o.kt)("h3",{id:"at-the-next-level-in-the-component-hierarchy-accept-a-function-as-a-prop-and-invoke-it"},"At the next level in the component hierarchy, accept a function as a prop and invoke it"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open")," the ",(0,o.kt)("strong",{parentName:"p"},"file")," ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectList.js"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To the ",(0,o.kt)("inlineCode",{parentName:"p"},"propTypes"),", ",(0,o.kt)("strong",{parentName:"p"},"add")," an ",(0,o.kt)("inlineCode",{parentName:"p"},"onSave")," ",(0,o.kt)("strong",{parentName:"p"},"event handler"),"."),(0,o.kt)("h4",{parentName:"li",id:"srcprojectsprojectlistjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectList.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"...\nProjectList.propTypes = {\n   projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,\n+  onSave: PropTypes.func.isRequired\n};\n...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Update")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ProjectForm>")," component tag to ",(0,o.kt)("strong",{parentName:"p"},"handle")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"onSave")," event and have it ",(0,o.kt)("strong",{parentName:"p"},"invoke")," the function passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSave")," ",(0,o.kt)("inlineCode",{parentName:"p"},"prop"),"."),(0,o.kt)("h4",{parentName:"li",id:"srcprojectsprojectlistjs-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectList.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- function ProjectList({ projects }) {\n+ function ProjectList({ projects, onSave }) {\nconst [projectBeingEdited, setProjectBeingEdited] = useState({});\n\nconst handleEdit = (project) => {\n   setProjectBeingEdited(project);\n};\n\nconst cancelEditing = () => {\n   setProjectBeingEdited({});\n};\n\nreturn (\n   <div className="row">\n      {projects.map((project) => (\n      <div key={project.id} className="cols-sm">\n         {project === projectBeingEdited ? (\n            <ProjectForm\n+            onSave={onSave}\n            onCancel={cancelEditing} />\n         ) : (\n            <ProjectCard project={project} onEdit={handleEdit} />\n         )}\n      </div>\n      ))}\n   </div>\n);\n}\n...\nexport default ProjectList;\n')))),(0,o.kt)("h3",{id:"in-a-parent-component-implement-a-function-and-pass-it-as-a-prop-to-a-child-component"},"In a parent component, implement a function and pass it as a prop to a child component"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the file ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectsPage.js"),":"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Add")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"saveProject"),(0,o.kt)("strong",{parentName:"li"},"event handler")," that takes a ",(0,o.kt)("inlineCode",{parentName:"li"},"project")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectPage")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log"),"'s the project out."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Wire")," up the ",(0,o.kt)("strong",{parentName:"li"},"onSave")," ",(0,o.kt)("strong",{parentName:"li"},"event")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"<ProjectList />")," component rendered in the ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectPage")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"saveProject")," event handler.")),(0,o.kt)("h4",{parentName:"li",id:"srcprojectsprojectspagejs"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectsPage.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import React, { Fragment } from 'react';\nimport { MOCK_PROJECTS } from './MockProjects';\nimport ProjectList from './ProjectList';\n\nfunction ProjectsPage() {\n+  const saveProject = (project) => {\n+    console.log('Saving project: ', project);\n+  };\n\n  return (\n     <Fragment>\n        <h1>Projects</h1>\n        <ProjectList\n+         onSave={saveProject}\n          projects={MOCK_PROJECTS} />\n     </Fragment>\n  );\n}\n\nexport default ProjectsPage;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verify")," the ",(0,o.kt)("strong",{parentName:"p"},"application")," is working by ",(0,o.kt)("em",{parentName:"p"},"following these steps"),":"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Open")," the application in your browser and refresh the page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Open")," the Chrome DevTools to the ",(0,o.kt)("inlineCode",{parentName:"li"},"console")," (",(0,o.kt)("inlineCode",{parentName:"li"},"F12")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fn+F12")," on laptop)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click")," the ",(0,o.kt)("strong",{parentName:"li"},"edit")," button for a project."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click")," the ",(0,o.kt)("strong",{parentName:"li"},"save")," button on the form."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Verify")," the updated project is logged to the Chrome DevTools ",(0,o.kt)("inlineCode",{parentName:"li"},"console"),".",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectCard")," info will not be updated at this point.")))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/64926834-66d64a80-d7d0-11e9-8dd9-7501589c6d08.png",alt:"image"})))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-you-have-completed-lab-14"},"\u2714"," You have completed Lab 14"))}m.isMDXComponent=!0}}]);