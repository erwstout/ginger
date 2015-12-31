# Ginger #
Ginger is a minimal flexbox 12 column grid system named after a cute dog. It doesn't give
you any fancy extras like some other frameworks, but what it does give you is a
solid lightweight grid system to make developing and designing your next site
easy and quick.

## Installing Ginger ##
Currently, there is only this repository. In the near future you will be able to
use both bower and npm.

## Using Ginger ##
Ginger is rather easy to use. A basic structure of one column spans 12 columns
would look similar to this:
```
<div class="container">
  <div class="row">
    <div class="col-12">
      ...
    </div>
  </div>
</div>
```
Or if you wanted two columns that span 6 each:
```
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

## Class Names ##
I kept Ginger very simple. Adding `col-*` will give you an element spanning
however many columns indicated. So to add an element spanning 6 columns I would
use:
```
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
