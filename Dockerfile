# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
# npm ci is used here for a clean, reproducible install based on package-lock.json
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build your application
RUN npm run build

# Your application will now be built. Adjust the next commands according to how your app is started.
# Expose the port your app runs on
EXPOSE 3000

# Start your application
CMD ["npm", "start"]
