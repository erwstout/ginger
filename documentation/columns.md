# Columns
Columns are the bread and butter of Ginger and should hold your content. Columns
follow an easy naming convention of `col-#` where you can specify how many columns
this element should span. So for a 4 column layout you would use `.col-4` and for
a 12 col layout you would use `.col-12`, and so on...

## Usage Examples
Below you can find an example layout of a page with a sidebar and content area.

```html
<section class="container">
  <div class="row">
    <aside id="sidebar" class="col-4">
      ... side bar content ..
    </aside>
    <article class="col-8">
      ... article content ...
    </article>
  </div>
</section>
```

Another common usage would be a 10 column layout centered in the middle of the page.
The `.col-centered` class is covered lower down on this page.

```html
<section class="container">
  <div class="row">
    <div class="col-10 col-centered">
      ... content ...
    </div>
  </div>
</section>
```
## Column Counts for Different Breakpoints
Since Ginger allows you to set both a `$medium-breakpoint` and a `$small-breakpoint`
you can change your column count based on the screen size. So for example, on larger
(usually desktop) devices, you may want a 10 column layout but on medium devices
you may need to drop to 8 by using `md-col-#`, and on small you may need to drop to 4 by using `sm-col-#`. This would be
achieved by using:

```html
<div class="col-10 md-col-8 sm-col-4">
  ...
</div>
```

## Column Extras!
Columns don't have the amount of overrides `containers` and `rows` have since in
most cases they are children elements, but they do have a few extras to help dial
in your layout.

### Centering A Column (`.col-centered`)
It's common for a `column` to be centered in the middle of the row such as the
example above. This can easily be achieved by adding the class `col-centered` to
a column. For instance:

```html
<div class="col-10 col-centered">
  ... code here ...
</div>
```

### Text Alignment
You can easily adjust the `text-align` property for an entire `column` by using
text alignment classes. There are three options available:

- `.text-left`
- `.text-center`
- `.text-right`

In practice this would look something like this:

```html
<div class="col-4 text-right">
  ... content that is right aligned ...
</div>
```

### No Padding (`.col-no-pad`)
In some cases you may want to get rid of the column padding (gutter). This can easily
be achieved by using a class of `.col-no-pad`.

```html
<div class="col-7 col-no-pad">
  ...
</div>
```

### Column Growing (`.col-grow`)
By default, a column has a `flex` property of `flex: 0 1 $flex-basis`. Adding a class of
`.col-grow` allows a column to grow (`flex: 1 1 $flex-basis`) when it rolls to a new line.
This can help you achieve a layout where an orphaned column rolls, it takes up the
entire width of the parent row. Usage:

```html
<div class="col-3 col-grow">
  ...
</div>
```
### Push Column Right (`.col-right`)
In some cases it might be useful to push a column to the far right of a row. This can
be achieved multiple ways (one of which is by changing the row `justify-content` property)
or by simply adding the class of `.col-right` to a column.

Example:

```html
<div class="col-4 col-right">
  ...
</div>
```

### Column Stretching
There are plenty of times where columns need to match each other in height, but
the content of each column will vary leaving one column shorter than the other.
You can easily tell columns to stretch to match its sibling columns by adding a class
of `.stretch` to them. This is very useful in `block-grid` elements.

Example:

```html
<div class="col-5 stretch">
  ...
</div>
```
