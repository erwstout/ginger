# Extras

Here are a collection of tools/classes that help aid development of your site or theme.

## Text Alignment

Easily set text alignments for elements.

- `text-left`
- `text-center`
- `text-right`

### Adjusting For Viewports

You can adjust text alignments for viewports as well.

- `md-text-left`
- `md-text-center`
- `md-text-right`
- `sm-text-left`
- `sm-text-center`
- `sm-text-right`

### Usage Example

```html
<div class="col-10 text-center sm-text-left">
  <!-- Content -->
</div>
```

## Column Centering

If you wish to center a column in its row, you can do so by adding `col-centered`. You can also do this for a certain viewport as well.

### Usage Examples

```html
<!-- Centered on Large Viewport -->
<div class="col-4 col-centered">
  <!-- Content -->
</div>

<!-- Centered on Medium Viewport -->
<div class="col-4 md-col-centered">
  <!-- Content -->
</div>

<!-- Centered on Small Viewport -->
<div class="col-6 sm-col-centered">
  <!-- Content -->
</div>
```

## Column - Push Right

You can push a column to the right as well, but it you may be better off using a row helper class of `row--justify-content-end` instead... but just in case it's
here for you.

### Usage Example

```html
<div class="col-6 col-right">
  <!-- Content -->
</div>
```

## Stretching Columns

Stretching columns can come in handy quite often. This will stretch a column so
that it is the same height as its siblings.

### Usage Example

```html
<div class="col-6 stretch">
  <!-- Content -->
</div>
<div class="col-6 stretch">
  <!-- Content -->
</div>
```
