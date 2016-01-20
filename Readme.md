
# symlibs

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Symlink a glob of folders into your node_modules

## Installation

    $ npm install symlibs

## Usage

Let's say you have a folder structure like:

```
+-- .babelrc
+-- package.json
+-- src
|   +-- components
|   +-- middleware
|   +-- reducers
```

You might run:

`symlibs src/*/`

And then you'll be able to:

`import Modal from 'components/modal'`

## Postinstall

It's recommended to put this in the postinstall script for your project, like so:

```json
{
  ...
  "scripts": {
    "postinstall": "symblibs src/*/"
  }
  ...
}
```

Or as a task in your Makefile if that's what you prefer.

## License

The MIT License

Copyright &copy; 2016, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
