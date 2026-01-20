# Frontend Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build arguments for environment variables
ARG VITE_STRIPE_PUBLISHABLE_KEY
ARG VITE_STRIPE_API_ENDPOINT
ARG VITE_API_ENDPOINT
ARG VITE_BASE_URL=/

# Set environment variables for build
ENV VITE_STRIPE_PUBLISHABLE_KEY=$VITE_STRIPE_PUBLISHABLE_KEY
ENV VITE_STRIPE_API_ENDPOINT=$VITE_STRIPE_API_ENDPOINT
ENV VITE_API_ENDPOINT=$VITE_API_ENDPOINT
ENV VITE_BASE_URL=$VITE_BASE_URL

# Build the application (use production mode)
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]