# back-end

Hosted at: https://appraisersbff.herokuapp.com/
  
sanity GET request
https://appraisersbff.herokuapp.com/
  - receive back =><br/>
    {<br/>
     "test": "its up"<br/>
    }<br/>


/about
  - receive back =><br/>
    { <br/>
      test: "on the right track!"})<br/>
    }<br/>

/houses
  - receive back =><br/>
    {<br/>
    "id": 1,
    "zipCode": 90210,
    "yearBuilt": 1960,
    "squareFootage": 1000,
    "bedrooms": 10,
    "bathrooms": 5.5
  }<br/>

/fav
  - receive back =>
    {
    "userID": 1,
    "houseID": 1,
    "name": "Cool house",
    "interestLevel": 75
  }
