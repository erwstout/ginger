![Ginger Logo](http://erwstout.github.io/ginger/images/GingerLogo.png)

# Ginger #
Ginger is a minimal flexbox 12 column grid system named after a cute dog. It doesn't give
you any fancy extras like some other frameworks, but what it does give you is a
solid lightweight grid system to make developing and designing your next site
easy and quick.

## Installing Ginger ##
There are three ways to install Ginger.

1.  Clone the repository or download the files to your project
2.  Install via bower using `bower install ginger-grid --save`
3.  Install via npm using `npm install ginger-grid --save`

When setting up the `scss` file for your project be sure to include the Ginger
settings file before importing `ginger.scss`. An example `scss` file may look like this:

```scss
// Include Ginger
@import 'ginger/settings';
@import 'ginger/ginger';
```
It's important to note that you may get a compile error if you're not including
the path to Ginger when compiling your styles.

## Issues / Bugs / Contributions ##
If you have feedback, find a bug, or want to make contributions, please don't
hesitate to open an issue or make a pull request.

Special thanks to [Allison Perlis](http://allisonperlis.com/) for the rad Ginger
logo!
