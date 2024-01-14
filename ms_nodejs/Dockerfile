# Use a Node.js base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies including ESLint
RUN npm install

# Copy the project files into the container
COPY . .

# Run ESLint to detect errors
RUN npx eslint .

# Your application's default start command
CMD ["node", "app.js"]

# Expose the port your app runs on
EXPOSE 3000
