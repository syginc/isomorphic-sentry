# @syginc/isomorphic-sentry

Isomorphic sentry client for node and browser.

## Installation

NPM
```
$ npm install --save @syginc/isomorphic-sentry
```

Yarn
```
$ yarn add @syginc/isomorphic-sentry
```

## Usage

```
import {captureMessage, init, SDK_NAME} from "@syginc/isomorphic-sentry";

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
