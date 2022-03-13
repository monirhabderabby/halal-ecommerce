const ID = [];
const products = [];

fetch('https://monirhabderabby.github.io/product-api/e-commerce%20product%20API%20-%20Sheet1.json')
.then(res => res.json())
.then(data => console.log(data))