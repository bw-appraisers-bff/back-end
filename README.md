# Hosted at: https://appraisersbff.herokuapp.com/

# REGISTER & LOGIN ENDPOINTS

## Registering a user
method url: **/auth/register**

http method: **[POST]**

**Body**

| name     | type   | required | description                       | 
| -------- | ------ | -------- | --------------------------------- |
| username | String | Yes      | Must be unique                    |
| password | String | Yes      |                                   |

**Example Body:**
```
{
  username: 'lambda',
  password: 'school!'
}
```

**Example Response:** status 201 (Created)

## Logging in a user
method url: **/auth/login**

http method: **[POST]**

**Body**

| name     | type   | required | description                       | 
| -------- | ------ | -------- | --------------------------------- |
| username | String | Yes      | Must be unique                    |
| password | String | Yes      |                                   |

**Example Body:**
```
{
  username: 'lambda',
  password: 'school!'
}
```

**Example Response:** status 200 (OK)
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhbWJkYSIsImlhdCI6MTU2OTM3Mzg5OSwiZXhwIjoxNTY5NDYwMjk5fQ.QWqe4i1fZJmHikIP07avAjTzRc3QhefnFkbcFp6ZM90" 
}
```
**Example Response:** status 401 (Unauthorized)
```
{
  "message": "Invalid credentials"
}
```
# ABOUT ENDPOINT
# HOUSES ENDPOINT
# FAV ENDPOINT

# back-end
  
sanity GET request
https://appraisersbff.herokuapp.com/
  - receive back =><br/>
    {<br/>
     "test": "its up"<br/>
    }<br/>
    

/about **no login needed map through data** <br/>
  - receive back =><br/>
   { <br/>
   test:  <br/>
      ["The","app","works"] <br/>
      } <br/>
   <br/>

/houses ***NEED AUTH*** <br/>
  - receive back =><br/>
    {<br/>
    "id": 1,<br/>
    "zipCode": 90210,<br/>
    "yearBuilt": 1960,<br/>
    "squareFootage": 1000,<br/>
    "bedrooms": 10,<br/>
    "bathrooms": 5.5<br/>
  }<br/>

/fav ***NEED AUTH***<br/>
  - receive back =><br/>
    {<br/>
    "userID": 1,<br/>
    "houseID": 1,<br/>
    "name": "Cool house",<br/>
    "interestLevel": 75<br/>
  }<br/>
