# Social-Network-API

## Description

This project is a social network web application API where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB for the database, and Mongoose as the ODM (Object Data Modeling) library. This project mimics some of the core functionalities of popular social networking platforms, focusing on efficient data handling and flexibility.

## Installation

* Clone the repo - https://github.com/GrandNagusZek/Social-Network-API.git
* Install dependencies - npm install
* Setup your MongoDB connection
* Start the server - npm start

## Usage 

After starting the server, you can interact with the API using Insomnia or any other API client. You'll need to create your own data as no seed data is provided.

* Creating Data - Use your API client to make requests to the endpoints provided in the API Endpoints section to create users, thoughts, reactions, and friend lists.

## API Endpoints

### Users 

* Get all users: GET /api/users

* Get a single user by ID: GET /api/users/:userId

* Create a new user: POST /api/users
{
  "username": "exampleUser",
  "email": "user@example.com"
}

* Update a user by ID: PUT /api/users/:userId
{
  "username": "newUsername",
  "email": "newemail@example.com"
}

* Delete a user by ID: DELETE /api/users/:userId

* Add a friend to a user's friend list: POST /api/users/:userId/friends/:friendId

* Remove a friend from a user's friend list: DELETE /api/users/:userId/friends/:friendId

### Thoughts

* Get all thoughts: GET /api/thoughts

* Get a single thought by ID: GET /api/thoughts/:thoughtId

* Create a new thought: POST /api/thoughts
{
  "thoughtText": "Here's a cool thought...",
  "username": "exampleUser",
  "userId": "userId123"
}

* Update a thought by ID: PUT /api/thoughts/:thoughtId
{
  "thoughtText": "Updated thought text"
}

* Delete a thought by ID: DELETE /api/thoughts/:thoughtId

### Reactions

* Add a reaction to a thought: POST /api/thoughts/:thoughtId/reactions
{
  "reactionBody": "This is a reaction",
  "username": "exampleUser"
}

* Remove a reaction from a thought: DELETE /api/thoughts/:thoughtId/reactions/:reactionId


## Technology used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Insomnia (for testing)

## License

MIT License

## Contributing 

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and write tests for new features or bug fixes.



