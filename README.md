# Nonprofits

A web app where you can donate to multiple nonprofits monthly.

## Setup

```
git clone git@github.com:ryanoillataguerre/nonprofits-medium.git

cd nonprofits-medium/services

cp users-service/.env.sample users-service/.env

cd shared && yarn && yarn build

cd ../users-service && yarn && yarn dev
```
