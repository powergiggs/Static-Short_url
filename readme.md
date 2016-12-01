**Show Employee**
----
  Returns json data about a employees.

* **URL**

 localhost:3000/api

* **Method:**

  `GET`
  
*  **URL Params**

		/api


   **Required:**
 
   `firstname =[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{firstname: "John", lastname : "Doe" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```