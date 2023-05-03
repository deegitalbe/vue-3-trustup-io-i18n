# vue-3-trustup-io-i18n 🈲

## Installation

```bash

    yarn add @deegital/vue-3-trustup-io-i18n

```

## Usage/ Exemples

```javascript
import { i18n } from "@deegital/vue-3-trustup-io-i18n";

createApp(App).use(i18n).mount("#app");
```

It will return "Chantier"

```html
<div class="text-2xl text-gray-600 font-thin">{{ $t("apps.worksite") }}</div>
```

---

## Initialization

```shell
./cli bootstrap
```

## Usage

### Start dev server

```shell
./cli start
```

### Stop dev server

```shell
./cli stop
```

### Yarn

```shell
./cli yarn install
```

### Publish versions

```shell
./cli version patch
```
