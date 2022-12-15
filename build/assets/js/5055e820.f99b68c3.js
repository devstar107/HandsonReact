"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>O});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,O=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(O,s(s({ref:t},c),{},{components:n})):a.createElement(O,s({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Redux Thunk",sidebar_label:"Redux Thunk",slug:"/redux-thunk"},s=void 0,i={unversionedId:"ReduxThunk",id:"ReduxThunk",title:"Redux Thunk",description:"Thunk middleware for Redux. Enables async actions (making http calls from actions).",source:"@site/docs/23-ReduxThunk.md",sourceDirName:".",slug:"/redux-thunk",permalink:"/docs/redux-thunk",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/23-ReduxThunk.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Redux Thunk",sidebar_label:"Redux Thunk",slug:"/redux-thunk"},sidebar:"someSidebar",previous:{title:"React Redux",permalink:"/docs/react-redux"},next:{title:"React Redux Thunk",permalink:"/docs/react-redux-thunk"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Async",id:"async",level:2},{value:"Async Actions",id:"async-actions",level:3},{value:"Thunk",id:"thunk",level:3},{value:"Installation",id:"installation",level:2},{value:"Demos",id:"demos",level:2},{value:"1. Your First Thunk",id:"1-your-first-thunk",level:3},{value:"2. CRUD",id:"2-crud",level:3},{value:"Middleware &amp; Enhancers",id:"middleware--enhancers",level:2},{value:"Reference",id:"reference",level:2},{value:"Thunk",id:"thunk-1",level:3},{value:"Why Reducers need to be Pure",id:"why-reducers-need-to-be-pure",level:3},{value:"Middleware &amp; Enhancers",id:"middleware--enhancers-1",level:3},{value:"Testing",id:"testing",level:3},{value:"Diagram",id:"diagram",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Thunk middleware for Redux. Enables async actions (making http calls from actions)."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redux-thunk")," is separate package/library"),(0,r.kt)("li",{parentName:"ul"},"enables async actions (AJAX calls)"),(0,r.kt)("li",{parentName:"ul"},"implemented as middleware for extending redux to handle async actions"),(0,r.kt)("li",{parentName:"ul"},"is only 53 lines of code (used to be 15 in js)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts"},"https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts")),(0,r.kt)("li",{parentName:"ul"},"why separate? ...following the Unix philosophy of doing one thing and doing it well")))),(0,r.kt)("h2",{id:"async"},"Async"),(0,r.kt)("h3",{id:"async-actions"},"Async Actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"actions normally dispatch an object"),(0,r.kt)("li",{parentName:"ul"},"Redux Thunk allows actions to return functions"),(0,r.kt)("li",{parentName:"ul"},"the dispatched function is called a thunk"),(0,r.kt)("li",{parentName:"ul"},"async is handled by creating a pair of actions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"one to start the request"),(0,r.kt)("li",{parentName:"ul"},"one to handle the complete response (success or failure)")))),(0,r.kt)("h3",{id:"thunk"},"Thunk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a thunk is a function that is returned from another function"),(0,r.kt)("li",{parentName:"ul"},"a thunk function takes dispatch (and getState) as parameters"),(0,r.kt)("li",{parentName:"ul"},"a thunk function",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"initially dispatches an action to say the request started then"),(0,r.kt)("li",{parentName:"ol"},"waits for the ajax call to return and then dispatches another action (either success or failure)"))),(0,r.kt)("li",{parentName:"ul"},"the reducer only processes dispatched objects (actions)"),(0,r.kt)("li",{parentName:"ul"},"the thunk middleware processes dispatched functions (thunks)"),(0,r.kt)("li",{parentName:"ul"},"both actions and thunks are created by action creator functions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the results of creators are passed to dispatch"),(0,r.kt)("li",{parentName:"ul"},"there is no distinction between action creators and thunk creators",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"thunk creators often end up in an actions file and look just like an action creator")))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install redux-thunk\n")),(0,r.kt)("p",null,"Then, to enable Redux Thunk, use ",(0,r.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, applyMiddleware } from 'redux';\nimport thunk from 'redux-thunk';\nimport rootReducer from './reducers/index';\n\n// Note: this API requires redux@>=3.1.0\nconst store = createStore(rootReducer, applyMiddleware(thunk));\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the registration of Redux Thunk is slightly different in the demos below because we are not using ES Modules yet.")),(0,r.kt)("h2",{id:"demos"},"Demos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the following demonstrations we will use Redux with no UI (so no React), just ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log")),(0,r.kt)("li",{parentName:"ul"},"We will refactor the HTTP Demo(s) to use Redux with Redux Thunk")),(0,r.kt)("h3",{id:"1-your-first-thunk"},"1. Your First Thunk"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const baseUrl = 'http://localhost:3000';\n\nclass PhotoAPI {\n  url = `${baseUrl}/photos`;\n\n  constructor() {}\n\n  getAll(page = 1, limit = 100) {\n    return fetch(`${this.url}?_page=${page}&_limit=${limit}`)\n      .then(this.checkStatus)\n      .then(this.parseJSON);\n  }\n\n  static translateStatusToErrorMessage(status) {\n    switch (status) {\n      case 401:\n        return 'Please login again.';\n      case 403:\n        return 'You do not have permission to view the photos.';\n      default:\n        return 'There was an error retrieving the photos. Please try again.';\n    }\n  }\n\n  checkStatus(response) {\n    if (response.status >= 200 && response.status < 300) {\n      return response;\n    } else {\n      const httpErrorInfo = {\n        status: response.status,\n        statusText: response.statusText,\n        url: response.url,\n      };\n      console.log(\n        `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`\n      );\n\n      let errorMessage = PhotoAPI.translateStatusToErrorMessage(\n        httpErrorInfo.status\n      );\n      throw new Error(errorMessage);\n    }\n  }\n\n  parseJSON(response) {\n    return response.json();\n  }\n}\n\nconst LOAD_PHOTOS_REQUEST = 'LOAD_PHOTOS_REQUEST';\nconst LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';\nconst LOAD_PHOTOS_FAILURE = 'LOAD_PHOTOS_FAILURE';\n\nconst initialState = {\n  photos: [],\n  processing: false,\n  error: null,\n};\n\nfunction reducer(state = initialState, action) {\n  switch (action.type) {\n    case LOAD_PHOTOS_REQUEST:\n      return { ...state, processing: true };\n    case LOAD_PHOTOS_SUCCESS:\n      return { ...state, processing: false, photos: action.payload };\n    case LOAD_PHOTOS_FAILURE:\n      return { ...state, processing: false, error: action.payload.message };\n    default:\n      return state;\n  }\n}\n\n//action creator becomes thunk creator\n//instead of dispatching an action object (see commented code)\n//dispatch a thunk function (a function that returns another function)\n//inside the thunk have that function dispatch the initial request object that sets the loading\n//and eventually dispatches success and failure actions\n//by returning a function (thunk) you are now able to have the action creator do multiple dispatches over time\nfunction loadPhotos() {\n  //   return { type: LOAD_PHOTOS_REQUEST };\n  return function thunk(dispatch, getState) {\n    let photoAPI = new PhotoAPI();\n    dispatch({ type: LOAD_PHOTOS_REQUEST });\n    return photoAPI\n      .getAll(1)\n      .then((data) => {\n        dispatch({ type: LOAD_PHOTOS_SUCCESS, payload: data });\n      })\n      .catch((error) => {\n        dispatch({ type: LOAD_PHOTOS_FAILURE, payload: error });\n      });\n  };\n}\n\nvar ReduxThunk = window.ReduxThunk;\nconst store = Redux.createStore(reducer, Redux.applyMiddleware(ReduxThunk));\n\nfunction logState() {\n  console.log(JSON.stringify(store.getState(), null, ' '));\n}\n\nstore.subscribe(logState);\n\nasync function test() {\n  await store.dispatch(loadPhotos());\n  console.log('loaded photos');\n}\n\ntest();\n")),(0,r.kt)("h3",{id:"2-crud"},"2. CRUD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET (Read)"),(0,r.kt)("li",{parentName:"ul"},"POST (Add)"),(0,r.kt)("li",{parentName:"ul"},"PUT (Update)"),(0,r.kt)("li",{parentName:"ul"},"DELETE (Delete)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const baseUrl = 'http://localhost:3000';\n\nclass PhotoAPI {\n  url = `${baseUrl}/photos`;\n\n  constructor() {}\n\n  getAll(page = 1, limit = 100) {\n    return fetch(`${this.url}?_page=${page}&_limit=${limit}`)\n      .then(this.checkStatus)\n      .then(this.parseJSON);\n  }\n\n  add(photo) {\n    return fetch(`${this.url}`, {\n      method: 'POST',\n      body: JSON.stringify(photo),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    })\n      .then(this.checkStatus)\n      .then(this.parseJSON);\n  }\n\n  update(photo) {\n    return fetch(`${this.url}/${photo.id}`, {\n      method: 'PUT',\n      body: JSON.stringify(photo),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    })\n      .then(this.checkStatus)\n      .then(this.parseJSON);\n  }\n\n  delete(id) {\n    return fetch(`${this.url}/${id}`, {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    })\n      .then(this.checkStatus)\n      .then(this.parseJSON);\n  }\n\n  static translateStatusToErrorMessage(status) {\n    switch (status) {\n      case 401:\n        return 'Please login again.';\n      case 403:\n        return 'You do not have permission to view the photos.';\n      default:\n        return 'There was an error retrieving the photos. Please try again.';\n    }\n  }\n\n  checkStatus(response) {\n    if (response.status >= 200 && response.status < 300) {\n      return response;\n    } else {\n      const httpErrorInfo = {\n        status: response.status,\n        statusText: response.statusText,\n        url: response.url,\n      };\n      console.log(\n        `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`\n      );\n\n      let errorMessage = PhotoAPI.translateStatusToErrorMessage(\n        httpErrorInfo.status\n      );\n      throw new Error(errorMessage);\n    }\n  }\n\n  parseJSON(response) {\n    return response.json();\n  }\n}\n\n//action types\nconst LOAD_PHOTOS_REQUEST = 'LOAD_PHOTOS_REQUEST';\nconst LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';\nconst LOAD_PHOTOS_FAILURE = 'LOAD_PHOTOS_FAILURE';\nconst ADD_PHOTO_REQUEST = 'ADD_PHOTO_REQUEST';\nconst ADD_PHOTO_SUCCESS = 'ADD_PHOTO_SUCCESS';\nconst ADD_PHOTO_FAILURE = 'ADD_PHOTO_FAILURE';\nconst UPDATE_PHOTO_REQUEST = 'UPDATE_PHOTO_REQUEST';\nconst UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';\nconst UPDATE_PHOTO_FAILURE = 'UPDATE_PHOTO_FAILURE';\nconst DELETE_PHOTO_REQUEST = 'DELETE_PHOTO_REQUEST';\nconst DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';\nconst DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';\n\n//state (initial)\nconst initialState = {\n  photos: [],\n  processing: false,\n  error: null,\n};\n\n//reducer\nfunction reducer(state = initialState, action) {\n  switch (action.type) {\n    case LOAD_PHOTOS_REQUEST:\n      return { ...state, processing: true };\n    case LOAD_PHOTOS_SUCCESS:\n      return { ...state, processing: false, photos: action.payload };\n    case LOAD_PHOTOS_FAILURE:\n      return { ...state, processing: false, error: action.payload.message };\n    case ADD_PHOTO_REQUEST:\n      return { ...state, processing: true };\n    case ADD_PHOTO_SUCCESS:\n      return {\n        ...state,\n        processing: false,\n        photos: [...state.photos, action.payload],\n      };\n    case ADD_PHOTO_FAILURE:\n      return { ...state, processing: false, error: action.payload.message };\n    case UPDATE_PHOTO_REQUEST:\n      return { ...state, processing: true };\n    case UPDATE_PHOTO_SUCCESS:\n      return {\n        ...state,\n        processing: false,\n        photos: state.photos.map((photo) => {\n          return photo.id === action.payload.id\n            ? Object.assign({}, photo, action.payload)\n            : photo;\n        }),\n      };\n    case UPDATE_PHOTO_FAILURE:\n      return { ...state, processing: false, error: action.payload.message };\n    case DELETE_PHOTO_REQUEST:\n      return { ...state, processing: true };\n    case DELETE_PHOTO_SUCCESS:\n      return {\n        ...state,\n        processing: false,\n        photos: state.photos.filter((photo) => photo.id !== action.payload.id),\n      };\n    case DELETE_PHOTO_FAILURE:\n      return { ...state, processing: false, error: action.payload.message };\n    default:\n      return state;\n  }\n}\n\n//action creators\nfunction loadPhotos() {\n  return (dispatch) => {\n    let photoAPI = new PhotoAPI();\n    dispatch({ type: LOAD_PHOTOS_REQUEST });\n    return photoAPI\n      .getAll(1)\n      .then((data) => {\n        dispatch({ type: LOAD_PHOTOS_SUCCESS, payload: data });\n      })\n      .catch((error) => {\n        dispatch({ type: LOAD_PHOTOS_FAILURE, payload: error });\n      });\n  };\n}\n\nfunction addPhoto(photo) {\n  return (dispatch) => {\n    let photoAPI = new PhotoAPI();\n    dispatch({ type: ADD_PHOTO_REQUEST });\n    return photoAPI\n      .add(photo)\n      .then((data) => {\n        dispatch({ type: ADD_PHOTO_SUCCESS, payload: data });\n      })\n      .catch((error) => {\n        dispatch({ type: ADD_PHOTO_FAILURE, payload: error });\n      });\n  };\n}\n\nfunction updatePhoto(photo) {\n  return (dispatch) => {\n    let photoAPI = new PhotoAPI();\n    dispatch({ type: UPDATE_PHOTO_REQUEST });\n    return photoAPI\n      .update(photo)\n      .then((data) => {\n        dispatch({ type: UPDATE_PHOTO_SUCCESS, payload: data });\n      })\n      .catch((error) => {\n        dispatch({ type: UPDATE_PHOTO_FAILURE, payload: error });\n      });\n  };\n}\n\nfunction deletePhoto(photoId) {\n  return (dispatch) => {\n    let photoAPI = new PhotoAPI();\n    dispatch({ type: DELETE_PHOTO_REQUEST });\n    return photoAPI\n      .delete(photoId)\n      .then((data) => {\n        dispatch({ type: DELETE_PHOTO_SUCCESS, payload: data });\n      })\n      .catch((error) => {\n        dispatch({ type: DELETE_PHOTO_FAILURE, payload: error });\n      });\n  };\n}\n\nvar ReduxThunk = window.ReduxThunk;\n\n//when we just needed Redux DevTools extension enabled but no middleware\n// function enableDevTools() {\n//   return (\n//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n//   );\n// }\n// const store = Redux.createStore(reducer, enableDevTools());\n\n// if you just need ReduxThunk\n// const store = Redux.createStore(reducer, Redux.applyMiddleware(ReduxThunk));\n\n// if you need Redux DevTools enabled & ReduxThunk middleware you use a composer\n// don't pass enableDevTools, the __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ has already added it\nconst compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;\nconst store = Redux.createStore(\n  reducer,\n  compose(Redux.applyMiddleware(...[ReduxThunk]))\n);\n\nfunction logState() {\n  console.log(JSON.stringify(store.getState(), null, ' '));\n}\n\nstore.subscribe(logState);\n\nconst newPhoto = {\n  albumId: 1,\n  title: 'Added Photo',\n  url: 'https://via.placeholder.com/600/b0f7cc',\n  thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',\n};\n\nconst updatedPhoto = {\n  id: '1',\n  albumId: 1,\n  title: 'Updated Photo',\n  url: 'https://via.placeholder.com/600/b0f7cc',\n  thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',\n};\n\nasync function test() {\n  await store.dispatch(loadPhotos());\n  console.log('loaded photos');\n\n  await store.dispatch(addPhoto(newPhoto));\n  console.log('added photo');\n\n  const id = store.getState().photos[0].id;\n  updatedPhoto.id = id;\n\n  await store.dispatch(updatePhoto(updatedPhoto));\n  console.log('updated photo');\n\n  await store.dispatch(deletePhoto(id));\n  console.log('deleted photo');\n}\n\ntest();\n")),(0,r.kt)("h2",{id:"middleware--enhancers"},"Middleware & Enhancers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Store enhancers are a formal mechanism for adding capabilities to Redux itself. Most people will never need to write one."),(0,r.kt)("li",{parentName:"ul"},"To use middleware in Redux, we use the applyMiddleware() function exported by the Redux library."),(0,r.kt)("li",{parentName:"ul"},"applyMiddleware is itself a store enhancer that lets us change how dispatch() works.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"thunk-1"},"Thunk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},"Redux Thunk on GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alligator.io/redux/redux-thunk/"},"Simple Example Redux Thunk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://daveceddia.com/what-is-a-thunk/"},"What is a Thunk?"))),(0,r.kt)("h3",{id:"why-reducers-need-to-be-pure"},"Why Reducers need to be Pure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/49155438/react-redux-is-adding-async-method-in-a-reducer-an-anti-pattern"},"Anti-Pattern: Async in Reducer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/44767160/why-are-pure-reducers-so-important-in-redux"},"Why Reducers Need to be Pure")),(0,r.kt)("li",{parentName:"ul"},"same input, same result",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"what if the api was down?")))),(0,r.kt)("h3",{id:"middleware--enhancers-1"},"Middleware & Enhancers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://read.reduxbook.com/markdown/part1/05-middleware-and-enhancers.html"},"Middleware & Enhancers")),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/recipes/writing-tests#async-action-creators"},"Redux: Writing Tests"))),(0,r.kt)("h3",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/65788910-cb26d180-e121-11e9-9444-cda5cc568844.png",alt:"redux diagram"})))}d.isMDXComponent=!0}}]);