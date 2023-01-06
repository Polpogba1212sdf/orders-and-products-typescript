# orders-and-products-typescript

In this application you can manage orders and products of your shop. You be able to navigate between pages in left 
navigation sidebar.
    In top part of the page are showed the current date and counter of active sessions of application.
    In main part of app you have opportunity to manage by orders and products. On orders page you see the list of all 
orders with functionality orders deleting via confirm popup. Also, you can see the list of the product of some order by 
clicking on it.
    On the product page you can see list of all products and filter products by type.


Steps to install the application:

## 1) Create .eslintrc.js file in the project root
````
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
````

## 2) Install modules and run client
```
cd client
npm install
npm run serve
```

## 3) Install modules and run server
```
cd server
npm install
node index
```
