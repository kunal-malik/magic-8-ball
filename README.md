## Magic 8 Ball 

It is a web application for getting an advice or future telling. It is built using React(front-end) with node js express(backend).



## Instructions to set up this project(execute below commands from the root directory)
Below are the demo instructions that can be used in production. Currently, we test production builds using express serving static files i.e. UI bundle. In a real production environment, you can also use nginx to interact between UI and backend
1. yarn install
2. yarn run server-prod
3. yarn run client-build
4. Open your browser and navigate to http://localhost:5000

For executing tests:
1. Including coverage : yarn run client-test --coverage
2. Excluding coverage : yarn run client-test (enter 'a' in case no tests run)

For development:
1. yarn install
2. yarn run client-build
3. yarn run client-start
4. yarn run server-dev

## Application features
1. Magic Ball gives an advice to the user each time user clicks on the grey ball area
2. Retrieves random response from the api and display on UI
3. Shows user a spinner inside the magic ball while starting the app and while waiting for the response from the api
4. Express backend serves static files(UI bundle)
5. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
6. Mocking of api requests in jest for testing
7. Usage of SASS
8. Tested on Chrome and works for all screen sizes

# Assumptions
1. A reset button is not required when api call fails(Currently, UI displays error inside the ball)
2. Each advice to be given to the user with a little delay(while showing loading icon)  

# Notes
1. Client/UI code resides in src folder
2. Express server defined in server.js is a minimal app to return a random response. Hence, dedicated server folder structure does not exist.



