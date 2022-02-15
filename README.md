# react-codes-input
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![npm version](https://badge.fury.io/js/react-codes-input.svg)](https://badge.fury.io/js/react-codes-input) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-codes-input.svg) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/edwardfxiao/react-codes-input/master/LICENSE)[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

A react component for PIN, verify code and passcode entering. Online demo examples.

<img src="https://raw.githubusercontent.com/edwardfxiao/react-codes-input/master/react-codes-input.gif" width="400" />

# Online Demo
<a href="https://edwardfxiao.github.io/react-codes-input/">Online demo example</a>

<a href="https://github.com/edwardfxiao/react-codes-input/blob/gh-pages/example/index.js">Demo source code</a>

# Codesandbox Examples
* <a href="https://codesandbox.io/s/index-6hnbf">Examples</a>

### Version of ```16.8.6``` or higher of react and react-dom is required.
```js
  "peerDependencies": {
    "react": ">= 16.8.6",
    "react-dom": ">= 16.8.6"
  }
```

# Installation
```sh
npm install react-codes-input --save
```
# Donation
<a href="https://www.paypal.me/XIAOMENGXIAO/0.99" target="_blank" alt="PayPal Donate">Thanks for donating me a donut!&nbsp;&nbsp;⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄</a>

# Browser support
Tested on IE9+ and Chrome and Safari(10.0.3)

# Docs

|Props                        |       |Type         |Description                                    |Default          |
|---                          |---    |---          |---                                            |  ---            |
|initialFocus                 |  Opt  |  Bool       |Options are ['false', 'true']                  |  false          |
|wrapperRef                   |  Req  |  React Ref  |                                               |  none           |
|codeLength                   |  Req  |  Number     |                                               |  6              |
|id                           |  Req  |  Str        |                                               |  random ID      |
|onChange                     |  Req  |  Func       |                                               |  none           |
|type                         |  Opt  |  Default    |Options are ['alphanumeric', 'alpha', 'number']|  "alphanumeric" |
|letterCase                   |  Opt  |  Str        |Options are ['upper', 'lower']                 |  "upper"        |
|value                        |  Req  |  Str        |                                               |  ""             |
|disabled                     |  Opt  |  Bool       |Options are [false, true]                      |  false          |
|hide                         |  Opt  |  Bool       |Options are [false, true]                      |  false          |
|placeholder                  |  Opt  |  Str        |                                               |  ""          |
|focusColor                   |  Opt  |  Str        |                                               |  "#007bff"      |
|classNameComponent           |  Opt  |  Str        |                                               |  ""             |
|classNameWrapper             |  Opt  |  Str        |                                               |  ""             |
|classNameCodeWrapper         |  Opt  |  Str        |                                               |  ""             |
|classNameEnteredValue        |  Opt  |  Str        |                                               |  ""             |
|classNameCode                |  Opt  |  Str        |                                               |  ""             |
|classNameCodeWrapperFocus    |  Opt  |  Str        |                                               |  {}             |
|customStyleComponent         |  Opt  |  Obj        |                                               |  {}             |
|customStyleWrapper           |  Opt  |  Obj        |                                               |  {}             |
|customStyleCodeWrapper       |  Opt  |  Obj        |                                               |  {}             |
|customStyleEnteredValue      |  Opt  |  Obj        |                                               |  {}             |
|customStyleCode              |  Opt  |  Obj        |                                               |  {}             |
|customStyleCodeWrapperFocus  |  Opt  |  Obj        |                                               |  {}             |
|customStylePlaceholder       |  Opt  |  Obj        |                                               |  {}             |



```js
import ReactCodesInput from 'react-codes-input';
import 'react-codes-input/lib/react-codes-input.min.css';


<ReactCodesInput
  initialFocus="" // Opt. Bool. Default false. Options are ['false', 'true'].
  wrapperRef="" // Req. React Ref. Default none.
  codeLength="" // Req. Number. Default 6.
  id="" // Req. Str. Default random ID.
  onChange="" // Req. Func. Default none.
  type="" // Opt. Str. Default "alphanumeric". Options are ['alphanumeric', 'alpha', 'number'].
  letterCase="upper" // Opt. Str. Default "upper". Options are ['upper', 'lower'].
  value="" // Req. Str. Default "".
  disabled={false} // Opt. Bool. Default false. Options are [false, true].
  hide={false} // Opt. Bool. Default false. Options are [false, true].
  placeholder="" // Opt. Str. Default "".
  focusColor="" // Opt. Str. Default "007bff".
  classNameComponent="" // Opt. Str. Default "".
  classNameWrapper="" // Opt. Str. Default "".
  classNameCodeWrapper="" // Opt. Str. Default "".
  classNameEnteredValue="" // Opt. Str. Default "".
  classNameCode="" // Opt. Str. Default "".
  classNameCodeWrapperFocus="" // Opt. Str. Default {}.
  customStyleComponent={} // Opt. Obj. Default {}.
  customStyleWrapper={} // Opt. Obj. Default {}.
  customStyleCodeWrapper={} // Opt. Obj. Default {}.
  customStyleEnteredValue={} // Opt. Obj. Default {}.
  customStyleCode={} // Opt. Obj. Default {}.
  customStyleCodeWrapperFocus={} // Opt. Obj. Default {}.
  customStylePlaceholder={} // Opt. Obj. Default {}.
/>
```


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/edwardfxiao"><img src="https://avatars.githubusercontent.com/u/11728228?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Edward Xiao</b></sub></a><br /><a href="https://github.com/edwardfxiao/react-codes-input/commits?author=edwardfxiao" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!