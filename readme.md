**Stati Api Url Shortener**
----
  Basic Static API url Shortener


  * **Installation:**

  You Will need Node JS and NPM to install project.
  1.Run command npm i in the root folder of api project
  2.App main file is src/server.js
  3.Dependencies included in package.json file.



  * **Endpoints**

   `http://localhost:3000/api/v1/url`


  * **Method:**

  Use 'POST' method to send the orignal link to be shorten (http://localhost:3000/api/v1/url)
  result should similar like this;


``
{
  "shortened_url": "zhcOTe"
}
``


* **Sample Calls for static api:**

  ```javascript
    $.ajax({
      url: "domainname/api/cars",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```



* **Installation for code styling**

  I recommend installling ESlint locally with npm;

  ``npm install eslint --save-dev``

  Next install;

  ``npm install eslint-plugin-jsx-a11y --save-dev``

  then initiate ESlint on file like so;

  ``./node_modules/.bines/eslint src/server.js``

  Note: Plugin is for Atom IDE.

  * **Installation for unit testing**

    Install all dependencies;

    ``npm install  --save-d chai supertest mocha``

    please also install mocha globally

    * **Run Test**

    `` npm test `` or `` mocha``

    * **Routes**

    Get /api/cars
