# Python Flask Microservice

## Overview

This repository contains a Python Flask microservice with the following functionalities:
1. `/`: Returns a simple "OK" response, useful for health checks.
2. `/wait/:time`: The service waits for a specified number of seconds, as indicated in the URL path.
3. `/call_and_wait/:namespace/:wait_time`: Calls an external microservice indicated by the `namespace` in the URL, waits for its response, and then waits for an additional specified number of seconds.

## Installation

Install the required Python packages:

```
pip install Flask requests
```

## Running the Application

To run the microservice, execute the following command:

```
python app.py
```

By default, the server will start on http://localhost:5000. 

## Usage

### Status Endpoint

- URL: /
- Method: GET
- Success Response: 
  - Code: 200 
  - Content: OK

Example: http://localhost:5000/

### Wait Endpoint

- URL: /wait/:time
- Method: GET
- URL Parameters: 
  - time=[integer]
- Success Response: 
  - Code: 200 
  - Content: Waited for [time] seconds.

Example: http://localhost:5000/wait/5

### Call and Wait Endpoint

- URL: /call_and_wait/:namespace/:wait_time
- Method: GET
- URL Parameters: 
  - namespace=[string]
  - wait_time=[integer]
- Success Response: 
  - Code: 200 
  - Content: Response from external service: [response], followed by a wait of [seconds] seconds.

Example: http://localhost:5000/call_and_wait/example.com/5

## Dockerization

This application can be containerized using Docker. Refer to the Dockerfile for configuration details.

To build the Docker image, run:

``` docker
docker build -t ms-python .
```

To run the application as a Docker container:

``` docker
docker run -p 5000:5000 --name ms-python ms-python
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
