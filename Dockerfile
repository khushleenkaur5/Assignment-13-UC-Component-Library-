# Build stage for React App
FROM node:18-alpine AS build

# Set working directory
WORKDIR /kaur_khushleen_ui_garden_build_checks

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files to the working directory
COPY . .

# Build the production app
RUN npm run build

# Install Husky for pre-commit hooks
RUN npx husky install

# Enforce pre-commit checks: Prettier, ESLint, and tests
RUN echo "#!/bin/sh\nnpx prettier --check .\nnpx eslint . --ext .js,.jsx,.ts,.tsx\nnpm test" > .husky/pre-commit && chmod +x .husky/pre-commit

# Run Storybook build if needed
RUN npm run build-storybook

# Use Nginx to serve the built React app
FROM nginx:stable-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy the production build from the build stage
COPY --from=build /kaur_khushleen_ui_garden_build_checks/build .

# Expose port 8018 for the app
EXPOSE 8018

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
