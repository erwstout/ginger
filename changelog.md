# Ginger Change Log #
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.2] - 2016-01-08
### Changed
- How the width of columns are calculated. Columns were using `width` to set their
size and are now using the correct method of `flex-basis`;

## [0.2.1] - 2016-01-07
### Added
- Ability to make custom flex-basis columns using a class of `flex-basis-#`. The
value entered into the class name is converted into pixels using jQuery and added
to the element inline.
