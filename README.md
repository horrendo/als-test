# AsyncLocalStorage test

## Background

We use AsyncLocalStorage and have a large suite of end-to-end tests. Our app currently uses v14 but now that v16
has gone LTS we are preparing to upgrade. When we started testing node v16 we noticed
all our e2e tests were failing. It turned out this was because we initialise AsyncLocalStorage in our e2e tests and
depend on it persisting to the processing of the request.

By testing different versions of node I found the behaviour changed in v16.7.0. Versions from v14 through to v16.6.2
and v17+ all 'work' as far as our e2e tests are concerned.

## Test setup

``` sh
yarn
nvm install v16.6.2
yarn test # test will pass
nvm install v16.7
yarn test # test will fail
nvm install v17
yarn test # test will pass
```
