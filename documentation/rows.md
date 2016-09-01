# Rows
Rows hold your `columns` and are crucial to the layout of your site. Rows are required
to be a direct child of a `container` or else they may not flex or behave as expected.

## Usage Examples
As mentioned, rows should be a direct child of a `container` element. An practical
example would look something like this:

```html
<section id="example-intro" class="container">
  <div class="row">
    <!-- columns, content, etc -->
  </div>
</section>
<section id="example-copy" class="container">
  <div class="row">
    <!-- columns, content, etc -->
  </div>
</section>
```

## Defaults and Overrides
By default, rows have the following flex values:

```scss
$row-flex-wrap       : wrap !default;
$row-flex-direction  : row !default;
$row-justify-content : space-between !default;
$row-align-items     : flex-start !default;
$row-align-content   : flex-start !default;
```
### Max Width
Rows have a max-width of `75em` by default, that can be overridden in the Ginger
`_settings` file, or with the use of a `row--full-width` helper class which will
be covered below.

## Overrides and Helper Classes
Similar to `containers`, `rows` also have a set of helper classes available to you
to have even more control over your layouts.

These helper classes are as follows:

- `.row--full-width`
  - Allows the row to be `100%` wide

- `.row--no-wrap`
  - Stops the row's columns from wrapping

- `.row--reverse`
  - Reverses the order of the row's columns

- `.row--justify-content-center`
  - Justifies all columns to the center of the row

- `.row--justify-content-start`
  - Justifies all columns to the start of the row

- `.row--justify-content-end`
  - Justifies all columns to the end of the row

- `.row--justify-content-space-around`
  - Justifies all columns with the `space-around` flex value

- `.row--align-items-start `
  - Aligns items (columns) to the top of each other

- `.row--align-items-center`
  - Aligns items (columns) to their centers

- `.row--align-items-end`
  - Aligns items (columns) to the bottom of each other

- `.row--align-items-baseline`
  - Aligns items (columns) to their baselines

- `.row--align-items-stretch`
  - Stretch all items (columns) to the same height

- `.row--align-content-center`
  - Align columns to the center when they wrap

- `.row--align-content-end`
  - Align columns to their ends when they wrap

- `.row--align-content-space-between`
  - Align columns using `space-between` when they wrap

- `.row--align-content-space-around`
  - Align columns using `space-around` when they wrap

- `.row--align-content-stretch`
  - Align columns using `stretch` when they wrap 
