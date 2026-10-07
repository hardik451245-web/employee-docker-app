# Use Node.js 20 LTS Alpine as base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json first (better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy all source files to working directory
COPY . .

# Expose port 3000 to the outside
EXPOSE 3000

# Command to start the app
CMD ["node", "app.js"]
