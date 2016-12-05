**Stati Api Url Shortener**
----
  Basic Static API url Shortener


  * **Installation:**

  You Will need Node JS and NPM to install project.
  1.Run command npm i in the root folder of api project
  2.App main file is src/server.js
  3.Dependencies included in package.json file.



  * **Endpoints**

   `http://localhost:3000/api/cars`
   `http://localhost:3000/api/shorturl`

  * **Method:**

  Use 'GET' method to recieve the json object of car data (http://localhost:3000/api/cars)

  returns;

  ``
  {
    "Cars": [
      {
        "make": "Honda",
        "model": "Civic",
        "year": "2013"
      },
      {
        "make": "VW",
        "model": "Jetta",
        "year": "2017"
      },
      {
        "make": "Nissan",
        "model": "Rogue",
        "year": "2016"
      }
    ]
  }
``


  Use 'POST' method to send the orignal link to be shorten (http://localhost:3000/api/shorturl)
  result should similar like this;


``
{
  "origURL": "/api/shorturl",
  "shortUrl": "http://RXYx13"
}
``


* **Sample Calls for static api:**

  ```javascript
    $.ajax({
      url: "domainname/api/cars",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```



* **Installation for Testing**

  I recommend installling ESlint locally with npm

  ``npm install eslint --save-dev``

  Next install

  ``npm install eslint-plugin-jsx-a11y --save-dev``

  then initiate ESlint on file like so

  ``./node_modules/.bines/eslint src/server.js``
