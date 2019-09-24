# back-end

Hosted at: https://appraisersbff.herokuapp.com/
  
sanity GET request
https://appraisersbff.herokuapp.com/
  - receive back =><br/>
    {<br/>
     "test": "its up"<br/>
    }<br/>
    
  /auth/login<br/>
    auth login test info:<br/>
  username: admin<br/>
  password: password1234<br/>
  
  /auth/register<br/>
  new user<br/>


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
