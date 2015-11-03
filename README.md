# azk-nginx-example
An application example to show how to use Azk, Nginx, React and Webpack

## About

This is a project has the basic setup for these technologies:

 - [React](https://facebook.github.io/react/): Front-end framework created by Facebook.
 - [Azk](http://www.azk.io/): An evolution of Vagrant that uses Docker and can easily reuse local setup for deployment.
 - [Webpack](https://webpack.github.io): Automation tool to convert JS, JSX, SCSS, CSS and other files into browser format.
 - [Nginx](http://nginx.org/en/): CDN to serve static files.

The main goal of this project is to setup a working development environment that works on Linux, Mac and Windows to write front-end code using `React.js` that will be served to the browser through `Nginx`.

## Setup

1. Install Azk: http://docs.azk.io/en/installation/
2. Clone this project: https://github.com/agendor/react-webpack-sample/tree/azk
(use `azk` branch because the `master` branch is not completed as it's used by [this blog post tutorial](http://bits.agendor.com.br/2015/10/25/configurando-ambiente-para-front-end-com-azk/))

## Start 

```
$ cd react-webpack-sample

$ azk start
azk: ↑ starting `app-cdn` system, 1 new instances...
azk: ✓ checking `azkbuild/fe789d5c32-app-cdn:3bdf3e19feddd9c49a6e6ecce055661b470828c5` image...
azk: ⇲ building `azkbuild/fe789d5c32-app-cdn:3bdf3e19feddd9c49a6e6ecce055661b470828c5` image...
azk: ◴ waiting for `app-cdn` system to start, trying connection to port http/tcp...
azk: System `app-builder` already started

┌───┬─────────────┬───────────┬───────────────────────────┬─────────────────────────┬────────────────┐
│   │ System      │ Instances │ Hostname/url              │ Instances-Ports         │ Provisioned    │
├───┼─────────────┼───────────┼───────────────────────────┼─────────────────────────┼────────────────┤
│ ↑ │ app-builder │ 1         │ dev.azk.io                │ -                       │ 18 minutes ago │
├───┼─────────────┼───────────┼───────────────────────────┼─────────────────────────┼────────────────┤
│ ↑ │ app-cdn     │ 1         │ http://app-cdn.dev.azk.io │ 1-80:32770, 1-443:32769 │ an hour ago    │
│   │             │           │                           │ 1-http:32768            │                │
└───┴─────────────┴───────────┴───────────────────────────┴─────────────────────────┴────────────────┘
```

Our files will be served through `http://app-cdn.dev.azk.io`. Let's test it:

```
# index page
curl http://app-cdn.dev.azk.io

# request an asset
curl http://app-cdn.dev.azk.io/assets/app.js
```
