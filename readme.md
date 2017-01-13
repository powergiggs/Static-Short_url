**Dynamic Api Url Shortener**
----
Dynamic API url Shortener


  * **Installation:**

  You Will need Node JS and NPM to install project.
  1.Run command npm i in the root folder of api project
  2.App main file is src/server.js and routes/api.js
  3.Dependencies included in package.json file.



  * **Endpoints**

   `http://localhost:3000/api/v1/urls`
   `http://localhost:3000/api/v1/urls/id`


  * **Method:**

  Use 'get' method to send the orignal link to be shorten (http://localhost:3000/api/v1/urls)
  result should similar like this;


```
{
    "id": 1,
    "long_url": "https://coligo.io/create-url-shortener-with-node-express-mongo/",
    "short_url": "https://aqqIO3",
    "createdAt": "2017-01-10T17:35:23.000Z",
    "updatedAt": "2017-01-10T17:35:23.000Z"
  }

```
``POST /http://localhost:3000/api/v1/urls/``
``UPDATE /http://localhost:3000/api/v1/urls/:id``
``DELETE /http://localhost:3000/api/v1/urls/:id``


* **Sample Calls for static api:**

  ```javascript
    $.ajax({
      url: "domainname/api/url",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


    * **Routes**

    `Get /api/v1/urls`



    * **Usage**
    To turn on DEBUG mode within lib/utils.js
    and enable `process.env.DEBUG === "true"` for DEBUG
    and `process.env.DEBUG ==="false"` for DEBUG off.

    * **Sample DEBUG**


    ```
  ******************************
  Access url by id from db

  ******************************
   api/v1/urls/:id
  ++++++++++++++++++++++++++++++
   success!
    ```
