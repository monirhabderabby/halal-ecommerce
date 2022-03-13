const ID = [];
const products = [];

fetch('https://monirhabderabby.github.io/product-api/e-commerce%20product%20API%20-%20Sheet1.json')
.then(res => res.json())
.then(data => divide(data))

const divide = products =>{
    for(let p of products){
        products.push(p)
    }
    createCard(products)
}

const createCard = product =>{
    const container = document.getElementById('display-products');
    for(let p of product){
        console.log(p);
    }
    
    // create card
    const div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.innerHTML = `
    <div class="content">
                        <div class="card-image-container">
                            <img src="images/products/shoe/shoe1.jpg" alt="imgage" class="card-img">
                        </div>
                        <h2 class="card-title">Nike</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <h3>$10.00</h3>
                        <ul class="card-ul">
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                        <button class="addToCart-btn">Add To Cart</button>
                    </div>
    
    
    `
    container.appendChild(div)
}

createCard(products)