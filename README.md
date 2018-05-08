# React Redux SSR Starter

Ever wanted to start a React SSR project, but never had time to setup everything?
This project is for you!

I used redux-sagas and isolated my "pages init sagas", so that the server can execute this saga only and return when the action the data is fetched.
I also added a `routes.js` file that sums up my routes needs for the client part (`path`, `exact`, `component`), but also for the server part (which redux action to dispatch)

This app can also be used as a CSR app: just remove the `server` folder ;)

## Installation
```
    yarn
    yarn run dev:client
    yarn run dev:server
```

I isolated on purpose nodemon server from webpack build. You can use tools such as `pm2` or simply two shell tabs to run both ;)