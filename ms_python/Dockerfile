# Use a base image of Python
FROM python:3.12

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the requirements file and then install the necessary packages
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's source code into the container
COPY . .

# Expose the port used by the application
EXPOSE 5000

# Command to run the application
CMD ["python", "./app.py"]
