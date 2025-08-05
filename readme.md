# NAGP-assignment-2

NAGP Assignment demo codebase

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jainmohit535/NAGP-assignment-2.git](https://github.com/jainmohit535/NAGP-assignment-2.git
cd your-repo
npm install
```

## Running the Application Locally

To start the application in development mode, use the `start` script. This will launch a development server and serve the application locally, typically on port 3000. Make sure all dependencies are installed before running the script.

## Docker Deployment

Build and run the Docker image:

- Use `docker build` to create the image
- Use `docker run` to start the container

```bash
docker build -t jainmohit535/assignment-demo .
```

## Docker reposity URL

```bash
docker pull jainmohit535/assignment-demo:v2
```

## API URL for record Access

```bash
http://35.186.227.185/users
```

## Application Deployment

Insall kubectl and login to GCP account. Deployment scripts are available in K8 folder. Run below commands to deploy the imges in GCP.

### configmap, pvc and secret deployment- Database configuration, storing the DB id, password details etc.

```bash
kubectl apply -f k8/configmap.yaml
kubectl apply -f k8/pvc.yaml
kubectl apply -f k8/secret.yaml
```

### Database deployment

```bash
kubectl apply -f k8/db-deployment.yaml
```

### Database Searvice deployment (CLUSTER Service, not exposed to outside)

```bash
kubectl apply -f k8/db-service.yaml
```

### microservice deployment and service deployment

```bash
kubectl apply -f k8/ms-deployment.yaml
kubectl apply -f k8/ms-service.yaml
```

### ingress deployment (for outside expouser of microservice only)

```bash
kubectl apply -f k8/ingress.yaml
```