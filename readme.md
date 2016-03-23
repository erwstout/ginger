![Ginger Logo](http://erwstout.github.io/ginger/images/GingerLogo.png)

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
the path to Ginger when compiling your styles.

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
New in `1.1.0`, you can now create small columns that work inside your `small-breakpoint`
media query. So if you have a column that should be 6 columns on desktop and 9 on small
devices it would look like this:

```html
<div class="container">
  <div class="row">
    <div class="sm-col-9 col-6">
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

You can also use these same naming conventions to add overrides to `.row`. Classes
available for `.row` overrides are:

- `.row--no-wrap`
- `.row--justify-content-start`
- `.row--justify-content-center`
- `.row--justify-content-end`
- `.row--justify-content-space-around`
- `.row--align-items-start`
- `.row--align-items-end`
- `.row--align-items-baseline`
- `.row--align-items-stretch`
- `.row--align-content-center`
- `.row--align-content-end`
- `.row--align-content-space-between`
- `.row--align-content-space-around`
- `.row--align-content-stretch`

## Individual Flex-Basis Values ##
If you'd like to have columns with custom `flex-basis` values, you totally can.
This requires that you include `js/ginger.js` or `dist/ginger.min.js` in your project. A
custom `flex-basis` setup would look something like this (Note this is not included
  in the quick setup version of Ginger):

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


## Responsiveness ##
Ginger is mobile responsive. By default, all columns break to 100% at the defined
mobile (small) breakpoint unless they have a `.sml-col-*` value.

## Extras ##
Ginger has a few extras to make life easy, because life is already too hard.

### Text Classes ###
There are three text classes if you wish to use them for text alignment.
- `.text-left`
- `.text-center`
- `.text-right`

### Element Sizing ###
Adding a class of `.stretch` to your column will allow that element to stretch
to the height of its sibling(s).

### Miscellaneous Helper Classes ###
* `.col-centered` - using this will center your column in the row
* `.col-right` - using this will push your column to the far right of the row

### Visibility Classes ###
There are two visibility classes to help you hide or show elements for desktop/small:

* `.small-only` - show the element only on on devices smaller then the `$small-breakpoint` value.
* `.desktop-only` - show the element only on desktop

## Adjusting Default Settings ##
Adjusting the settings for Ginger allows you to customize the max-width of rows,
column padding, global flex-basis value, or small breakpoint. If you are going to adjust
the settings it is best to make a copy of the file and include it in your project
compilation process to avoid any settings being overwritten in the event of a
Ginger update.

For instance, if I had a stylesheet called `theme.scss` using Ginger with custom
settings it would look something like this:
```scss
// Include Ginger
@import '../your_project_path/assets/scss/_ginger-settings.scss';

@import 'ginger/ginger';
```

## Issues / Bugs / Contributions ##
If you have feedback, find a bug, or want to make contributions, please don't
hesitate to open an issue or make a pull request.

Special thanks to [Allison Perlis](http://allisonperlis.com/) for the rad Ginger
logo!
