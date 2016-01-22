![Ginger Logo]
(http://buschschwick.github.io/ginger/images/GingerLogo.png)

# Ginger #
Ginger is a minimal flexbox 12 column grid system named after a cute dog. It doesn't give
you any fancy extras like some other frameworks, but what it does give you is a
solid lightweight grid system to make developing and designing your next site
easy and quick.

## Installing Ginger ##
There are three ways to install Ginger.

1.  Clone the repository or download the files to your project
2.  Install via bower using `bower install ginger --save`
3.  Install via npm using `npm install ginger-grid --save`

A fourth option is downloading the latest version of Ginger and including `ginger.min.css`
found in the `/dist/` folder into the `<head>` of your document. Only use this method if you don't want to customize
any settings and/or need a pure CSS build.

When setting up the `scss` file for your project be sure to include the Ginger
settings file before importing `ginger.scss`. An example `scss` file would look like this:

```scss
// Include Ginger
@import 'ginger/settings';
@import 'ginger/ginger';
```
It's important to note that you may get a compiler error if you're not including
the path to Ginger when compiling.

## Using Ginger ##
Ginger is rather easy to use. A basic structure that consists of an element that
spans 12 columns would look similar to this:
```html
<div class="container">
  <div class="row">
    <div class="col-12">
      ...
    </div>
  </div>
</div>
```
Or if you wanted two columns that span 6 each:
```html
<div class="container">
  <div class="row">
    <div class="col-6">
      ...
    </div>
    <div class="col-6">
      ...
    </div>
  </div>
</div>
```
Ginger requires that you always use a `container` element to hold your `row` and
columns and you must have a `row` element that holds your columns.

## Optional Framework Setup ##
Additionally, Ginger allows you to specify framework options by attaching helper classes to the `container` element.
Default settings are:
- `flex-wrap       : nowrap`
- `flex-direction  : column`
- `justify-content : flex-start`
- `align-items     : center`
- `align-content   : flex-start`

Classes available for overrides are:
- `.container--wrap`
- `.container--direction-row`
- `.container--justify-content-center`
- `.container--justify-content-end`
- `.container--justify-content-space-between`
- `.container--justify-content-space-around`
- `.container--align-items-start`
- `.container--align-items-end`
- `.container--align-items-baseline`
- `.container--align-items-stretch`
- `.container--align-content-center`
- `.container--align-content-end`
- `.container--align-content-space-between`
- `.container--align-content-space-around`
- `.container--align-content-stretch`

For example, if you wanted the container to justify the content in the center your
element would look like this:

`<div class="container container--justify-content-center">...</div>`

## Individual Flex-Basis Values ##
If you'd like to have columns with custom `flex-basis` values, you totally can.
This requires that you include `js/ginger.js` or `dist/ginger.min.js` in your project. A
custom `flex-basis` setup would look something like this:
```html
<div class="container">
  <div class="row">
    <div class="flex-basis-450">
      ...
    </div>
  </div>
</div>
```
Whatever value you give your `flex-basis-` class will be passed to the element's
`flex-basis` property and is converted to pixels. Ginger does not require to include `ginger.js` so if changing
`flex-basis` values with classes isn't for you, then move on!

## Class Names ##
The goal for Ginger is to be very simple. Class names are simple too. Adding `col-*` will give you an element spanning
however many columns indicated. So to add an element spanning 6 columns I would
use:
```html
<div class="col-6">
```

### Miscellaneous Classes ###
* `col-centered` - using this will center your element in the row
* `col-right` - using this will push your element to the far right of the row

## Responsiveness ##
Ginger is mobile responsive. By default, all columns break to 100% at the defined
mobile breakpoint.

## Extras ##
Ginger has a few extras to make life easy, because life is already too hard.

### Text Classes ###
There are three text classes if you wish to use them for text alignment. Adding
`text-left`,  `text-center`, or `text-right` will align your text accordingly.

### Element Sizing ###
Adding a class of `stretch` to your column will allow that element to stretch
to the height of its siblings.

### Visibility Classes ###
There are two visibility classes to help you hide or show elements for desktop/mobile.

* `only-mobile` - show the element only on mobile
* `only-desktop` - show the element only on desktop

## Adjusting Default Settings ##
Adjusting the settings for Ginger allows you to customize the max-width of rows,
column padding, global flex-basis value, or mobile breakpoint. If you are going to adjust
the settings it is best to make a copy of the file and include it in your project
compilation process to avoid any settings being overwritten in the event of a
Ginger update.

For instance, if I had a stylesheet called `theme.scss` using Ginger with custom
settings it would look something like this:
```scss
// vendor files
@import 'scss/_settings.scss';
@import 'ginger/ginger';
```
Or if you installed Ginger with bower, it would look something like this:
```scss
// vendor files
@import 'scss/_settings.scss';
@import 'bower_components/ginger/ginger';
```
## Issues / Bugs / Contributions ##
If you have feedback, find a bug, or want to make contributions, please don't
hesitate to open an issue or make a pull request.

Special thanks to [Allison Perlis](http://allisonperlis.com/) for the rad Ginger
logo!
