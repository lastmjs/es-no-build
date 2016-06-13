# What is this?
This repo provides a script that will automatically configure [SystemJS](https://github.com/systemjs/systemjs) to use TypeScript and Babel to transpile your
TypeScript/ES6/ES2015 code to ES5 code directly in the browser, all without a development build step. This gives you easy access to all TypeScript
and ES6/ES2015 features, including [ES6 modules](http://exploringjs.com/es6/ch_modules.html) and the amazing [async/await](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html).

# Installation
```
npm install --save es-no-build
```

# Usage

Include SystemJS (installed with this package) and this repo's `config.js` file in your `index.html`:
```
<!--index.html-->

<!DOCTYPE html>

<html>
  <head>
    <script src="node_modules/systemjs/dist/system.js"></script>
    <script src="node_modules/es-no-build/config.js"></script>
  </head>
  
  <body>
    System.import('main-code.js');
  </body>

</html>
```

You can put any TypeScript/ES6/ES2015 code and any Stage 2 or Stage 3 features code in the file that you import:

```
//main-code.js

import {testFunction} from 'test-module.js';

console.log(testFunction());
```

SystemJS automatically follows all of your imports and transpiles everything:

```
//test-module.js
const asyncFunction = async () => {
  return 'this is the result of the async function';
};

export const testFunction = async () => {
  return await asyncFunction();
};
```

If you need to know exactly what is going on during transpilation, including what type of code is accepted, see the following resources:
* [SystemJS](https://github.com/systemjs/systemjs)
* [SystemJS TypeScript plugin](https://github.com/frankwallis/plugin-typescript)
* [SystemJS Babel plugin](https://github.com/systemjs/plugin-babel)

# What is the problem?
Have you ever wanted to use ES6/ES2015? Have you ever wanted to use TypeScript? What about async/await? Of course you have.
Unfortunately, most web browsers don't natively support all of the JavaScript features that we want...yet. So, to get around that 
slight limitation, people have created webpack, Babel, TypeScript, Traceur, etc. Unfortunately again, adding these technologies adds
complexity to our development environments, including a "build step". What if you don't want a build step? This repo helps solve that problem.

# How is it solved?
Using [SystemJS](https://github.com/systemjs/systemjs) along with a [SystemJS TypeScript plugin](https://github.com/frankwallis/plugin-typescript) and a [SystemJS Babel plugin](https://github.com/systemjs/plugin-babel), SystemJS will take care of following and importing from all imports in our code, and will transpile our code from TypeScript to ES6/ES2015 to ES5.

# Why is this nice?
No more webpack. No more browserify. No more bundling! No more installing TypeScript, and Babel, and Babel presets, and Babel plugins, and including the Babel polyfill to get async/await to work. Just include SystemJS and this repo's `config.js` file, and all of the transpilation and polyfilling is done for you. Nice!

# Are there possible problems?
This repo solves the problem of the complexity of the build step, but comes with problems of its own. It's up to you to decide if moving your build step to the browser is a good choice for your application. This will most likely make the initial load of your application slower. How much slower, I don't know, you'll have to try it out for yourself.
