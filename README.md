# back-end

Hosted at: https://appraisersbff.herokuapp.com/
  
sanity GET request
https://appraisersbff.herokuapp.com/
  - receive back =>
    {
     "test": "its up"
    }


/about
  - receive back =>
    { 
      test: "on the right track!"})
    }

/houses
  - receive back =>
    {
    "id": 1,
    "zipCode": 90210,
    "yearBuilt": 1960,
    "squareFootage": 1000,
    "bedrooms": 10,
    "bathrooms": 5.5
  }

/fav
  - receive back =>
    {
    "userID": 1,
    "houseID": 1,
    "name": "Cool house",
    "interestLevel": 75
  }
