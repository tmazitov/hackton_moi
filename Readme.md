# 42 MOI Innovation hackathon

## Feature
**1.	Challenge:**
Enhancing Accessibility of services for Seniors and People of Determination through using gamification elements.

**Reasons: (why)**
- Amount of services available on portal or application
- Seniors find it challenging to grasp modern tools because of their age and unfamiliarity, while people of determination face difficulties due to their limitations in using these tools.

**2.	Solution: (how)**

Our idea aims to revolutionize accessibility for seniors and people of determination through gamification.

We propose to create a tutorial guide designed like a game, offering an engaging and interactive way to learn essential navigation skills for public spaces. Users will progress through step-by-step walkthroughs.

By merging gaming elements with accessibility training, we aspire to foster independence, confidence, and inclusivity in our communities.

**3.	Interactive Tutorial: (what)**

**MVP**



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
