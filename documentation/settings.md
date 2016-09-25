# Ginger Settings
Ginger uses a simple settings file aptly named `_settings.scss` in the `settings/`
folder so you can easily adjust the framework. It is a best practice to copy this
file into your project and edit the values there. This will save your changes from
being overridden in the event of a Ginger update.

> _Important_: Be sure to import the `_settings.scss` file before `_ginger.scss` or else your sass compile will fail.

## Container Max Width (`$container-max-width`)
This variable controls the maximum width a container can have. It has a default
value of `100%` but can be changed to any value and has no restrictions on the values.
It can be a percentage, px, em, rem, etc...

## Row Max Width (`$row-max-width`)
The `$row-max-width` variable controls the maximum width a row can be. It has a
default value of `75rem` but can be changed to any value and has no restrictions
on the values. It can be a percentage, px, em, rem, etc...

## Block Grid Max Number (`$max-block-grid`)
The `$max-block-grid` variable controls the highest number of `block-grid` columns
you can have. By default it is set to `12`.

## Column Padding (`$col-padding`)
The `$col-padding` variable controls the padding (or gutter) inside the columns.
By default it is ` 0.80rem`.

## Flex Basis (`$flex-basis`)
The `$flex-basis` variable controls the default `flex-basis` value of columns. By
default it is set to `auto` and would very rarely get changed at a global level, but it's there just
for complete customization.

## Medium Breakpoint (`$medium-breakpoint`)
The `$medium-breakpoint` variable controls the viewport size that should be used
when switching to a medium screen. This is always used as a `max-width` value in
Ginger media queries and covers _from_ the `small-breakpoint` to the value of the
`medium-breakpoint`. This value **must** be a `rem` or `em`.

By default, `$medium-breakpoint` is set to `64em`.

## Small Breakpoint (`$small-breakpoint`)
The `$small-breakpoint` variable controls the viewport size that should be used
when switching to a small screen. This is always used as a `max-width` value in
Ginger. This covers all screen sizes from `0px` up to the declared value of
`$small-breakpoint`. This value **must** be a `rem` or `em`.

By default, `$small-breakpoint` is set to `43em`.
