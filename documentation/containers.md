# Containers
Ginger requires that your rows be wrapped in a `.container` element. This is to
ensure that your rows can properly flex based on their flex values and gives you
ultimate control over your layouts.

You can add the `.container` class wherever you like as long as your `rows` are
direct children.

## Usage Examples
Each section on the page is a `container`:
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

Entire body class as a `container`:
```html
<body class="container">
  <section class="row">
    <!-- columns, content, etc -->
  </section>
</body>
```

## Defaults and Overrides

### Max Width
Containers by default have a max width of `100%`, but a different value can be set via `settings`
inside the `$container-max-width` variable.

### Default Flex Values
Also by default, `containers` have the following flex values:

```scss
$flex-wrap       : nowrap     !default;
$flex-direction  : column     !default;
$justify-content : flex-start !default;
$align-items     : center     !default;
$align-content   : flex-start !default;
```

Additionally, Ginger allows you to specify framework options by attaching helper
classes to the `container` element.

Classes available for override are:

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
- `.container--align-content-space-around `
- `.container--align-content-stretch`

### Override Example Usage
For example, if you wanted the container to justify the content in the center of
the `container` your element would look like this:

```html
<div class="container container--justify-content-center">
  ...
</div>
```
