# SendBird messenger

<img src="src/assets/images/banners/default.png" alt="sendbird-messenger">

## [Demo](https://react-sendbird-messenger.vercel.app/)

<img src="src/assets/images/demo/mobile.gif" alt="mobile">
<img src="src/assets/images/demo/web.gif" alt="web">

## Life cycle processes

<!-- [![CircleC](https://circleci.com/gh/chnirt/react-sendbird-messenger.svg?style=svg)](https://circleci.com/gh/chnirt/react-sendbird-messenger) -->

![CI/CD](https://github.com/chnirt/react-sendbird-messenger/workflows/GithubCI/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/chnirt/react-sendbird-messenger)](https://github.com/chnirt/react-sendbird-messenger/issues)
[![GitHub forks](https://img.shields.io/github/forks/chnirt/react-sendbird-messenger)](https://github.com/chnirt/react-sendbird-messenger/network)
[![GitHub stars](https://img.shields.io/github/stars/chnirt/react-sendbird-messenger)](https://github.com/chnirt/react-sendbird-messenger/stargazers)
[![GitHub license](https://img.shields.io/github/license/chnirt/react-sendbird-messenger)](https://github.com/chnirt/react-sendbird-messenger)

## Tasks: 1 Sep, 2020 ~ Now

-   [x] Design login, register, dashboard
-   [x] Router-router-dom v6
-   [x] Custom components
-   [x] useAuth
-   [x] useFirebase
-   [x] useSendBird
-   [x] Multiple Environment
-   [x] Constants
-   [x] Convert js --> jsx
-   [x] Generate ssl
-   [x] Start https with ssl
-   [x] Pre-commit with husky
-   [x] CircleCI, GithubCI
-   [x] Analyze source
-   [x] I18n
-   [x] Dark mode - css one line
-   [x] Sentry - error tracking

-   [ ] Filter firebase
-   [x] Design settings
-   [x] DTO
-   [x] Mock data - https://mockapi.io/projects/5f0ea5f8faef3500160b8664
-   [ ] Full testing
-   [ ] Lazy image
-   [x] Scroll to bottom
-   [x] Load more
-   [x] Responsive mobile
-   [x] Design calling
-   [x] Calling
-   [x] Custom console.log for dev, prod
-   [x] Animation with Framer
-   [x] message status: Sent, Delivered, Seen
-   [x] Integrate Electron - Desktop app

## Prepare!!!

-   Register an account [Firebase](https://firebase.google.com/) and [Sendbird](https://dashboard.sendbird.com/auth/signup) and [Sentry](https://sentry.io/signup/) (optional)
-   Firebase: Create Project -> Authentication -> Sign-in-method -> Sign-in providers -> Email/Password -> Enabled
-   Sendbird: Create Application -> Settings -> Chat -> Features -> Enable all features
-   Prepare environment for .env like .env.sample

## Installation

1. clone repository

```
  git clone https://github.com/chnirt/react-sendbird-messenger.git
```

2. cd into directory

```
  cd react-sendbird-messenger/
```

3. create .env

```
  touch .env
```

4. add to .env

```
  PORT=<your-port>
  ...
```

5. install dependencies using npm

```
  npm i
```

## Starting the Server

1. Start in development normal

```
  npm run start
```

### Learn more

-   React Router v6 Preview: https://reacttraining.com/blog/react-router-v6-pre/

-   React — Environment specific builds using .env with CRA and env-cmd: https://medium.com/@rishi.vedpathak/react-environment-specific-builds-using-env-with-cra-and-env-cmd-5960a1253fe6

-   CircleCI Sample config.yml Files: https://circleci.com/docs/2.0/sample-config/#section=configuration

-   CircleCI Adding Status Badges: https://circleci.com/docs/2.0/status-badges/

-   Circle Slack: https://circleci.com/blog/automating-the-deploy-of-an-adonis-api-to-heroku/

-   Deploy ReactJS App with S3 Static Hosting: https://medium.com/serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6

-   How to use emojis in React: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7

-   Manage Users in Firebase: https://firebase.google.com/docs/auth/web/manage-users

-   How to Build a Role-based API with Firebase Authentication :https://www.toptal.com/firebase/role-based-firebase-authentication

-   Node.js Everywhere with Environment Variables!: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

-   Basic Security Rules: https://firebase.google.com/docs/rules/basics

-   Firebase Timestamp: https://firebase.google.com/docs/reference/android/com/google/firebase/Timestamp

-   Autocomplete Input Styling:
    https://github.com/ant-design/ant-design/issues/4736

-   Filter by search keyword in cloud firestore query: https://medium.com/feedflood/filter-by-search-keyword-in-cloud-firestore-query-638377bf0123

-   TopBarProgress: https://codesandbox.io/s/rw156kk8km?file=/src/index.js:127-159

-   Setting Up Your Editor : https://create-react-app.dev/docs/setting-up-your-editor/

-   Developing Components in Isolation:
    https://create-react-app.dev/docs/developing-components-in-isolation

-   Code Quality with Prettier, ESLint and Husky:
    https://rafaelsm.me/code-quality-prettier-eslint-husky

-   Starting with preconfigured workflow templates: https://docs.github.com/en/actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates

-   Setting up a CI/CD workflow on GitHub Actions for a React App (with GitHub Pages and Codecov) : https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp

-   How to add canvas support to my tests in Jest? : https://stackoverflow.com/questions/33269093/how-to-add-canvas-support-to-my-tests-in-jest

-   WhatsApp-Engineering Inside-2 : https://medium.com/codingurukul/whatsapp-engineering-inside-2-bdd1ec354748

-   How do you disable viewport zooming on Mobile Safari?:https://stackoverflow.com/questions/4389932/how-do-you-disable-viewport-zooming-on-mobile-safari

-   How to Create a Custom useDeviceDetect() React Hook:
    https://reedbarger.com/how-to-create-a-custom-usedevicedetect-react-hook/

-   How to set alias path via webpack in CRA (create-react-app) and craco?: https://stackoverflow.com/questions/56387849/how-to-set-alias-path-via-webpack-in-cra-create-react-app-and-craco

-   Configuring absolute paths in React for Web without ejecting [en-US] : https://dev.to/bybruno/configuring-absolute-paths-in-react-for-web-without-ejecting-en-us-52h6

-   How to fix build failures with `create-react-app` in production: https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752

-   Icon :https://www.flaticon.com/

-   Creating and storing encrypted secrets : https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets

-   Setting an Environment Variable in a Project: https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project

-   Shields.io: https://github.com/badges/shields

-   How can I reference package version in npm script?: https://stackoverflow.com/questions/48609931/how-can-i-reference-package-version-in-npm-script

-   Override console.log(); for production [duplicate]: https://stackoverflow.com/questions/7042611/override-console-log-for-production

-   Hide 🙈 all console logs in production with just 3 lines of code: https://dev.to/sharmakushal/hide-all-console-logs-in-production-with-just-3-lines-of-code-pp4

-   Extend console's methods without losing line information: https://dev.to/maxbvrn/extend-console-s-methods-without-losing-line-information-2d68

-   Builds fail in CI: https://www.gitmemory.com/issue/timarney/react-app-rewired/391/489176960

-   UNIT TESTS-ENOMEM: not enough memory, read: https://discuss.circleci.com/t/unit-tests-enomem-not-enough-memory-read/35695

-   Solve Module Import Aliasing for Webpack, Jest, and VSCode > <mark>remove line comments in jsconfig.json</mark>: https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9

-   42,006 free vector icons at your fingertips : https://www.iconbolt.com/

-   HTML5 video not working on iphone with react jsx: https://stackoverflow.com/questions/39852188/html5-video-not-working-on-iphone-with-react-jsx

-   Framer sample: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i

-   Mp4 to gif: https://www.onlineconverter.com/mp4-to-gif

-   Deploy Amplify error with emoji: https://github.com/redhat-developer/yaml-language-server/issues/128

-   Deploy react to Amplify: https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro

-   Build settings: https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html

-   yarn build in ReactJS, Allocation failed - JavaScript heap out of memory: https://stackoverflow.com/questions/57923800/yarn-build-in-reactjs-allocation-failed-javascript-heap-out-of-memory

-   Get a free Domain name and setup SSL on your Server: https://www.codementor.io/@vahiwe/get-a-free-domain-name-and-setup-ssl-on-your-server-16h2icyzox

-   Create Chrome Extension in React: https://dev.to/bayardlouis470/create-chrome-extension-in-react-3pna

-   How to specify icons in manifest.json?: https://stackoverflow.com/questions/35298168/how-to-specify-icons-in-manifest-json

-   Service Workers: an Introduction: https://developers.google.com/web/fundamentals/primers/service-workers

-   Unexpected use of 'self' no-restricted-globals React: https://stackoverflow.com/questions/44292520/unexpected-use-of-self-no-restricted-globals-react

-   How to Make a React Progressive Web Application (PWA): https://www.codica.com/blog/how-to-create-pwa-with-react/
