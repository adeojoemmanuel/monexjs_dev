<div align="center">
  <h1 align="center">Get Them Args</h1>
  <br>
  <strong>Parse argument options</strong>
  <br>
  <div align="center">
    <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
    </a>
    <a href="https://travis-ci.org/tiaanduplessis/get-them-args">
      <img src="https://img.shields.io/travis/tiaanduplessis/get-them-args/master.svg?style=flat-square" alt="Travis" />
    </a>
    <a href="https://github.com/RichardLitt/standard-readme)">
      <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
    </a>
    <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
  </div>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/sep-prop/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/sep-prop.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/sep-prop/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/sep-prop.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20sep-prop!%20https://github.com/tiaanduplessis/sep-prop%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/sep-prop.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="http://tiaanduplessis.co.za">Tiaan du Plessis</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

Simple CLI argument parser hacked from [minimist](https://github.com/substack/minimist) that adds support for objects and additional initialization options.

## Install

```sh
$ npm install --save get-them-args
# Or
$ yarn add get-them-args
```

## Usage
To use, provide arguments as argument:

```js
const parse = require('get-them-args')
const options = {} // Options to be passed. CURRENTLY NONE AVAILABLE

// $ node ./example.js --dir . --command foo
console.log(parse(process.argv.slice(2) ))
// { unknown: [], dir: '.', command: 'foo' }

console.log(parse(process.argv))
// { unknown: [], dir: '.', command: 'foo' }

console.log(parse())
// { unknown: [], dir: '.', command: 'foo' }

```

For example, if the arguments provided are `--hello world --parse=all --no-drugs --make-friends -n 4 -t 5`, the function will return:

```js
{ unknown: [],
  hello: 'world',
  parse: 'all',
  drugs: false,
  'make-friends': true,
  n: 4,
  t: 5
}

```

There is also support for parsing objects:

```sh

$ node example.js --headers={"Foo": "5", "bar": "6"}
# { unknown: [], headers: { Foo: 5, bar: 6 } }

```

All unparsed arguments will end up in the `unknown` array. The following types of arguments are supported:

```sh
--key=value
--key value
--key # true
--no-key # false
-key=value
-key value
```
## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
