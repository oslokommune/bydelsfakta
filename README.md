# Bydelsfakta

👉**https://bydelsfakta.oslo.kommune.no/**

Frontend application for Bydelsfakta at Oslo kommune which visualizes statistics and data on different topics about the districts in Oslo.

#### Install dependencies
Need to install both the dependencies in root folder and the server folder for the backend
```
npm install
cd server && npm install
```

#### Run it locally for local development
To different runs, one for frontend and one for backend

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

#### Run your end-to-end tests
```
npm run test:e2e
```

#### CircleCI

You can check out the CicleCI builds that are run on each commit to the dev branch: [Press me](https://circleci.com/gh/oslokommune/bydelsfakta)

#### Github Actions

We now use github actions to build the bydelsfakta-frontend, so you can check out when the last successfull build was built in the actions-tab
