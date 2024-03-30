# Restaurants Finding API

## Description

Unless you clone and install all necessary nodemodules then you can start the in memory Restuarant Finding API. Follow this link to consume API (https://documenter.getpostman.com/view/6985379/2sA35G42vg)


Don't forget to setup .env file using .env.sample as a guide

## Installation

```bash
$ npm install
```

## Run migration scripts

No migration scripts

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

More insights into each aspect of the API design:

## Rate Limiting:
To ensure the stability and security of the API, rate limiting has been implemented. This prevents abuse or misuse of the API by limiting the number of requests a client can make within a specified time frame. By setting appropriate limits, we can protect the server from being overwhelmed by excessive requests, thus maintaining a consistent level of service for all users.

## Versioning:
Versioning is crucial for ensuring backward compatibility and managing changes to the API over time. In the design, versioning has been carefully considered to allow for future enhancements and modifications without disrupting existing functionality. Each version of the API is clearly documented, and backward compatibility is maintained to minimize the impact on existing clients.

## Application/Security Testing:
Rigorous testing procedures have been implemented to validate the robustness and security of the API. This includes both functional testing to verify the correctness of the API's behavior under various conditions, as well as security testing to identify and mitigate potential vulnerabilities. By conducting thorough testing, we can ensure that the API meets the highest standards of reliability and security, safeguarding sensitive data and protecting against potential threats.

## Error Scenarios:
Error scenarios have been carefully considered and handled appropriately within the API design. This includes providing error messages to clients as stated in the document guide, implementing error handling mechanisms, and ensuring that the API maintains a consistent state even in the face of errors. 

## Documentation:
To configure the application, please visit our GitHub repo and follow the provided instructions. We utilized Postman to generate comprehensive API documentation; you can access it via the following link: Postman documentation.

In conclusion, the API design has been meticulously crafted to meet the requirements outlined in the task. Each aspect, including rate limiting, versioning, and testing, has been carefully considered to ensure the reliability, security, and scalability of the API.
