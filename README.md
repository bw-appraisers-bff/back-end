Hosted at: https://appraisersbff.herokuapp.com/

# SANITY CHECK

method url: **/**

> http method: **[GET]**

**Example Response:** status 200 (OK)
```
{
  "test": "it's up"
}
```

# REGISTER & LOGIN ENDPOINTS

### Registering a user
method url: **/auth/register**

> http method: **[POST]**

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

===============================================================================

### Logging in a user
method url: **/auth/login**

> http method: **[POST]**

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

**NO AUTHENTICATION REQUIRED**

method url: **/about**

http method: **[GET]**

**Example Response:** status 200 (OK)
```
{
  "test": ["the", "app", "works" ]
}
```

# HOUSES ENDPOINT

**AUTHENTICATION REQUIRED**

method url: **/houses**

> http method: **[GET]**

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

# FAV ENDPOINT

**AUTHENTICATION REQUIRED**

method url: **/fav**

> http method: **[GET]**

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
    "zipCode": 10024,
    "yearBuilt": 1975,
    "squareFootage": 2500,
    "bedrooms": 1,
    "bathrooms": 0.5,
    "price": 480500
  }
]
```
