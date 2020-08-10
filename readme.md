# Ginger

![Ginger Logo](https://gingergrid.firebaseapp.com/GingerHeader.jpg)

![npm](https://img.shields.io/npm/v/ginger-grid)
![npm bundle size](https://img.shields.io/bundlephobia/min/ginger-grid)
![npm](https://img.shields.io/npm/dt/ginger-grid)
![GitHub stars](https://img.shields.io/github/stars/erwstout/ginger?color=b4a)

Ginger is a minimal flexbox 12 column grid system named after a cute dog. It doesn't give
you any fancy extras like some other frameworks, but what it does give you is a
solid lightweight grid system to make developing and designing your next site
easy and quick.

## Installing Ginger

There are three ways to install Ginger.

1. Clone the repository or download the files to your project
1. Install via npm/yarn using `npm install ginger-grid --save` or `yarn add ginger-grid`

When setting up the `scss` file for your project be sure to include the Ginger
settings file before importing `ginger.scss`. An example `scss` file may look like this:

```scss
// Include Ginger
@import "ginger/settings";
@import "ginger/ginger";
```

It's important to note that you may get a compile error if you're not including
the path to Ginger when compiling your styles.

You can view all the documentation at [gingergrid.com](https://gingergrid.com).

## Issues / Bugs / Contributions

If you have feedback, find a bug, or want to make contributions, please don't
hesitate to open an issue or make a pull request.

Special thanks to [Allison Perlis](http://allisonperlis.com/) for the rad Ginger
logo!
