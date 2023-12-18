# Use Node.js as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend project
COPY . .

# Expose port 3001 (or the port your Express server is running on)
EXPOSE 3001

# Start the Express server
CMD ["npm", "start"]
