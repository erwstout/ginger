# Block Grids
Ginger also includes classes for creating block grids. These can be helpful when you
don't necessarily want a list of elements to span _columns_ but create a grid of elements
that are evenly spaced in their parent containers.

## Default Alignments
By default a block grid has these flex properties:

```scss
$block-grid-flex-direction: row !default;
$block-grid-justify-content: space-between !default;
$block-grid-align-items: flex-start !default;
$block-grid-flex-wrap: wrap !default;
```

You can overwrite any of these values by simply adding a row helper class.

## Changing Block Grid Count For Viewports & Usage Example
The number of items in the grid can change for other viewports by simply adding
an additional class to to. For instance, if we wanted our block grid to be 4 items
per row on large screens and wrap to 1 item per row on small devices it would look like this:

```html
<div class="sm-block-grid-1 block-grid-4">
  <div class="col">
    <!-- content -->
  </div>
  <div class="col">
    <!-- content -->
  </div>
  <div class="col">
    <!-- content -->
  </div>
  <div class="col">
    <!-- content -->
  </div>
</div>
```
