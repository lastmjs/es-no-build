# What is this?
This repo provides a script that will automatically configure [SystemJS](https://github.com/systemjs/systemjs) to use TypeScript and Babel to transpile your
JavaScript to ES5 directly in the browser, all without a development build step. This gives you easy access to all TypeScript
and ES2015 features, including ES6 modules and the amazing async/await.

# Installation
```
npm install --save es-no-build
```

# Usage
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

```
//main-code.js



```

# What is the problem?
Have you ever wanted to use ES6/ES2015? Have you ever wanted to use TypeScript? What about async/await? Of course you have.
Unfortunately, most web browsers don't natively support all of the JavaScript features that we want...yet. So, to get around that 
slight limitation, people have created webpack, Babel, TypeScript, Traceur, etc. Unfortunately again, adding these technologies adds
complexity to our development environments, including a "build step". What if you don't want a build step? This repo helps solve that problem.

# How is it solved?
Using [SystemJS](https://github.com/systemjs/systemjs) along with a [TypeScript plugin](https://github.com/frankwallis/plugin-typescript)
