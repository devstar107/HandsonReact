---
title: HTTP
sidebar_label: HTTP
slug: /http
---

The ability to make HTTP calls is not built-in to React.

React applications use one of the following to make `HTTP` calls:

- `Axios` library
- `fetch` API (built-in to modern browsers)

## Setup Backend

Before making HTTP calls we need to [setup a backend following these directions](A7-BackendAPISetup.md).

## Axios

1. Install the [axios](https://github.com/axios/axios) library.

   ```shell
   npm install axios
   ```

   > Axios is a `Promise` based HTTP client for the `browser` and node.js.

2. Add a script tag to the library in `index.html`.

   ```diff
   <!DOCTYPE html>
   <html lang="en">
   <head>
       ...
   </head>
   <body>
       <div id="root"></div>
       ...
       <script src="/node_modules/@babel/standalone/babel.min.js"></script>
   +   <script src="/node_modules/axios/dist/axios.js"></script>
       <script type="text/babel" src="/main.js"></script>
   </body>
   </html>
   ```

3. Try the following code in `main.js`:

   ```js
   const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
   const notFoundErrorUrl = 'https://httpstat.us/404';
   const forbiddenErrorUrl = 'https://httpstat.us/403';
   const serverErrorUrl = 'https://httpstat.us/500';
   // const urls here

   axios
     .get(okUrl)
     .then((response) => response.data)
     .then((data) => console.log(data));
   ```

4. Open the Chrome DevTools console and you should see the data being logged.
5. Update the url to an endpoint that throws a server error and update the code to catch the error.

   ```diff
    // const urls here

   axios
   + .get(serverErrorUrl)
   .then(response => response.data)
   .then(data => console.log(data))
   + .catch(error => console.log(error));
   ```

6. You should see the following logged in the console.

   ```shell
   VM599:1 GET https://httpstat.us/500 500 (Internal Server Error)
   Error: Request failed with status code 500
   ```

7. Try these other urls that also return errors and verify they are logged.
   ```js
   const notFoundErrorUrl = 'https://httpstat.us/404';
   const forbiddenErrorUrl = 'https://httpstat.us/403';
   ```

## Fetch

The fetch specification differs from `jQuery.ajax()` and `axios` in three main ways:

- The entire response is returned instead of the JSON data being already parsed (deserialized) into a JavaScript object.

- The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

* By default, fetch won't send or receive any cookies from the server, resulting in unauthenticated requests if the site relies on maintaining a user session (to send cookies, the credentials init option must be set).

The `Fetch API` is now standard in modern browsers and does not require an additional install.

> Note that you will need to use a polyfill if you need to support IE browsers. See the [can I use feature page for fetch](https://caniuse.com/#feat=fetch) for more information. The most commonly used polyfill is [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).

1. Try the following code in `main.js`:

   ```js
   // const urls here
   fetch(okUrl).then((response) => console.log(response));
   ```

1. Open the Chrome DevTools console and you should see the response object being logged. Notice that the body property is a readable stream object but you can't yet see the data.
1. Update the code to read the body stream and parse the JSON in the body of the request into a JavaScript object.

   ```js
   // const urls here

   fetch(okUrl)
     .then((response) => {
       console.log(response);
       return response;
     })
     .then((response) => response.json())
     .then((data) => console.log(data));
   ```

1. In the console you will see the response as well as the data (parsed body) begin logged.
1. Update the url to an endpoint that throws a server error and update the code to catch the error.

   ```diff
   // const urls here

   + fetch(serverErrorUrl)
   .then(response => {
   console.log(response);
   return response;
   })
   .then(response => response.json())
   .then(data => console.log(data));
   + .catch(error => console.log(error));
   ```

1. You should see the following logged in the console.
   ```shell
   GET https://httpstat.us/500 500 (Internal Server Error)
   Response {type: "cors", url: "https://httpstat.us/500", redirected: false, status: 500, ok: false, …}
   SyntaxError: Unexpected token I in JSON at position 4
   ```
1. The catch caught an error thrown on the line shown below. The error occurred when parsing the json into a JavaScript object.

   ```js
   .then(response => response.json());
   ```

1. Remember, `fetch()` won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false)
1. To see this happening change .json() to .text()

   ```diff
   - .then(response => response.json());
   + then(response => response.text());
   ```

1. You should now see the error: `500 Internal Server Error` being logged to the console.

   > The fetch API doesn't consider server errors to be an error, the request was made and a response was returned. The response just happened to include an error message in the body and that body is not of `content-type: application/json` hence the error when attempt to parse it as `json`.

1. Change .text() back to .json()

   ```diff
   + .then(response => response.json());
   - then(response => response.text());
   ```

1. Add the following code to treat a response with a status set to false as an error.

   ```diff
   // const urls here

   fetch(serverErrorUrl)
   .then(response => {
       console.log(response);
       return response;
   })
   +  .then(response => {
   +    if (!response.ok) throw new Error(response.statusText);
   +    return response;
   + })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error));
   ```

1. You should again see the error: `Internal Server Error` being logged to the console.
1. Now that we have things working we can remove the logging of the full response.

   ```diff
    // const urls here

   fetch(serverErrorUrl)
   -   .then(response => {
   -       console.log(response);
   -       return response;
   -   })
   .then(response => {
     if (!response.ok) throw new Error(response.statusText);
     return response;
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error));
   ```

1. We can also pull the logic to parse the JSON body and handle the error into reusable functions.

```diff
 // const urls here

fetch(serverErrorUrl)
  .then(response => {
    console.log(response);
    return response;
  })
-  .then(response => {
-     if (!response.ok) throw new Error(response.statusText);
-     return response;
-   })
+  .then(handleErrors)
-  .then(response => response.json())
+  .then(parseJSON)
  .then(data => console.log(data))
  .catch(error => console.log(error));

+ function handleErrors(response) {
+  if (!response.ok) throw new Error(response.statusText);
+  return response;
+ }

+ function parseJSON(response) {
+   return response.json();
+ }
```

2. Try these other urls that also return errors and verify they are logged properly.

   ```js
   const notFoundErrorUrl = 'https://httpstat.us/404';
   const forbiddenErrorUrl = 'https://httpstat.us/403';
   ```

## In React

Now that we understand the fundamental underlying concepts lets render this data in React.

### When to Load Data?

- In a function component, you should make your AJAX calls in a `useEffect` hook. When the data or the error returns you can use your set state updater function returned from `useState` to update the state.
- In a class component, you should make your AJAX calls in the `componentDidMount` lifecycle method. This is so you can use `setState` to update your component when the data is retrieved.

### Loading

Since AJAX calls don't always return immediately (they are asynchronous) it is common practice to show a loading indicator when the HTTP request is in flight.

### Error Handling

If an error occurs while making the request or when it returns we need to either display that error or translate it to a more user friendly message and then display the error.

Initially, we'll just display the error from the server and then later we will see how to translate that error to something more user friendly.

### Lists

If the data is returned successfully, we can use what we learned in the list section to display the data.

> ! Remember we need to set a key on the list items.

### Function Component Example

1.  Try the following code in `main.js`

    ```js
    const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
    const notFoundErrorUrl = 'https://httpstat.us/404';
    const forbiddenErrorUrl = 'https://httpstat.us/403';
    const serverErrorUrl = 'https://httpstat.us/500';

    function PhotoList() {
      const [loading, setLoading] = React.useState(false);
      const [photos, setPhotos] = React.useState([]);
      const [error, setError] = React.useState(null);

      function toUserError(error) {
        console.log('Call API to log the raw error. ', error);
        return 'There was an error loading the photos.';
      }

      React.useEffect(() => {
        setLoading(true);

        fetch(okUrl)
          .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            setError(null);
            setPhotos(data);
            setLoading(false);
          })
          .catch((error) => {
            const userError = toUserError(error);
            setError(userError);
            setLoading(false);
          });
      }, []);

      if (error) {
        return <div>{error}</div>;
      } else if (loading) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {photos.map((photo) => {
              return (
                <li key={photo.id}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <h3>{photo.title}</h3>
                </li>
              );
            })}
          </ul>
        );
      }
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<PhotoList />);
    ```

1.  Try these other urls that return errors and verify they are logged properly.
    ```js
    const notFoundErrorUrl = 'https://httpstat.us/404';
    const forbiddenErrorUrl = 'https://httpstat.us/403';
    const serverErrorUrl = 'https://httpstat.us/500';
    ```

### Class Component Example

1.  Try the following code in `main.js`

    ```js
    const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
    const notFoundErrorUrl = 'https://httpstat.us/404';
    const forbiddenErrorUrl = 'https://httpstat.us/403';
    const serverErrorUrl = 'https://httpstat.us/500';

    class PhotoList extends React.Component {
      state = {
        loading: false,
        photos: [],
        error: undefined,
      };

      componentDidMount() {
        this.setState({ loading: true });

        fetch(okUrl)
          .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            this.setState({ photos: data, loading: false });
          })
          .catch((error) => {
            const userError = this.toUserError(error);
            this.setState({ error: userError, loading: false });
          });
      }

      toUserError(error) {
        console.log('Call API to log the raw error. ', error);
        return 'There was an error loading the photos.';
      }

      render() {
        const { loading, photos, error } = this.state;
        if (error) {
          return <div>{error}</div>;
        } else if (loading) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {photos.map((photo) => {
                return (
                  <li key={photo.id}>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                  </li>
                );
              })}
            </ul>
          );
        }
      }
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<PhotoList />);
    ```

1.  Try these other urls that return errors and verify they are logged properly.
    ```js
    const notFoundErrorUrl = 'https://httpstat.us/404';
    const forbiddenErrorUrl = 'https://httpstat.us/403';
    const serverErrorUrl = 'https://httpstat.us/500';
    ```

### Reuse via API object

After you get comfortable using `Axios` and/or the `fetch API` and rendering the result in a React component, consider pulling the data access code into a reusable object. The benefit to doing this is that multiple components can make the same API call and convert to more user friendly error messages without repeating the code involved.

React is not very prescriptive about file names but their documentation does show these files being named with an API suffix (for example ProfileAPI.js).

Review the examples below (using the fetch API). If time permits get the example running in `main.js`

### Function Component Example with API Object

```js
const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/photos`;

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the photos.';
    default:
      return 'There was an error retrieving the photos. Please try again.';
  }
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

const photoAPI = {
  getAll(page = 1, limit = 100) {
    return (
      fetch(`${url}?_page=${page}&_limit=${limit}`)
        // .then(delay(600))
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        })
    );
  },
};

function PhotoList() {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);

    photoAPI
      .getAll(1)
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <h3>{photo.title}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhotoList />);
```

### Class Component Example with API Object

```js
const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/photos`;

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the photos.';
    default:
      return 'There was an error retrieving the photos. Please try again.';
  }
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );

    let errorMessage = PhotoAPI.translateStatusToErrorMessage(
      httpErrorInfo.status
    );
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

const photoAPI = {
  getAll(page = 1, limit = 100) {
    return (
      fetch(`${url}?_page=${page}&_limit=${limit}`)
        // .then(delay(600))
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        })
    );
  },
};

class PhotoList extends React.Component {
  state = {
    loading: false,
    photos: [],
    error: undefined,
  };

  componentDidMount() {
    this.setState({ loading: true });

    photoAPI
      .getAll(2)
      .then((data) => {
        this.setState({ photos: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { loading, photos, error } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <ul>
          {photos.map((photo) => {
            return (
              <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <p>{photo.title}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhotoList />);
```

## Fetch Mutations

### POST with Fetch

```js
var url = 'http://localhost:3000/photos';
var data = {
  albumId: 1,
  title: 'Another Photo',
  url: 'https://via.placeholder.com/600/b0f7cc',
  thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
};

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  })
  .then((response) => response.json())
  .then((response) => console.log('Success:', JSON.stringify(response)))
  .catch((error) => console.error('Error:', error));
```

### PUT with Fetch

```js
var okUrl = 'http://localhost:3000/photos/5001';
const notFoundErrorUrl = 'http://localhost:3000/photos/10000000';

var data = {
  title: 'Another Updated Photo',
};

fetch(notFoundErrorUrl, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  })
  .then((response) => response.json())
  .then((response) => console.log('Success:', JSON.stringify(response)))
  .catch((error) => console.error('Error:', error));
```

### DELETE with Fetch

```js
var okUrl = 'http://localhost:3000/photos/5001';

fetch(okUrl, {
  method: 'DELETE',
})
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  })
  .then((response) => response.json())
  .then((response) => console.log('Success:', JSON.stringify(response)))
  .catch((error) => console.error('Error:', error));
```

## Axios Mutations

### POST with Axios

```js
axios({
  method: 'post',
  url: 'http://localhost:3000/photos',
  data: {
    albumId: 1,
    title: 'New Photo',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
})
  .then((response) => response.data)
  .then((photo) => console.log(photo))
  .catch((error) => console.log(error));
```

## Items Demo App (CRUD) using HTTP

### Function Component Example

#### `api\db.json`

```json
,
  "items": [
    {"id": 1, "name": "First Item" },
    {"id": 2, "name": "Second Item" },
    {"id": 3, "name": "Third Item" }
  ]
```

#### styles.css

```css
body,
button,
input,
textarea,
li {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
}

li {
  list-style: none;
  border-bottom: 1px solid #ddd;
}

span {
  margin: 15px;
}

button {
  margin: 10px;
  padding: 5px 15px 5px 15px;
  background: transparent;
}

form {
  margin: 15px;
}
```

#### index.html

```diff
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demos</title>
+    <link rel="stylesheet" href="/styles.css" />
  </head>
...
```

#### main.js

```js
function ID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the items.';
    default:
      return 'There was an error retrieving the items. Please try again.';
  }
}

//pass translate in to make this more flexible
function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/items`;

// API ----------
const itemAPI = {
  getAll(page = 1, limit = 100) {
    return fetch(`${url}?_page=${page}&_limit=${limit}`)
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        let errorMessage = translateStatusToErrorMessage(error);
        throw new Error(errorMessage);
      });
  },

  add(item) {
    return fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  update(item) {
    return fetch(`${url}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(id) {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
};

function List(props) {
  const { items, onRemove, onUpdate, loading, error } = props;
  const [editingItem, setEditingItem] = React.useState(null);

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            {item === editingItem ? (
              <Form item={item} onSubmit={onUpdate} onCancel={handleCancel} />
            ) : (
              <p>
                <span>{item.name}</span>
                <button onClick={() => handleEditClick(item)}>Edit</button>
                <button onClick={() => onRemove(item)}>Remove</button>
              </p>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

function Form({ item, onSubmit, onCancel, buttonValue }) {
  const [inputValue, setInputValue] = React.useState(item.name || '');

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const submittedItem = {
      id: item ? item.id : ID(),
      name: inputValue,
    };

    onSubmit(submittedItem);
    setInputValue('');
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <button>{buttonValue || 'Save'}</button>
      {onCancel && (
        <a href="#" onClick={handleCancel}>
          cancel
        </a>
      )}
    </form>
  );
}

function Container() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(undefined);

  React.useEffect(() => {
    setLoading(true);
    itemAPI
      .getAll(1)
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const addItem = (item) => {
    itemAPI
      .add(item)
      .then((newItem) => {
        setItems([...items, newItem]);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateItem = (updatedItem) => {
    itemAPI
      .update(updatedItem)
      .then((data) => {
        let updatedItems = items.map((item) => {
          return item.id === updatedItem.id
            ? Object.assign({}, item, data)
            : item;
        });
        setItems(updatedItems);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const removeItem = (removeThisItem) => {
    itemAPI
      .delete(removeThisItem.id)
      .then(() => {
        const filteredItems = items.filter(
          (item) => item.id != removeThisItem.id
        );
        setItems(filteredItems);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Form item="" onSubmit={addItem} buttonValue="Add" />
      <List
        loading={loading}
        error={error}
        items={items}
        onRemove={removeItem}
        onUpdate={updateItem}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <Container />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

### Class Component Example

#### `api\db.json`

```json
,
  "items": [
    {"id": 1, "name": "First Item" },
    {"id": 2, "name": "Second Item" },
    {"id": 3, "name": "Third Item" }
  ]
```

#### styles.css

```css
body,
button,
input,
textarea,
li {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
}

li {
  list-style: none;
  border-bottom: 1px solid #ddd;
}

span {
  margin: 15px;
}

button {
  margin: 10px;
  padding: 5px 15px 5px 15px;
  background: transparent;
}

form {
  margin: 15px;
}
```

#### index.html

```diff
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demos</title>
+    <link rel="stylesheet" href="/styles.css" />
  </head>
...
```

#### main.js

```js
function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the items.';
    default:
      return 'There was an error retrieving the items. Please try again.';
  }
}

//pass translate in to make this more flexible
function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );

    let errorMessage = ItemAPI.translateStatusToErrorMessage(
      httpErrorInfo.status
    );
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/items`;

// API ----------
const itemAPI = {
  getAll(page = 1, limit = 100) {
    return fetch(`${url}?_page=${page}&_limit=${limit}`)
      .then(checkStatus)
      .then(parseJSON);
  },

  add(item) {
    return fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  update(item) {
    return fetch(`${url}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(id) {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
};

class List extends React.Component {
  state = {
    editingItem: null,
  };

  handleEditClick = (item) => {
    this.setState({ editingItem: item });
  };

  handleCancel = (item) => {
    this.setState({ editingItem: null });
  };

  render() {
    const { items, onRemove, onUpdate, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item === this.state.editingItem ? (
                <Form
                  item={item}
                  onSubmit={onUpdate}
                  onCancel={this.handleCancel}
                />
              ) : (
                <p>
                  <span>{item.name}</span>
                  <button onClick={() => this.handleEditClick(item)}>
                    Edit
                  </button>
                  <button onClick={() => onRemove(item)}>Remove</button>
                </p>
              )}
            </li>
          ))}
        </ul>
      );
    }
  }
}

class Form extends React.Component {
  state = {
    inputValue: this.props.item.name || '',
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ inputValue: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: this.props.item ? this.props.item.id : ID(),
      name: this.state.inputValue,
    };

    this.props.onSubmit(item);
    this.setState({ inputValue: '' });
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.onCancel();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button>{this.props.buttonValue || 'Save'}</button>
        {this.props.onCancel && (
          <a href="#" onClick={this.handleCancel}>
            cancel
          </a>
        )}
      </form>
    );
  }
}

class Container extends React.Component {
  state = {
    loading: false,
    items: [],
    error: undefined,
  };

  componentDidMount() {
    this.setState({ items: [], loading: true });
    itemAPI
      .getAll(1)
      .then((data) => {
        this.setState({ items: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  addItem = (item) => {
    itemAPI
      .add(item)
      .then((data) => {
        this.setState((state) => ({
          items: [...state.items, item],
        }));
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  updateItem = (updatedItem) => {
    itemAPI
      .update(updatedItem)
      .then((data) => {
        this.setState((state) => {
          let items = state.items.map((item) => {
            return item.id === updatedItem.id
              ? Object.assign({}, item, data)
              : item;
          });
          return { items };
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  removeItem = (removeThisItem) => {
    itemAPI
      .delete(removeThisItem.id)
      .then((data) => {
        this.setState((state) => {
          const items = state.items.filter(
            (item) => item.id != removeThisItem.id
          );
          return { items };
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div>
        <Form item="" onSubmit={this.addItem} buttonValue="Add" />
        <List
          loading={this.state.loading}
          error={this.state.error}
          items={this.state.items}
          onRemove={this.removeItem}
          onUpdate={this.updateItem}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Container />;
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

# Resources

- [Comparison: Fetch vs Axios](https://gist.github.com/jsjoeio/0fd8563bc23ef852bc921836512992d9)
- [Gotchas: Fetch vs Axios ](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)
- [JSON Server](https://github.com/typicode/json-server)
- [AJAX: React FAQ](https://reactjs.org/docs/faq-ajax.html)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) -[Fetch Examples](https://mdn.github.io/fetch-examples/)
- [A Practical Guide to Using Fetch](https://medium.freecodecamp.org/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547)
- [Fetch & Errors](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
- [Reusable API Class Example](https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86)
- [React Hook Warnings for async function in useEffect: useEffect function must return a cleanup function or nothing](https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret)
