Hosted at: https://appraisersbff.herokuapp.com/

# SANITY CHECK

method url: **/**

http method: **[GET]**

**Example Response:** status 200 (OK)
```
{
  "test": "it's up"
}
```

# REGISTER & LOGIN ENDPOINTS

### Registering a user
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

--------------------

### Logging in a user
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

### NO AUTHENTICATION REQUIRED

method url: */about*

http method: **[GET]**

**Example Response:** status 200 (OK)
```
{
  "test": ["the", "app", "works" ]
}
```

# HOUSES ENDPOINT

### AUTHENTICATION REQUIRED

method url: **/houses**

http method: **[GET]**

**Example Response:** status 200 (OK)
```
[
  {
    "id": 1,
    "zipCode": 90210,
    "yearBuilt": 1960,
    "squareFootage": 1000,
    "bedrooms": 10,
    "bathrooms": 5.5
  },
  {
    "id": 2,
    "zipCode": 10024,
    "yearBuilt": 1975,
    "squareFootage": 2500,
    "bedrooms": 1,
    "bathrooms": 0.5
  },
  {
    etc..
  },
]
```
--------------------
method url: **/houses**

http method: **[POST]**

**Body**

| name          | type    | required | description                       | 
| ------------- | ------- | -------- | --------------------------------- |
| zipCode       | Integer | Yes      | Max 5 digits                      |
| yearBuilt     | Integer | Yes      | Max 4 digits                      |
| squareFootage | Integer | Yes      |                                   |
| bedrooms      | Integer | Yes      |                                   |
| bathrooms     | Float   | Yes      |                                   |

**Example Body:**
```
{
    "zipCode": 99999,
    "yearBuilt": 1946,
    "squareFootage": 1000,
    "bedrooms": 1,
    "bathrooms": 3
}
```

**Example Response:** status 201 (Created)
```
{
  "id": 7,
  "zipCode": 99999,
  "yearBuilt": 1946,
  "squareFootage": 1000,
  "bedrooms": 1,
  "bathrooms": 3
}
```

# FAV ENDPOINT

### AUTHENTICATION REQUIRED

method url: **/fav**

http method: **[GET]**

**Body**

| name     | type   | required | description                       | 
| -------- | ------ | -------- | --------------------------------- |
| username | String | Yes      | Must be unique                    |

**Example Body:**
```
{
  username: 'lambda'
}
```

**Example Response:** status 200 (OK)
```
[
  {
    "id": 2,
    "name": "Nice view from patio",
    "interestLevel": 80,
    "houseID: 7,
    "zipCode": 10024,
    "yearBuilt": 1975,
    "squareFootage": 2500,
    "bedrooms": 1,
    "bathrooms": 0.5,
    "price": 480500
  }
]
```
--------------------
method url: **/fav**

http method: **[POST]**

**Body**

| name          | type    | required | description                       | 
| ------------- | ------- | -------- | --------------------------------- |
| userID        | Integer | Yes      | Id creation number of user        |
| houseID       | Integer | Yes      | Id creation number of house       |
| name          | String  | Yes      |                                   |
| interestLevel | Integer | Yes      | Out of 100                        |

**Example Body:**
```
{
  "userID": 2,
  "houseID": 7,
  "name": "by the beach",
  "interestLevel": 97
}
```

**Example Response:** status 200 (OK)
```
{
  "id": 7,
  "userID": 2,
  "houseID": 7,
  "name": "by the beach",
  "interestLevel": 97
}
```
--------------------
method url: **/fav/:id**

*id references the fav id entry*

http method: **[PUT]**

**Body**

| name          | type    | required | description                       | 
| ------------- | ------- | -------- | --------------------------------- |
| userID        | Integer | Yes      | Id creation number of user        |
| houseID       | Integer | Yes      | Id creation number of house       |
| name          | String  | Yes      |                                   |
| interestLevel | Integer | Yes      | Out of 100                        |

**Example Body:**
```
{
  "userID": 2,
  "houseID": 7,
  "name": "by the pier",
  "interestLevel": 100
}
```

**Example Response:** status 200 (OK)
```
{
  "id": 7,
  "userID": 2,
  "houseID": 7,
  "name": "by the pier",
  "interestLevel": 100
}
```
--------------------
method url: **/fav/:id**

*id references the fav id entry*

http method: **[DELETE]**

**Example Response:** status 200 (OK)
```
{
  "id": 7,
  "userID": 2,
  "houseID": 7,
  "name": "by the pier",
  "interestLevel": 100
}
```
