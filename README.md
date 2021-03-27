# format-name

[![npm package](https://badge.fury.io/js/format-name.svg)](https://www.npmjs.org/package/format-name)
[![Dependency Status](https://david-dm.org/rosskhanas/format-name.svg)](https://david-dm.org/rosskhanas/format-name)
[![devDependency Status](https://david-dm.org/rosskhanas/format-name/dev-status.svg)](https://david-dm.org/rosskhanas/format-name#info=devDependencies)

Make correct first/last name combination among different languages including preference.

### Installation

```
yarn add format-name
```

### The Gist

```javascript
import formatName from "format-name";

formatName("Ross", "Khanas"); // Ross Khanas

formatName("台綸", "曾"); // 曾台綸
```

### License

MIT
