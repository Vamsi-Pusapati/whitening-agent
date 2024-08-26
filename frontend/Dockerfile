# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Serve the app using a static server
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]