# isomorphic-sentry

Isomorphic sentry client for node and browser.

## Installation

NPM
```
$ npm install --save isomorphic-sentry
```

Yarn
```
$ yarn add isomorphic-sentry
```

## Usage

```javascript
import {captureMessage, init, SDK_NAME} from "isomorphic-sentry";

if (SDK_NAME === "sentry.javascript.browser") {
    // Browser configuration
    init({dsn: "__DSN__"});
} else {
    // Node configuration
    init({dsn: "__DSN__"});
}

captureMessage("Hello, world!");
```

## License

MIT
