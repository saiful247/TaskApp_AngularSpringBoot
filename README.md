# Spring Boot & Angular Task Manager Application

A full-stack task management application built with Spring Boot, Angular, and MySQL, running in Docker containers.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Setup & Installation](#setup--installation)
  - [Using Docker (Recommended)](#using-docker-recommended)
  - [Manual Setup](#manual-setup)
- [Database Configuration](#database-configuration)
- [UI Components](#ui-components)

## Features

- Create, view, update, and delete tasks
- Task status management (To Do, In Progress, Done)
- Responsive UI with modern design elements
- Containerized deployment with Docker

## Screenshots

Here are some screenshots of the application:

![UI Screenshot 1](<./images/ui%20(1).png>)
![UI Screenshot 2](<./images/ui%20(2).png>)
![UI Screenshot 3](<./images/ui%20(3).png>)
![UI Screenshot 4](<./images/ui%20(4).png>)
![UI Screenshot 5](<./images/ui%20(5).png>)

A screen recording of the application is also available at [./images/ui sr.mp4](./images/ui%20sr.mp4)

## Technology Stack

- **Backend**: Spring Boot 3.4.4, Java 21
- **Frontend**: Angular 19
- **Database**: MySQL 8.0
- **Containerization**: Docker & Docker Compose
- **UI Framework**: TailwindCSS

## Setup & Installation

### Using Docker (Recommended)

The easiest way to run the application is using Docker and Docker Compose.

1. Ensure Docker and Docker Compose are installed on your system
2. Clone this repository
3. Navigate to the project root directory
4. Start the application using:

```bash
docker-compose up -d
```

This will start three containers:

- MySQL database
- Spring Boot backend
- Angular frontend

Access the application at: http://localhost

### Manual Setup

#### Backend (Spring Boot)

1. Ensure Java 21 and Maven are installed on your system
2. Navigate to the backend directory:

```bash
cd backend
```

3. Build the application:

```bash
./mvnw clean package
```

4. Run the application:

```bash
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

The backend API will be available at: http://localhost:8080

#### Frontend (Angular)

1. Ensure Node.js and npm are installed on your system
2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The frontend will be available at: http://localhost:4200

## Database Configuration

The application uses MySQL as the database. If running without Docker, you'll need to set up a MySQL database with the following configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/interviewcrudsbang?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=1122
```

You can configure these settings in the `backend/src/main/resources/application.properties` file.

If using Docker, the database will be automatically configured with the settings defined in the docker-compose.yml file.

## UI Components

The UI design is built with custom components and some components inspired by [KeepDesign](https://react.keepdesign.io/). KeepDesign provides beautiful UI components which have been adapted for Angular in this project.

Key UI features include:

- Shine border wrapper components
- Loading Button
- Interactive hover buttons
- Modern form styling with validation feedback
- Status toggles with color indicators
