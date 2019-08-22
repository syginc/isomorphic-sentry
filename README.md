# @syginc/isomorphic-sentry

Isomorphic sentry client for node and browser.

## Installation

Before installing, make sure to authenticate with GitHub Package Registry or using a `.npmrc` file.
 See "[Configuring npm for use with GitHub Package Registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry)."

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
