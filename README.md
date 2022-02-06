#### Random Beer - React.js + Node.js + MongoDB

### Project Structure
```
app |  //contains Frontend using React.js + Redux
        |- nginx //contains nginx file
        |- public //contains static files from react
        |- src //contains files those work with react
server | // contain Backend using Nodejs - Express
        |- controller // contains functions for each routes
        |- database // contains files involve with database
        |- middleware // contains middleware files
        |- route // contains files those define routes
        |- schema // contains schame database
        |- spec // contains test files
        |- utils // contains util functions
```


### Question 1

Function sum placed in utils folder and unit test in spec folder

Run this for test:
```
yarn test
```


### Installation

1. Clone this repository
2. Run docker compose. See init data in server/database/data.js
```
docker-compose up --build
```
3. Open url [http://localhost:3000](http://localhost:3000)