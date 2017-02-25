# Ginger Change Log #
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.3] - 2017-02-24
## Various Fixes and Documentation Updates
- Closes various issues including nested row widths and element positions.
- Special thanks to @bebaps for helping call out some issues. 

## [2.0.2] - 2016-12-17
## Fixes
- Fixes small columns from growing on small breakpoints

## [2.0.1] - 2016-11-10
## Updates
- Updates readme

## [2.0.0] - 2016-11-10
## Released & Added
- Releases all features in 2.0.0 and adds documentation.

## [1.1.4] - 2016-06-10
## Fixed and Changed
- Fixed incorrect CSS Wildcard found in small breakpoint columns.

## [1.1.3] - 2016-06-07
## Fixed and Changed
- Fixed IE10/11 flexbox bug that caused columns to roll.

## [1.1.1] - 2016-04-23
## Fixed and Changed
- Fixed various open issues on GitHub - #21, #18, #14

## [1.1.0] - 2016-03-22
## Fixed and Changed
- Fixed various open issues on GitHub, adds column offset support and small column support, adds loops for `flex-basis` to minimize footprint.

## [1.0.0] - 2016-03-01
## Fixed and Changed
- Adds row override support. Fixes visibility classes to have important tags.

## [0.3.3] - 2016-01-31
## Fixed and Changed
- Fixes column overflow issues. Updates all references to the Git Repo to show new
username.

## [0.2.2] - 2016-01-08
### Changed
- How the width of columns are calculated. Columns were using `width` to set their
size and are now using the correct method of `flex-basis`;

## [0.2.1] - 2016-01-07
### Added
- Ability to make custom flex-basis columns using a class of `flex-basis-#`. The
value entered into the class name is converted into pixels using jQuery and added
to the element inline.
