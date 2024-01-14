from flask import Flask
import requests
import time

app = Flask(__name__)

@app.route('/', methods=['GET'])
def status():
    return "OK"

@app.route('/wait/<int:wait_time>', methods=['GET'])
def wait(wait_time):
    time.sleep(wait_time)
    return f"Waited for {wait_time} seconds."

# @app.route('/call_and_wait/<string:namespace>/<int:wait_time>', methods=['GET'])
# def call_and_wait(namespace, wait_time):
#     external_service_url = f'http://{namespace}'
#     response = requests.get(external_service_url)
#     time.sleep(wait_time)
#     return f"Response from external service: {response.text}, followed by a wait of {wait_time} seconds."

@app.route('/call_and_wait/<string:namespace>/<int:wait_time>', methods=['GET'])
def call_and_wait(namespace, wait_time):
    # Check if the namespace contains an underscore
    if '_' in namespace:
        parts = namespace.rsplit('_', 1)  # Split by the last underscore
        hostname, maybe_port = parts

        # Check if the part after the last underscore is a port number
        if maybe_port.isdigit():
            port = int(maybe_port)
            external_service_url = f'http://{hostname}:{port}'
        else:
            # If not a port number, consider it as part of the hostname
            external_service_url = f'http://{namespace}'
    else:
        # If no underscore, treat the whole namespace as the hostname
        external_service_url = f'http://{namespace}'
    
    response = requests.get(external_service_url)
    time.sleep(wait_time)

    return f"Response from external service: {response.text}, followed by a wait of {wait_time} seconds."


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
