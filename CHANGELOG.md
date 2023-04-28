# Change Log

All notable changes to the slim-select-prefabs library will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.2.2] - 2023-04-27

### Fixed
- Replaced settings constant by repeating settings code for each function. Not as efficient but the slim-select documentation has not been updated for version 2 yet so until I know what settings have changed I am not comfortable using them.
- Class added to contentLocation `div` for consistent styling.

## [2.2.1] - 2023-04-27

### Changed
- Search highlighting added to all dropdowns
- Search placeholder added to all dropdowns
- Search text added to all dropdowns
- Drpodown placeholder added to all dropdowns

### Fixed
- Changes to slim-select required rewrites of `ddlClientInitialise()` and `ddlClientContactInitialise()` to redraw them on `select` element updates.

## [2.1.1] - 2023-04-21

### Added
- Added small demo to project

### Changed
- Compilation is now done using babel and gulp, rather than just TypeScript compiling.

### Fixed
- Added default export

### Updated
- Updated slim-select version to 2.4.5
- Updated typescript version to 5.0.4
- Updated webpack version to 5.88.0

## [2.0.1] - 2023-04-20

### Added
- Added `allowDeselect` to all dropdown lists

## [2.0.0] - 2023-01-31

### Added
- Added webpack to compilation process.

### Fixed
- Removed `private` from package.json so it can be published.

## [1.0.9] - 2023-01-18

### Added
- Added another generic method that uses class `ddlStyled` that adds some nice styling features.

### Updated
- Updated slim-select version to 2.4.1

## [1.0.8] - 2022-12-09

### Changed
- Added GitHub Release from CHANGELOG.md action

### Changed
- Updated README CDN links.

## [1.0.7] - 2022-03-16

### Changed
- Updated README CDN links.

## [1.0.2] - 2022-03-16

### Changed
- Updated README examples.

## [1.0.1] - 2022-03-16

### Changed
- Updated tsconfig options.

## [1.0.0] - 2022-03-16

### Added
- Initial release of the library.