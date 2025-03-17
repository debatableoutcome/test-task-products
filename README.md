# Тестовое задание Vue/Nuxt

Данный проект представляет собой реализацию страницы "Товары и услуги" с адаптивным дизайном, JWT-авторизацией и использованием современных подходов к разработке на Vue 3 и Nuxt 3.

## Реализованная функциональность

- Адаптивный дизайн (мобильная версия до 960px, десктопная от 960px)
- JWT-авторизация на странице /login
- Защищенный роут /products
- Вывод данных о компании, полученных через Nuxt Server Routes
- Компонентная архитектура с использованием Composition API

## Технологический стек

- Vue 3 / Nuxt 3
- TypeScript
- Vuetify 3
- Composables для определения устройства
- ESLint и Prettier для форматирования кода
- JWT-авторизация

## Настройка проекта

Установите зависимости:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Запуск для разработки

Запустите сервер разработки на `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
```

## Сборка для продакшена

Соберите приложение для продакшена:

```bash
# npm
npm run build

# yarn
yarn build

# pnpm
pnpm build
```

Локальный предпросмотр продакшен-сборки:

```bash
# npm
npm run preview

# yarn
yarn preview

# pnpm
pnpm preview
```

## Авторизация

Для авторизации используйте следующие учетные данные:

- Логин: `admin`
- Пароль: `secret`

## Структура проекта

```
├── components/         # UI компоненты
│   ├── AgentCard.vue   # Карточка агента
│   ├── AgentsList.vue  # Список агентов
│   ├── CategorySelect.vue  # Селектор категорий
│   ├── CompanyHeader.vue   # Хедер компании
│   ├── CompanyInfo.vue     # Информация о компании
│   ├── ProductCard.vue     # Карточка товара
│   ├── ProductsGallery.vue # Галерея товаров
│   └── ...
├── composables/        # Переиспользуемая логика
│   ├── useAuth.ts      # Логика авторизации
│   └── useDevice.ts    # Определение устройства
├── layouts/            # Шаблоны страниц
├── pages/              # Страницы приложения
│   ├── index.vue       # Главная страница
│   ├── login.vue       # Страница авторизации
│   └── products.vue    # Страница товаров
├── server/             # Серверная логика
│   └── routes/         # API роуты
├── middleware/         # Промежуточные обработчики
│   ├── auth.ts         # Проверка авторизации
│   └── redirect.ts     # Редирект с главной
└── ...
```

## Известные ограничения и дальнейшие улучшения

- Для продакшен-версии рекомендуется добавить обработку ошибок API
- Можно расширить функциональность добавлением сортировки и пагинации товаров
- В будущем планируется добавление юнит-тестов с использованием Vitest

## Дизайн

Дизайн реализован на основе [макета в Figma](https://www.figma.com/file/SjWd29tkFK4TzGbZkthn6j/Front-Test-2024?node-id=3%3A638&mode=dev)
