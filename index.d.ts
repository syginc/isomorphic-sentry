import * as SentryBrowser from "@sentry/browser";
import * as SentryNode from "@sentry/node";

declare const sentry: typeof SentryNode | typeof SentryBrowser;
export = sentry;
