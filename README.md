# Bydelsfakta

👉 **https://bydelsfakta.oslo.kommune.no/**

Bydelsfakta is a frontend application for Oslo municipality which visualises demographic statistics and data on various topics for the 15 districts in the City of Oslo.

#### Install dependencies
Install dependencies in both the root folder and the server folder for the backend
```
npm install
cd server && npm install
```

#### Run it locally for local development
In order to run this application, two different services is needed: one for frontend and one for backend

##### Frontend
```
npm run serve
```

##### Backend
Need to build the frontend once before running the backend
```
npm run backend
```

The backend needs some local variables, these are mostly secret, so if you need them then send us a DM and we could give you access.

#### Build the project
```
npm run build
```

#### Run jest tests
```
npm run test:unit:watch
```

#### Lints and fixes files
```
npm run lint
```

#### Stylelint
```
npm run lint:style:fix
```

#### Github Actions

We now use github actions to build the bydelsfakta-frontend, so you can check out when the last successfull build was built in the actions-tab.
