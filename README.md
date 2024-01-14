# microservices

Example of microservices in various programming languages.

In all the examples we will have the same 3 methods:

1. `/`: Returns a simple "OK" response, useful for health checks.
2. `/wait/:seconds`: The service waits for a specified number of seconds, as indicated in the URL path.
3. `/call_and_wait/:namespace/:seconds`: Calls an external microservice indicated by the `namespace` in the URL, waits for its response, and then waits for an additional specified number of seconds.
