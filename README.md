# angular2-linky
[![Build Status](https://travis-ci.org/dzonatan/angular2-linky.svg?branch=master)](https://travis-ci.org/dzonatan/angular2-linky)

**Angular2** pipe to find links in text input and turn them into html links. It was called the same "linky" in **ngSanitize** module of **Angular1**. Since **Angular2** does not have such pipe built in therefore this repo was created.

This is just a wrapper for [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) so all issues and feature requests related to **autolinker** should go to their [issues](https://github.com/gregjacobs/Autolinker.js/issues)!


## Installation
Via npm:
`npm install --save angular2-linky`

Via bower:
`bower install --save angular2-linky`

## Usage
Use **linky** pipe with **[outerHTML]** binding to get HTML correctly rendered:

`<span [outerHTML]="yourText | linky"></span>`

You can pass any [autolinker option](https://github.com/gregjacobs/Autolinker.js#options) as a second pipe argument. For ex.:

`<span [outerHTML]="myText | linky:{newWindow: false}"></span>`

## License
MIT
