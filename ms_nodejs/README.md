# Node.js Microservice

## Overview

This repository contains a Node.js microservice with the following functionalities:
1. `/`: Returns a simple "OK" response, useful for health checks.
2. `/wait/:time`: The service waits for a specified number of seconds, as indicated in the URL path.
3. `/call_and_wait/:namespace/:wait_time`: Calls an external microservice indicated by the `namespace` in the URL, waits for its response, and then waits for an additional specified number of seconds.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Express.js

## Installation

Install the required npm packages:

```
npm install
```

## Running the Application

To start the microservice, run the following command:

```
node app.js
```

The server will start and be available at http://localhost:3000.

## API Endpoints

### Status Endpoint

- URL: /
- Method: GET
- Success Response: 
  - Code: 200 
  - Content: OK

Example Request: http://localhost:3000/

### Wait Endpoint

- URL: /wait/:time
- Method: GET
- URL Parameters: 
  - time=[integer]
- Success Response: 
  - Code: 200 
  - Content: Waited for [time] seconds.

Example Request: http://localhost:3000/wait/5

### Call and Wait Endpoint

- URL: /call_and_wait/:namespace/:wait_time
- Method: GET
- URL Parameters: 
  - namespace=[string]
  - wait_time=[integer]
- Success Response: 
  - Code: 200 
  - Content: Response from external service: [response], followed by a wait of [seconds] seconds.

Example Request: http://localhost:3000/call_and_wait/example.com/5

## Dockerization

This application can be containerized using Docker. Refer to the Dockerfile for configuration details.

To build the Docker image, run:

```
docker build -t ms-nodejs .
```

To run the application as a Docker container:

```
docker run -p 3000:3000 --name ms-nodejs ms-nodejs
```

## Contributing

Contributions to this project are welcome. Please ensure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
