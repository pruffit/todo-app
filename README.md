# ToDo-приложение с React, TypeScript и Vite

![Todo App Demo]

Полнофункциональное приложение для управления задачами с поддержкой темной темы, фильтрацией и роутингом.

## Особенности

- 📝 Добавление, редактирование и удаление задач
- ✅ Отметка выполнения задач
- 🔍 Фильтрация задач (Все/Активные/Выполненные)
- 🗑️ Очистка выполненных задач
- 🌙 Переключение светлой/темной темы
- 📱 Адаптивный дизайн
- 🔄 Сохранение состояния в localStorage
- 🧭 Маршрутизация между страницами
- ✨ Плавные анимации и эффекты

## Технологии

- ⚛️ React 18
- 📘 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧩 shadcn/ui компоненты
- 🔗 React Router
- 🧪 Vitest + React Testing Library
- 🚦 ESLint + Prettier

## Установка и запуск

1. Клонировать репозиторий:

git clone https://github.com/pruffit/todo-app.git
Установить зависимости:

bash
cd todo-app
npm install
Запустить приложение:

bash
npm run start
Запустить тесты:

bash
npm run test
Собрать для продакшена:

bash
npm run build
Запустить собранную версию:

bash
npm run preview
Структура проекта
text
src/
├── app/  
│ ├── App.tsx
│ ├── main.tsx
│ └── routes.tsx
├── features/  
│ └── todo/  
│ ├── components/
│ ├── hooks/  
│ ├── pages/
│ ├── types/  
│ └── todo.test.tsx
└── shared/  
 ├── components/  
 ├── contexts/  
 └── hooks/

Тестирование
Приложение покрыто тестами

Запуск тестов:

bash
npm run test
Настройка
Тема
Нажмите на иконку солнца/луны в правом верхнем углу для переключения темы.

Фильтры
Используйте вкладки для фильтрации задач:

Все задачи

Только активные

Только выполненные

Очистка
Нажмите "Clear completed" для удаления всех выполненных задач.

Лицензия
Этот проект лицензирован по лицензии MIT - подробности см. в файле LICENSE.

text

## Дополнительные файлы

### .gitignore

Logs
logs
.log
npm-debug.log
yarn-debug.log*
yarn-error.log*
pnpm-debug.log\*

Runtime data
pids
_.pid
_.seed
\*.pid.lock

Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

Coverage directory used by tools like istanbul
coverage
\*.lcov

nyc test coverage
.nyc_output

Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

Bower dependency directory (https://bower.io/)
bower_components

node-waf configuration
.lock-wscript

Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

Dependency directories
node_modules/
jspm_packages/

Snowpack dependency directory (https://snowpack.dev/)
web_modules/

TypeScript cache
\*.tsbuildinfo

Optional npm cache directory
.npm

Optional eslint cache
.eslintcache

Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

Optional REPL history
.node_repl_history

Output of 'npm pack'
\*.tgz

Yarn Integrity file
.yarn-integrity

dotenv environment variables file
.env
.env.test
.env.production

parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

Next.js build output
.next
out

Nuxt.js build / generate output
.nuxt
dist

Gatsby files
.cache/

Comment in the public line in if your project uses Gatsby and not Next.js
https://nextjs.org/blog/next-9-1#public-directory-support
public
vuepress build output
.vuepress/dist

Serverless directories
.serverless/

FuseBox cache
.fusebox/

DynamoDB Local files
.dynamodb/

TernJS port file
.tern-port

Stores VSCode versions used for testing VSCode extensions
.vscode-test

Vite cache
.vite

Vitest cache
.vitest

yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.\*

text

### LICENSE

MIT License

Copyright (c) 2025 Kotlaev Danil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
