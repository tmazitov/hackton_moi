# 42 MOI innovation hackton

## Feature
Keep secret...

## Description
This project is a web application consisting of backend and frontend parts.
We are used these technologies to realize our project:
- **Backend**:
  - Written in Golang using the Gin framework.
  - Implements two endpoints:
    - `GET /guide/:guideId`: Retrieves information about a specific guide.
    - `POST /guide/list`: Retrieves a list of guides based on user search criteria.
  - Utilizes PostgreSQL as the database.
  - Uses Bun ORM for data storage.
  - Enabled saving of user search when using the feature

- **Frontend**:
  - Written in JavaScript using the React.
  - Something else... 

## Getting Started

### Prerequisites
- Docker installed on your machine.

### Installation with Docker Compose
1. Clone the repository:
   ```bash
   git clone "https://github.com/tmazitov/hackton_moi.git"
   ```
2. Build and run whol project:
   ```bash
   docker-compose up -d
   ```
3. Done! You can open the `localhost:3000` inside your browser to see our realization of special feature!
