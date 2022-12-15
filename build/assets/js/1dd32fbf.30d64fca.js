"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[8931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(k,s(s({ref:n},p),{},{components:t})):r.createElement(k,s({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"A5-Promises",title:"Promises & Async Await",sidebar_label:"Promises & Async Await",slug:"/promises-async-await"},s=void 0,i={unversionedId:"A5-Promises",id:"A5-Promises",title:"Promises & Async Await",description:"Promises are a foundational technology in JavaScript.",source:"@site/docs/A5-Promises.md",sourceDirName:".",slug:"/promises-async-await",permalink:"/docs/promises-async-await",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/A5-Promises.md",tags:[],version:"current",frontMatter:{id:"A5-Promises",title:"Promises & Async Await",sidebar_label:"Promises & Async Await",slug:"/promises-async-await"},sidebar:"someSidebar",previous:{title:"TypeScript",permalink:"/docs/typescript"},next:{title:"Essential JavaScript for React",permalink:"/docs/essential-javascript-react"}},l={},c=[{value:"Asynchronous vs Synchronous",id:"asynchronous-vs-synchronous",level:3},{value:"Analogy",id:"analogy",level:4},{value:"Callback vs Promise",id:"callback-vs-promise",level:3},{value:"Callback Example",id:"callback-example",level:4},{value:"Promise Example",id:"promise-example",level:4},{value:"How Promises Improve on Callbacks",id:"how-promises-improve-on-callbacks",level:5},{value:"Common Issues/Mistakes:",id:"common-issuesmistakes",level:4},{value:"Async/Await",id:"asyncawait",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Promises are a foundational technology in JavaScript."),(0,a.kt)("h3",{id:"asynchronous-vs-synchronous"},"Asynchronous vs Synchronous"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Synchronous")," execution means the execution happens in a single series. A->B->C->D. If you are calling those routines, A will run, then finish, then B will start, then finish, then C will start, etc."),(0,a.kt)("p",null,"With ",(0,a.kt)("em",{parentName:"p"},"Asynchronous"),' execution, you begin a routine, and let it run in the background while you start your next, then at some point, say "wait for this to finish". It\'s more like:'),(0,a.kt)("p",null,"Start A->B->C->D->Wait for A to finish"),(0,a.kt)("p",null,'The advantage is that you can execute B, C, and or D while A is still running (in the background, on a separate thread), so you can take better advantage of your resources and have fewer "hangs" or "waits".'),(0,a.kt)("h4",{id:"analogy"},"Analogy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SYNCHRONOUS")),(0,a.kt)("p",null,"You are in a queue to get a movie ticket. You cannot get one until everybody in front of you gets one, and the same applies to the people queued behind you."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ASYNCHRONOUS")),(0,a.kt)("p",null,"You are in a restaurant with many other people. You order your food. Other people can also order their food, they don't have to wait for your food to be cooked and served to you before they can order. In the kitchen restaurant workers are continuously cooking, serving, and taking orders. People will get their food served as soon as it is cooked."),(0,a.kt)("p",null,"If you wanted the restaurant scenario to be synchronous, then when you order food, everyone else in the restaurant would have to wait for your food to arrive before they can order their food etc. Now this seems like a really dumb scenario to be in, but in the computing world this scenario could be useful. Say each customer can't decide what they want, and instead want to look at what the previous customer orders to decide if they want that or not, then it makes sense that they have to wait for the food to arrive before ordering."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In summary, McDonalds can be asynchronous when multiple cashiers are taking orders and Chipotle is synchronous.")),(0,a.kt)("p",null,"Reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean"},"asynchronous-vs-synchronous-execution-what-does-it-really-mean"))),(0,a.kt)("h3",{id:"callback-vs-promise"},"Callback vs Promise"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promises")," provide a more convenient API to do things asynchronously. Before ",(0,a.kt)("inlineCode",{parentName:"p"},"promises")," async things were done with ",(0,a.kt)("inlineCode",{parentName:"p"},"callbacks")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"promises")," are an ",(0,a.kt)("strong",{parentName:"p"},"improvement")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"callbacks"),"."),(0,a.kt)("h4",{id:"callback-example"},"Callback Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the hard-coded data and responses."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const customer = {\n  id: '10',\n  first: 'James',\n  last: 'Brown',\n  email: 'james.brown@gmail.com',\n};\n\nconst orders = [\n  {\n    id: 50,\n    name: 'Vitamins',\n    description: \"Men's Multi-Vitamin\",\n    price: 25.99,\n  },\n  {\n    id: 103,\n    name: 'AC Adapter Power Cord',\n    description: 'Power Supply Cord Charger PSU',\n    price: 15.99,\n  },\n  {\n    id: 317,\n    name: 'Gatorade',\n    description: '12 pack Gatorade',\n    price: 12.99,\n  },\n];\n\nconst recentlyViewedItems = [\n  {\n    id: 504,\n    name: 'Water Bottle',\n    description: 'Eco 32oz Water Bottle',\n    price: 25,\n  },\n  {\n    id: 78,\n    name: 'Pens',\n    description: 'Writing Pens, thick point',\n    price: 15.99,\n  },\n  {\n    id: 317,\n    name: 'Notebook',\n    description: 'Spiral Ring Notebook',\n    price: 12.99,\n  },\n];\n\nconst orderTrackingStatus = {\n  status: 'shipped',\n  lastLocation: 'Knoxville, TN',\n};\n\nconst notFoundResponse = {\n  status: 404,\n  statusText: 'Not found',\n};\n\nconst unauthorizedResponse = {\n  status: 401,\n  statusText: 'Unauthorized',\n};\n\nconst serverErrorResponse = {\n  status: 500,\n  statusText: 'Server Error',\n};\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the API class."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class FakeCallbackAPI {\n  findCustomer(first, last, successCallback, failureCallback) {\n    setTimeout(() => successCallback(customer), 1000);\n    // setTimeout(() => failureCallback(serverErrorResponse), 1000);\n  }\n\n  getOrders(customerId, successCallback, failureCallback) {\n    setTimeout(() => successCallback(orders), 2000);\n    // setTimeout(() => failureCallback(notFoundResponse), 1000);\n  }\n\n  getOrderTrackingStatus(orderId, successCallback, failureCallback) {\n    setTimeout(() => successCallback(orderTrackingStatus), 1500);\n    // setTimeout(() => failureCallback(serverErrorResponse), 1000);\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"findCustomer")," and show it logging data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Comment out the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"successCallback")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"findCustomer")," and uncomment the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"failureCallback"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"failureCallback")," that logs the error.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"See the error being logged.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Comment out the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"failureCallback")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"findCustomer")," and uncomment the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"successCallback"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"getOrders")," and confirm it is logging the data")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"getOrderStatus")," and confirm it is logging the data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const api = new FakeCallbackAPI();\napi.findCustomer(\n  'James',\n  'Brown',\n  (customer) => {\n    console.log('1 ', customer);\n    console.log('getting orders for customer id: ', customer.id);\n    return api.getOrders(\n      customer.id,\n      (orders) => {\n        console.log('2 ', orders);\n        const mostRecentOrderId = orders[0].id;\n        console.log('getting status for order id: ', mostRecentOrderId);\n        return api.getOrderTrackingStatus(\n          mostRecentOrderId,\n          (status) => {\n            console.log('3', status);\n          },\n          (error) => console.log(error)\n        );\n      },\n      (error) => console.log(error)\n    );\n  },\n  (error) => console.log(error)\n);\n")))),(0,a.kt)("p",null,"Issues with this approach:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nesting: callback ",(0,a.kt)("inlineCode",{parentName:"li"},"Pyramid of Doom")),(0,a.kt)("li",{parentName:"ul"},"Error Handling: At each level",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"no error propagation or bubbling")))),(0,a.kt)("h4",{id:"promise-example"},"Promise Example"),(0,a.kt)("p",null,"Promise Guarantees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Callbacks wait for event loop"),(0,a.kt)("li",{parentName:"ul"},"Callback will be called"),(0,a.kt)("li",{parentName:"ul"},"Each callback is executed in order")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the hard-coded data and responses."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const customer = {\n  id: '10',\n  first: 'James',\n  last: 'Brown',\n  email: 'james.brown@gmail.com',\n};\n\nconst orders = [\n  {\n    id: 50,\n    name: 'Vitamins',\n    description: \"Men's Multi-Vitamin\",\n    price: 25.99,\n  },\n  {\n    id: 103,\n    name: 'AC Adapter Power Cord',\n    description: 'Power Supply Cord Charger PSU',\n    price: 15.99,\n  },\n  {\n    id: 317,\n    name: 'Gatorade',\n    description: '12 pack Gatorade',\n    price: 12.99,\n  },\n];\n\nconst recentlyViewedItems = [\n  {\n    id: 504,\n    name: 'Water Bottle',\n    description: 'Eco 32oz Water Bottle',\n    price: 25,\n  },\n  {\n    id: 78,\n    name: 'Pens',\n    description: 'Writing Pens, thick point',\n    price: 15.99,\n  },\n  {\n    id: 317,\n    name: 'Notebook',\n    description: 'Spiral Ring Notebook',\n    price: 12.99,\n  },\n];\n\nconst orderTrackingStatus = {\n  status: 'shipped',\n  lastLocation: 'Knoxville, TN',\n};\n\nconst notFoundResponse = {\n  status: 404,\n  statusText: 'Not found',\n};\n\nconst unauthorizedResponse = {\n  status: 401,\n  statusText: 'Unauthorized',\n};\n\nconst serverErrorResponse = {\n  status: 500,\n  statusText: 'Server Error',\n};\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the API class."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n\nfunction wrapInPromise(waitTime, action, data) {\n  return wait(waitTime).then(() => {\n    return new Promise((resolve, reject) => {\n      if (action === 'resolve') {\n        resolve(data);\n      } else {\n        reject(data);\n      }\n    });\n  });\n}\n\n//no nesting, returning promises\nclass FakeAPI {\n  findCustomer(first, last) {\n    return wrapInPromise(1000, 'resolve', customer);\n    // return wrapInPromise(1000, 'reject', notFoundResponse);\n  }\n\n  getOrders(customerId) {\n    return wrapInPromise(2000, 'resolve', orders);\n    // return wrapInPromise(1000, 'reject', serverErrorResponse);\n  }\n\n  getOrderTrackingStatus(orderId) {\n    return wrapInPromise(1000, 'resolve', orderTrackingStatus);\n    // return wrapInPromise(1000, 'reject', unauthorizedResponse);\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"findCustomer")," and show it logging data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Comment out the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapInPromise")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," action in ",(0,a.kt)("inlineCode",{parentName:"p"},"findCustomer")," and uncomment the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapInPromise")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"reject")," action")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"See the error being logged")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"getOrders")," and confirm it is logging the data")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"getOrderStatus")," and confirm it is logging the data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const api = new FakeAPI();\napi\n  .findCustomer('James', 'Brown')\n  .then((customer) => {\n    console.log('1 ', customer);\n    console.log('getting orders for customer id: ', customer.id);\n    return api.getOrders(customer.id);\n  })\n  .then((orders) => {\n    console.log('2 ', orders);\n    const mostRecentOrderId = orders[0].id;\n    console.log('getting status for order id: ', mostRecentOrderId);\n    return api.getOrderTrackingStatus();\n  })\n  .then((status) => {\n    console.log('3', status);\n  })\n  .catch((error) => console.log(error));\n")))),(0,a.kt)("h5",{id:"how-promises-improve-on-callbacks"},"How Promises Improve on Callbacks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chaining",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Solves nesting resulting in Pyramid of Doom by returning a new promise in every ",(0,a.kt)("inlineCode",{parentName:"li"},"then")," enabling chaining of promises."))),(0,a.kt)("li",{parentName:"ul"},"Error Propagation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Instead of needing error handling at every level, errors can propagate up the promise chain and be handled in one place. This is similar to how nested try catch blocks work when writing synchronous code.")))),(0,a.kt)("h4",{id:"common-issuesmistakes"},"Common Issues/Mistakes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nest unnecessarily"),(0,a.kt)("li",{parentName:"ul"},"Forget to return promise"),(0,a.kt)("li",{parentName:"ul"},"Forgetting to catch errors")),(0,a.kt)("p",null,"This code makes all these mistakes but works the same as the above code. It is just significantly harder to read and maintain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//not returning the promise, nesting unnecessarily\nconst api = new FakeAPI();\napi\n  .findCustomer('James', 'Brown')\n  .then((customer) => {\n    console.log('1 ', customer);\n    console.log('getting orders for customer id: ', customer.id);\n    api\n      .getOrders(customer.id)\n      .then((orders) => {\n        console.log('2 ', orders);\n        const mostRecentOrderId = orders[0].id;\n        console.log('getting status for order id: ', mostRecentOrderId);\n        api\n          .getOrderTrackingStatus()\n          .then((status) => {\n            console.log('3', status);\n          })\n          .catch((error) => console.log(error));\n      })\n      .catch((error) => console.log(error));\n  })\n  .catch((error) => console.log(error));\n")),(0,a.kt)("h2",{id:"asyncawait"},"Async/Await"),(0,a.kt)("p",null,"There is a new JavaScript (ECMAScript) language feature that builds on top of promises and allows for even better syntax for working with asynchronous operations. The proposal for the language feature has currently made it to stage 3 and is hoping to go to the final stage 4 by November of 2019."),(0,a.kt)("p",null,"Here is the example we've been using rewritten to use ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function loadData() {\n  let data = {};\n  const api = new FakeAPI();\n\n  data.customer = await api.findCustomer('James', 'Brown');\n  data.orders = await api.getOrders(data.customer.id);\n  data.mostRecentOrder = data.orders[0];\n  data.mostRecentOrder.status = await api.getOrderTrackingStatus(\n    data.mostRecentOrder.id\n  );\n  console.log(data);\n}\nloadData();\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"MDN Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/primers/promises"},"Google Web Fundamentals: Promises")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://httpstat.us/200?sleep=5000"},"Emulate a long-running API"))))}u.isMDXComponent=!0}}]);