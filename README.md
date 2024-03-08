## API SOLID

GymPass Style app.

This is a study project on the following topics:

- Design Patterns
  - Factory Pattern
  - Repository Pattern
- SOLID
  - Dependency Inversion Principle
- TDD
- Test Unit and Test E2E
- InMemory Database
- CI/CD (GitHub Actions)
- JWT
- Refresh Token & RBCA


### stack

- Node.js
- TypeScript
- Fastify
- Prisma (PostgreSQL)
- Vitest
- Zod

### RFs (Functional requirements)

- [x] It must be possible to register;
- [x] It must be possible to authenticate;
- [x] It must be possible to obtain the profile of a logged in user;
- [x] It must be possible to obtain the number of check-ins performed by the logged in user;
- [x] It must be possible for the user to obtain their check-in history;
- [x] It must be possible for the user to search for nearby gyms (up to 10km);
- [x] It must be possible for the user to search for gyms by name;
- [x] It must be possible for the user to check-in at a gym;
- [x] It must be possible to validate a user's check-in;
- [x] It must be possible to register a gym;

### RN (Business rules)

- [x] The user must not be able to register with a duplicate email;
- [x] The user cannot do 2 check-ins on the same day;
- [x] The user cannot check in if they are not close (100m) to the gym;
- [x] Check-in can only be validated up to 20 minutes after it is created;
- [x] Check-in can only be validated by administrators;
- [x] The gym can only be registered by administrators;

### RNFs (Non-Functional Requirements)

- [x] The user's password must be encrypted;
- [x] Application data must be persisted in a PostgreSQL database;
- [x] All data lists must be paged with 20 items per page;
- [x] The user must be identified by JWT (JSON Web Token);

