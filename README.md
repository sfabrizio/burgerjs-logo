[![Build Status](https://travis-ci.org/sfabrizio/burgerjs-logo.svg?)](https://travis-ci.org/sfabrizio/burgerjs-logo)
[![codecov](https://codecov.io/gh/sfabrizio/burgerjs-logo/branch/develop/graph/badge.svg)](https://codecov.io/gh/sfabrizio/burgerjs-logo)
[![npm](https://img.shields.io/npm/v/burgerjs-logo.svg?style=flat)](https://www.npmjs.com/package/burgerjs-logo)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-git/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/sfabrizio/burgerjs-logo/badges/score.svg)](https://www.bithound.io/github/sfabrizio/burgerjs-logo)
[![Code Climate](https://codeclimate.com/github/sfabrizio/burgerjs-logo/badges/gpa.svg)](https://codeclimate.com/github/sfabrizio/burgerjs-logo)
# burgerjs-logo

ASCII art logo for [burgerjs-cli](https://www.npmjs.com/package/burgerjs-cli)

# Install

```
npm install burgerjs-logo
```

# How to use

```javascript
var logo = require('burgerjs-logo');

logo.print();

```

## The color can be especify by param.. The color allowed are the supported by the library [colors](https://www.npmjs.com/package/colors)

```javascript
var logo = require('burgerjs-logo');

logo.print({'color': 'yellow'});

```


## Oneline terminal run:

```
node -e "require('burgerjs-logo').print({'color': 'yellow'})"
```
