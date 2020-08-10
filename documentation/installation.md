There are three ways to install Ginger.

1.  Clone the repository or download the files to your project
2.  Install via bower using `bower install ginger-grid --save`
3.  Install via npm using `npm install ginger-grid --save`

When setting up the `scss` file for your project be sure to include the Ginger
settings file before importing `ginger.scss`. An example `scss` file may look like this:

```scss
// Include Ginger
@import "ginger/settings";
@import "ginger/ginger";
```

It's important to note that you may get a compile error if you're not including
the path to Ginger when compiling your styles.
