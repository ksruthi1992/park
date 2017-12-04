# Angular, NodeJS, CosmosDB 

This project provides a parking lot RESTful service.  

## Software Requirements To Run Locally (there's a Docker option below as well)

* Node.js 6.10 or higher
* Azure CosmosDB (CosmosDB Emulator available for local development)

### Running the Application Locally

1. Install Node.js (6.10 or higher) on your dev box

    * Node.js: https://nodejs.org
    
1. Install Nodemon and Gulp: `npm install nodemon gulp -g`

1. Run `npm install` to install app dependencies

1. Run the following Gulp task to copy required Angular modules into the `public` folder: 

    `gulp copy:libs`

1. Run `npm start` to compile the TypeScript and start the server

1. Browse to http://localhost:7001




