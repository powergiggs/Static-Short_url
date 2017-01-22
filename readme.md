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



      * **Unit Testing:**

    Dependencies Installation to perform unit test will require mocha, chai and supertest.
    global Installation is recommended like so:

    ``npm install -g mocha chai supertest ``

    Then simple type ``mocha`` within terminal to execute test
    sample test should look like this:
    ```
    Urls Routes
    ✓ Read all urls from db
    ✓ Create new db url
    ✓ Get url by id from db
    ✓ Update url by id to db
    ✓ Delete url by id from db

    ```


    * **Sample DEBUG:**


    ```
  ******************************
  Access url by id from db

  ******************************
   api/v1/urls/:id
  ++++++++++++++++++++++++++++++
   success!
    ```

* **Eslint Style Guide**

To include Eslint in project install using npm:

``npm install eslint --save dev``

for comprehensive documentation visit;

``http://eslint.org/docs/user-guide/getting-started``

also setup a config file in main folder name '.eslintrc.json' by running command;

``eslint --init``

* **sample file**

```
{
  "env": {
    "node": true
  },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
  		"new-cap": 0,
  		"prefer-template": 0,
  		"global-require": 0
  	},
  	"globals": {
  		"describe": true,
  		"it": true
  	}
}
```

For eslint to work with atom ide install linter-eslint

``apm install linter-eslint``

For full documentation for integration

``https://atom.io/packages/linter-eslint``
