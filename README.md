# What is this?
This repo provides a script that will automatically configure [SystemJS](https://github.com/systemjs/systemjs) to use TypeScript and Babel to transpile your
TypeScript/ES6/ES2015 code to ES5 code directly in the browser, all without a development build step. This gives you easy access to all TypeScript
and ES6/ES2015 features, including [ES6 modules](http://exploringjs.com/es6/ch_modules.html) and the amazing [async/await](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html).

# Installation
```
npm install --save es-no-build
```

# Basic Usage

To immediately get started just include this repo's `config.js` file in your `index.html`:
```
<!--index.html-->

<!DOCTYPE html>

<html>
  <head>
    <script src="node_modules/es-no-build/config.js"></script>
  </head>
  
  <body>
    <script>
      System.import('main-code.js');
    </script>
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

# Custom Usage

## Type Checking
Basic usage as described above will transpile and run TypeScript/ES6/ES2015 code, but it will not perform type checking. If you would like the results of type checking to be logged to the console, include the `add-type-script.js` script anywhere before the `config.js` script:

```
<head>
  <script src="node_modules/es-no-build/add-type-check.js"></script>
  <script src="node_modules/es-no-build/config.js"></script>
</head>
```

## tsconfig.json
If you would like to add TypeScript configuration through a `tsconfig.json` file, then make sure the file is available from your server's root endpoint, and then include the `add-tsconfig.js` script anywhere before the `config.js` script:

```
<head>
  <script src="node_modules/es-no-build/add-type-check.js"></script>
  <script src="node_modules/es-no-build/add-tsconfig.js"></script>
  <script src="node_modules/es-no-build/config.js"></script>
</head>
```

# What is the problem?
Have you ever wanted to use ES6/ES2015? Have you ever wanted to use TypeScript? What about async/await? Of course you have.
Unfortunately, most web browsers don't natively support all of the JavaScript features that we want...yet. So, to get around that 
slight limitation, people have created webpack, Babel, TypeScript, Traceur, etc. Unfortunately again, adding these technologies adds
complexity to our development environments, including a "build step". What if you don't want a development build step? This repo helps solve that problem.

# How is it solved?
Using [SystemJS](https://github.com/systemjs/systemjs) along with a [SystemJS TypeScript plugin](https://github.com/frankwallis/plugin-typescript) and a [SystemJS Babel plugin](https://github.com/systemjs/plugin-babel), SystemJS will take care of following and importing from all imports in our code, and will transpile our code from TypeScript to ES6/ES2015 to ES5.

# Why is this nice?
No more webpack. No more browserify. No more installing TypeScript, and Babel, and Babel presets, and Babel plugins, and including the Babel polyfill to get async/await to work. Just include SystemJS and this repo's `config.js` file, and all of the transpilation and polyfilling is done for you in the browser. Nice!

# Are there possible problems?
This repo solves the problem of the complexity of the development build step, but comes with problems of its own. It will make the initial load of your application slow. How slow? It depends on the structure of your imports and the amount of code you have.

# Production
Unfortunately, because of the time it takes to transpile and follow all of the imports in your code in the browser, you will probably want to use a build step for production deployment of your application. This repo can be used to keep development simple, but production will need a build step. I'll work on a simple way to use SystemJS to bundle and transpile all of your files for production, I just haven't look too much into it yet.
