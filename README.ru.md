[![NPM Downloads](https://img.shields.io/npm/v/@aisa-it/aiplan-api-ts)](https://www.npmjs.com/package/@aisa-it/aiplan-api-ts) [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![en](https://img.shields.io/badge/README-en-green.svg)](https://github.com/aisa-it/aiplan-api-ts/blob/main/README.md)
[![ru](https://img.shields.io/badge/README-ru-green.svg)](https://github.com/aisa-it/aiplan-api-ts/blob/main/README.ru.md)
# Aiplan API

Автоматически сгенерированная библиотека доступа к API АИПлана.

## 📦 Установка

```bash
npm install @aisa-it/aiplan-api-ts
# или
yarn add @aisa-it/aiplan-api-ts
```

## 🔧 Использование

### Инициализация клиента

```javascript
import { Users } from '@aisa-it/aiplan-api-ts/src/Users'

const usersApi = new Users({ baseURL: 'https://domain.com' }) // явное указание адреса для запросов
// или
const usersApi = new Users() // запросы будут идти на тот адрес, где расположено само приложение
```
При использовании второго способа могут возникать проблемы с локальной разработкой. Например, запросы будут уходить на localhost:9000
Чтобы исправить это нужно настроить прокси.
Пример прокси в Quasar(quasar.config.js)

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

### Пример запроса

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

## 🚀 Релиз новой версии пакета

`yarn version` повысит сам версию, сделает коммит и повесит тег текущей версии.

```
yarn version --minor
git push
git push --tags
```

### Правила версий

-   **major** - Глобальные изменения, полностью несовместимые с прошлым API
-   **minor** - Регулярные обновления текущего API. Сборка АИплана обновляет это число
-   **patch** - Мелкие косметические исправления

## 📜 Лицензия

Этот проект распространяется под лицензией MPL-2.0 См. файл LICENSE для получения дополнительной информации.
