"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[6860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},l),{},{components:n})):a.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Lab 21: Route Parameters"},i=void 0,s={unversionedId:"labs/ts/RouteParameters",id:"labs/ts/RouteParameters",title:"Lab 21: Route Parameters",description:"Objectives",source:"@site/docs/labs/ts/21-RouteParameters.md",sourceDirName:"labs/ts",slug:"/labs/ts/RouteParameters",permalink:"/docs/labs/ts/RouteParameters",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/labs/ts/21-RouteParameters.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Lab 21: Route Parameters"},sidebar:"someSidebar",previous:{title:"Lab 20: Router Basics",permalink:"/docs/labs/ts/RouterBasics"},next:{title:"Lab 22: Build & Deploy",permalink:"/docs/labs/ts/BuildAndDeploy"}},c={},p=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Navigate to a route with a parameter",id:"navigate-to-a-route-with-a-parameter",level:3},{value:"\u2714 You have completed Lab 21",id:"-you-have-completed-lab-21",level:3}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Navigate to a route with a parameter")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"navigate-to-a-route-with-a-parameter"},"Navigate to a route with a parameter"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," ",(0,r.kt)("strong",{parentName:"p"},"method")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"projectAPI")," to return a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")),(0,r.kt)("h4",{parentName:"li",id:"srcprojectsprojectapits"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\projectAPI.ts")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const projectAPI = {\n...\n\n+  find(id: number) {\n+    return fetch(`${url}/${id}`)\n+      .then(checkStatus)\n+      .then(parseJSON)\n+      .then(convertToProjectModel);\n+  },\n+\n...\n};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create")," the files below and add the code for these pre-built components we will use in this lab. Take a moment to review the code in them."),(0,r.kt)("h4",{parentName:"li",id:"srcprojectsprojectdetailtsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectDetail.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { Project } from \'./Project\';\n\ninterface ProjectDetailProps {\n  project: Project;\n}\nexport default function ProjectDetail({ project }: ProjectDetailProps) {\n  return (\n    <div className="row">\n      <div className="col-sm-6">\n        <div className="card large">\n          <img\n            className="rounded"\n            src={project.imageUrl}\n            alt={project.name}\n          />\n          <section className="section dark">\n            <h3 className="strong">\n              <strong>{project.name}</strong>\n            </h3>\n            <p>{project.description}</p>\n            <p>Budget : {project.budget}</p>\n\n            <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>\n            <p>\n              <mark className="active">\n                {\' \'}\n                {project.isActive ? \'active\' : \'inactive\'}\n              </mark>\n            </p>\n          </section>\n        </div>\n      </div>\n    </div>\n  );\n}\n')),(0,r.kt)("h4",{parentName:"li",id:"srcprojectsprojectpagetsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectPage.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect, useState } from 'react';\nimport { projectAPI } from './projectAPI';\nimport ProjectDetail from './ProjectDetail';\nimport { Project } from './Project';\nimport { useParams } from 'react-router-dom';\n\nfunction ProjectPage(props: any) {\n  const [loading, setLoading] = useState(false);\n  const [project, setProject] = useState<Project | null>(null);\n  const [error, setError] = useState<string | null>(null);\n  const params = useParams();\n  const id = Number(params.id);\n\n  useEffect(() => {\n    setLoading(true);\n    projectAPI\n      .find(id)\n      .then((data) => {\n        setProject(data);\n        setLoading(false);\n      })\n      .catch((e) => {\n        setError(e);\n        setLoading(false);\n      });\n  }, [id]);\n\n  return (\n    <div>\n      <>\n        <h1>Project Detail</h1>\n\n        {loading && (\n          <div className=\"center-page\">\n            <span className=\"spinner primary\"></span>\n            <p>Loading...</p>\n          </div>\n        )}\n\n        {error && (\n          <div className=\"row\">\n            <div className=\"card large error\">\n              <section>\n                <p>\n                  <span className=\"icon-alert inverse \"></span> {error}\n                </p>\n              </section>\n            </div>\n          </div>\n        )}\n\n        {project && <ProjectDetail project={project} />}\n      </>\n    </div>\n  );\n}\n\nexport default ProjectPage;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a route to display the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectPage")," (notice that we now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectPage")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectsPage")," so be careful you are in the correct file)."),(0,r.kt)("h4",{parentName:"li",id:"srcapptsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\App.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import ProjectsPage from \'./projects/ProjectsPage\';\n+ import ProjectPage from \'./projects/ProjectPage\';\n\nfunction App() {\n  return (\n    <Router>\n      <header className="sticky">\n        <span className="logo">\n          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />\n        </span>\n        <NavLink to="/"  className="button rounded">\n          <span className="icon-home"></span>\n          Home\n        </NavLink>\n        <NavLink to="/projects/" className="button rounded">\n          Projects\n        </NavLink>\n      </header>\n      <div className="container">\n        <Routes>\n          <Route path="/"  element={<HomePage />} />\n          <Route path="/projects"  element={<ProjectsPage /> } />\n+           <Route path="/projects/:id" element={<ProjectPage />} />\n        </Routes>\n      </div>\n    </Router>\n  );\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make the name and description clickable by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Link />")," component around them."),(0,r.kt)("h4",{parentName:"li",id:"srcprojectsprojectcardtsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectCard.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { Link } from \'react-router-dom\';\n...\n  <section className="section dark">\n+  <Link to={\'/projects/\' + project.id}>\n    <h5 className="strong">\n    <strong>{project.name}</strong>\n    </h5>\n    <p>{formatDescription(project.description)}</p>\n    <p>Budget : {project.budget.toLocaleString()}</p>\n+  </Link>\n  <button\n    type="button"\n    className=" bordered"\n    onClick={() => {\n    handleEditClick(project);\n    }}\n   >\n    <span className="icon-edit "></span>\n    Edit\n  </button>\n  </section>\n...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify")," the new ",(0,r.kt)("strong",{parentName:"p"},"route")," works by the ",(0,r.kt)("strong",{parentName:"p"},"following these steps"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Visit")," the root of the site: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/")," and refresh the page in your browser."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click")," on ",(0,r.kt)("inlineCode",{parentName:"li"},"Projects")," in the ",(0,r.kt)("strong",{parentName:"li"},"navigation"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Verify")," you are taken to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/projects")," route and the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectsPage")," ",(0,r.kt)("strong",{parentName:"li"},"displays"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click")," on the name or description in any of the project cards ."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Verify")," you are taken to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/projects/1")," route and the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectPage")," ",(0,r.kt)("strong",{parentName:"li"},"displays")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectDetail")," component.")),(0,r.kt)("p",{parentName:"li"},"<",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/65079801-e77e7d80-d96d-11e9-8e1f-c8dab5ae60ba.png",alt:"image"})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-you-have-completed-lab-21"},"\u2714"," You have completed Lab 21"))}m.isMDXComponent=!0}}]);