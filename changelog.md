# Ginger Change Log #
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

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
