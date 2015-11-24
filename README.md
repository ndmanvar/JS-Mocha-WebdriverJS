Parallel tests with Mocha and WD.js
=============

## 1/ Configure your Sauce Labs credentials

```
export SAUCE_USERNAME=<SAUCE_USERNAME>
export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>
```

## 2/ Install tools

```
npm install -g grunt-cli
```

## 3/ Install local package

In this tutorial directory (there should be a `package.json` file) run:

```
npm install
```

## 4/ Inspect the code

- The mocha test suite is in `tests/sample-spec.js`
- The parallel runner is in `Gruntfile.js`

## 6/ Run tests in parallel

```
grunt
```

Go [here](https://saucelabs.com/tests) to view the tests.
