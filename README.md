# Тестовое для "ao-sputnik"

## React + TypeScript + Tailwind

Создал компонент ProductCard, который принимает следующие данные через props:

- Название товара (title)
- Страна происхождения (origin)
- Цена в копейках (price = 34900) и валюта (RUB, USD, EUR)
- Изображение товара (imageUrl)

Отобразил эти данные с корректным форматированием цены (через Intl.NumberFormat).

Компонент адаптивный (на ширине < 500px — в одну колонку).
