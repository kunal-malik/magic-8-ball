##Magic 8 Ball 

It is a web application that user can use for future telling or getting an advice. It is built using React at front-end interacting with express based backend.



## Instructions to set up this project(execute below commands from the root directory)
1. yarn install

For production:
2. yarn run server-prod
3. yarn run client-build
4. Open your browser and navigate to http://localhost:5000

For executing tests:
yarn run client-test

For test coverage:
yarn run client-test --coverage

For development:
2. yarn run client-build
3. yarn run client-start
4. yarn run server-dev

## Application features
1. Provides advices to the user upon clicking on the ball area
2. Retrieves random response from the api and display on UI
3. Shows user a spinner(a good UX) inside the magic ball while starting the app and while waiting for the response from the api
4. Express backend serves static files(UI bundle)
5. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
6. Mocking of api requests in jest
7. Usage of SASS
8. Tested on Chrome and works for all screen sizes

#Assumptions
1. User does not need a reset button when api call fails and error is shown inside the ball
2. Advice to be shown to the user without much delay
3. App should be intuitive to use

#Notes
1. Client/UI code resides in src folder
2. Express server defined in server.js is minimal app to send back a random response to the UI. Hence, server folder structure does not exist



