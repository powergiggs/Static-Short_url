

# Dynamic API url Shortener #


## Installation:

  You Will need Node JS and NPM to install project.
  1.Run command npm i in the root folder of api project
  2.App main file is src/server.js and routes/api.js
  3.Dependencies included in package.json file.



## Endpoints

   `http://localhost:3000/api/v1/urls`
   `http://localhost:3000/api/v1/urls/id`


## Method:

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


## Sample Calls for static api:

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


## Routes

    `Get /api/v1/urls`



## Unit Testing:

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

# Utility Tool
``npm install debugging-tool``


##  DEBUG Tool
### Usage
debugging-tool can be use in replace of console.log
to create streams of logs to the console in a color and dynamic
way with recognize notification colors
example use
```
const util = require('debugging-tool')
debug.debug(title, message', status);

```
#### Terminal result
```
success!
==============DEBUGGING=============
Our Server is running on port
==============DEBUGGING=============
MSG: "3000"

TIME: 1/26/2017, 12:59:17 AM
```
note also the environment variable must be set

``DEBUG=true``

## Version Bump Task Runner
The Version Bump Task Runner uses gulp to automatically bump version from package.json.

``npm install`` to include dependencies
simply enter ``gulp`` within terminal.




## Eslint Style Guide

To include Eslint in project install using npm:

``npm install eslint --save dev``

for comprehensive documentation visit;

``http://eslint.org/docs/user-guide/getting-started``

also setup a config file in main folder name '.eslintrc.json' by running command;

``eslint --init``

## sample file

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

## Workflow

Creating a branch within terminal;
``git checkout -b branchname master``

Push branch to repository and commit changes.
``git push origin -u branchname``
``git commit -a -m "msg" git pus``

Merging branch with master and tagging.
```
 git checkout master
 git pull
 git pull origin branchname
 git push
   ```
Creating release branch;
```
git tag v1.8.0 "v1.8.0"
git tag    
git push origin v1.8.0
```

## Deployment

1. setup heroku server by creating new app.
2. creating a deploy branch from master with git repo.
3. do a pull request with deploy branch and master pending merge once the codeship unit test is complete.
4. select deployment method by using git hub and selecting repo and connect.
5. select your deployment branch and enable automatic deploys.
6. select wait for CI to pass before deploy.
7. setup database resources and and require config variables to connect to db.

8. check with build logs for possible errors.
9. setup pipeline to secure a stage and production app deployment.
