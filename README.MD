##jshint-simple-log

This JSHint reporter will write any errors into a log file.

Here's an example output:

```
2 lint errors found in the file client/app/app.js
 [4:9] - (W098) - 'asdf' is defined but never used.
 [5:9] - (W098) - 'fdsa' is defined but never used.
```

### Installation

To use `jshint-simple-log`, you need JSHint installed on your system (or in your project node_modules directory).

Now you can install the reporter

```bash
$ npm install jshint-simple-log --save-dev
```

### Usage

Add a reference to this reporter in your JSHint command

```bash
$ jshint --reporter node_modules/jshint-simple-log/index.js myFile.js
```