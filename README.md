[![NPM Downloads](https://img.shields.io/npm/v/@aisa-it/aiplan-api-ts)](https://www.npmjs.com/package/@aisa-it/aiplan-api-ts) [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![en](https://img.shields.io/badge/README-en-green.svg)](https://github.com/aisa-it/aiplan-api-ts/blob/main/README.md)
[![ru](https://img.shields.io/badge/README-ru-green.svg)](https://github.com/aisa-it/aiplan-api-ts/blob/main/README.ru.md)

# Aiplan API

Automatically generated API access library for AIPlan.

## 📦 Installation

```bash
npm install @aisa-it/aiplan-api-ts
# или
yarn add @aisa-it/aiplan-api-ts
```

## 🔧 Usage

### Client Initialization

```javascript
import { Users } from '@aisa-it/aiplan-api-ts/src/Users'

const usersApi = new Users({ baseURL: 'https://domain.com' }) // explicit URL specification for requests
// или
const usersApi = new Users() // requests will be sent to the same address where the application is hosted
```

When using the second initialization method (without explicit baseURL), API requests will be sent to the same origin where the application is hosted. During local development, this typically means requests will be directed to `localhost:9000` (or your local dev server port), which may not be the intended API endpoint.

To resolve this, you need to configure a proxy that will redirect API requests to the correct backend server during development.

quasar.config.js
```javascript
    devServer: {
      proxy: {
        '/api': {
          target: 'https://domain.com',
          changeOrigin: true,
        },
      },
    },
```

### Request Example

```javascript
import { DtoUser } from '@aisa-it/aiplan-api/data-contracts'

async function getUserInfo(): Promise<DtoUser> {
    try {
        const data = await usersApi.getCurrentUser()
        console.log('userInfo:', data)
    } catch (error) {
        console.error('Error:', error)
    }
}
```

## 🚀 Releasing a New Package Version

`yarn version` will automatically increment the version, create a commit, and tag it with the current version.

```
yarn version --minor
git push
git push --tags
```

### Versioning Rules

-   **major** - Global changes that are completely incompatible with the previous API
-   **minor** - Regular updates to the current API. The AIPlan build automatically increments the version number.
-   **patch** - Minor fixes

## 📜 License

This project is distributed under the MPL-2.0 license. See the LICENSE file for more information.