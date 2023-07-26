# React basic practice

## Overview:

- This document provides information about Typescript practice.
- [Design](<https://www.figma.com/file/hzs1lkW5TzXMYaYb0L9AG4/Shoppe-(Community)?node-id=0%3A1>)

## Targets:

- Get familiar with and understand the power of TypeScript language in the specific and typed language in general
- Verify knowledge HTML, CSS, JS
- Apply Typescript knowledge to old basic React practice

## Information:

### Timeline:

- Estimate time: 4 days.
- Actual time:

### Technical:

- [HTML5](https://en.wikipedia.org/wiki/HTML5): is a markup language used for structuring and presenting content on the World Wide Web
- [CSS3](https://www.techopedia.com/definition/28243/cascading-style-sheets-level-3-css3): is the iteration of the CSS standard used in the styling and formatting of Web pages
- [ES6](https://www.geeksforgeeks.org/introduction-to-es6/): ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
- [React Hook](https://reactjs.org/docs/hooks-intro.html): a new addition in React 16.8. They let you use state and other React features without writing a class.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start): is a standard library for routing in React.
- [JSON server](https://www.digitalocean.com/community/tutorials/json-server): is a Node Module that you can use to create demo rest json web service in less than a minute. All you need is a JSON file for sample data.
- [Vite](https://vitejs.dev/guide): is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html): is a syntactic superset of JavaScript which adds static typing.
- Editor: Visual Studio Code.

### Development environment:

- Node: version 16.16.0
- pnpm: version 7.22.0
- Vite: version 4.3.9
- json-server: version 0.17.1
- typescript: version 5.0.2
- react: version 18.2.0

### Document:

- [Typescript practice requirements](https://docs.google.com/document/d/1ghmR-NehEdx49MhlZZmTat7NLppUaNjY7kwcWmVohpA/edit)
- [Typescript practice plan](https://docs.google.com/document/d/1eEoMCq6YlxOy0j4UsM0ZYMyARJFLJLFinR3nvrloGFE/edit)

### Convention:

- Branch name format: `<prefix>/short-desc`<br>
*Ex:* feat/header
- Commit format: `<type>[optional scope]: <description>`<br>
*Ex:* feat(header): add type for header
- Merge request format: `[Project] - Short desc [optional issue id]`<br>
*Ex:* [Typescript practice] - Add type for show list products #17
- Component's event handling functions: `on<Event name>`<br>
*Ex:* onChange, onEvent, onInput
- Variables color
  - Text: `--text-<name>`<br>
  *Ex:* --text-primary, --text-warning
  - Border: `--border-<name>`<br>
  *Ex:* --border-primary
  - Background: `--bg-<name>`<br>
  *Ex:* --bg-primary-100
  - Font weight: `--fw-<name>`<br>
  *Ex:* --fw-regular
  - Font size: `--fs-<name>`<br>
  *Ex:* --fs-xs
  - Font family: `--fm-<name>`<br>
  *Ex:* --fm-secondary 

### Main app features:

- User can login / logout / sign up
- Homepage
  - User can see list of products
  - User can see more products when click button load more
  - User can see number of products in cart on header (when add to cart)
  - User can search by name
  - User can sort product by:
    - Price: Lowest to Highest, Highest to Lowest
    - Name: A-Z
- Product details
  - User can see product details
  - Users can adjust the number of products they want to add
  - User can add products to cart
- Cart
  - User can show cart when click cart icon
  - User can delete cart item

## Getting started

### 1) Clone repo and checkout branch

- Step 1: Cloning the repo
  - HTTPS:
    ```
    $ git clone https://gitlab.asoft-python.com/minh.nguyenthuy/react-training.git
    ```
  - SSH:
    ```
    $ git clone git@gitlab.asoft-python.com:minh.nguyenthuy/react-training.git
    ```
- Step 2: Checkout to branch develop `git checkout typescript/practice`

### 2) Run server (Open new terminal tab)

- Step 1: Go to the folder server `cd data`
- Step 2: Install package `pnpm install`
- Step 3: Run server `pnpm run start-db`

### 3) Run application (Open new terminal tab)

- Step 1: Go to the folder react practice `cd typescript-practice`
- Step 2: Install package `pnpm install`
- Step 3: Run project `pnpm run dev`
- Step 4: Open `http://127.0.0.1:5173/` in your browser to see the Web application.
