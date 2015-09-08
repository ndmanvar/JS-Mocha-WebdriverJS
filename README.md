Parallel tests with Mocha and WD.js
=============

## 1/ Configure your Sauce Labs credentials

```
export SAUCE_USERNAME=<SAUCE_USERNAME>
export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>
```

## 2/ Install tools

```
npm install -g mocha
```

## 3/ Install local package

In this tutorial directory (there should be a `package.json` file) run:

```
npm install
```

## 4/ Inspect the code

- The mocha test suite is in `tests/sample-spec.js`
- The parallel runner is in `Makefile`

## 5/ Run tests

```
BROWSER=firefox VERSION=31 PLATFORM=XP ./node_modules/.bin/parallel-mocha tests/*.js
BROWSER="internet explorer" VERSION=10 PLATFORM="Windows 7"./node_modules/.bin/parallel-mocha tests/*.js
```

Go [here](https://saucelabs.com/tests) to view the tests.

## 6/ Run tests in parallel

```
make
```

Go [here](https://saucelabs.com/tests) to view the tests.
