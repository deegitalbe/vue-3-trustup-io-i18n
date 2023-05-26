# vue-3-trustup-io-i18n 🈲

## Installation

```bash

    yarn add @deegital/vue-3-trustup-io-i18n

```

## Usage/ Exemples

In your main.ts

```javascript
import { translationPlugin } from "./lib";

const app = createApp(App);

app.use(translationPlugin, { appName: import.meta.env.VITE_APP_NAME });

app.mount("#app");
```

It will return "Chantier"

```html
<div class="text-2xl text-gray-600 font-thin">{{ $t("apps.worksite") }}</div>
```

# You can use the composable and the plugin

```html
<div>{{ $trustupT.isLoading }}</div>
```

OR

```javascript
import { useTranslation } from "./lib";

const translation = useTranslation();
```

---

## Development

```shell
./cli bootstrap #bootstrap project
./cli yarn install #install dependencies
./cli start #start project
./cli stop #stop project
./cli restart  #restart project
```
