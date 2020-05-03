# format-name

[![npm package](https://badge.fury.io/js/format-name.svg)](https://www.npmjs.org/package/format-name)
[![Dependency Status](https://david-dm.org/rtkhanas/format-name.svg)](https://david-dm.org/rtkhanas/format-name)
[![devDependency Status](https://david-dm.org/rtkhanas/format-name/dev-status.svg)](https://david-dm.org/rtkhanas/format-name#info=devDependencies)

Make correct first/last name combination among different languages including preference.

### Installation

```
yarn add format-name
```

### The Gist

```javascript
import formatName, { FIRST_LAST, LAST_FIRST } from 'format-name';

// different depending on a config
formatName('Ross', 'Khanas', FIRST_LAST); // Ross Khanas
formatName('Ross', 'Khanas', LAST_FIRST); // Khanas Ross

// last name is always first
formatName('台綸', '曾', FIRST_LAST); // 曾台綸
formatName('台綸', '曾', LAST_FIRST); // 曾台綸
```

### License

MIT
