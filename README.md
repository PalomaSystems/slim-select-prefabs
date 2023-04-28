![npm](https://img.shields.io/npm/v/slim-select-prefabs)
[![Release new version to NPMJS](https://github.com/kylescudder/slim-select-prefabs/actions/workflows/publish.yml/badge.svg)](https://github.com/kylescudder/slim-select-prefabs/actions/workflows/publish.yml)
[![Create new GitHub Release](https://github.com/kylescudder/slim-select-prefabs/actions/workflows/github_release.yml/badge.svg)](https://github.com/kylescudder/slim-select-prefabs/actions/workflows/github_release.yml)

# flatpickr-prefabs
A collection of slim-select prefabs

## Install
### NPM
`npm i slim-select-prefabs`
### CDN
`<script src="https://unpkg.com/slim-select-prefabs/dist/index.min.js"></script>`
`<link href="https://unpkg.com/slim-select-prefabs/dist/site.css"></link>`

## Usage
### Client
Add the class `ddlClientID` to your select element

**index.html**
```
<select id="ddlClientID" class="ddlClientID">
</select>
```
**index.js**
```
import { ddlClientInitialise } from 'slim-select-prefabs'

ddlClientInitialise()
```

### Client Contact
Add the class `ddlClientContactID` to your select element

**index.html**
```
<select id="ddlClientContactID" class="ddlClientContactID">
</select>
```
**index.js**
```
import { ddlClientContactInitialise } from 'slim-select-prefabs'

ddlClientContactInitialise()
```

### Log Contact Type
Add the class `ddlLogContactTypeID` to your select element

**index.html**
```
<select id="ddlLogContactTypeID" class="ddlLogContactTypeID">
</select>
```
**index.js**
```
import { ddlLogTypeInitialise } from 'slim-select-prefabs'

ddlLogTypeInitialise()
```

### Generic
Add the class `ddlGeneric` to your select element

**index.html**
```
<select id="ddlProducts" class="ddlGeneric">
</select>
```
**index.js**
```
import { ddlGenericInitialise } from 'slim-select-prefabs'

ddlGenericInitialise()
```
## Style
If you are using SCSS you can import the styles into your SCSS file with
```
@import "node_modules/slim-select-prefabs/dist/site.css";

```