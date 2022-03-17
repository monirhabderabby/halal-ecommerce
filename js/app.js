fetch("https://monirhabderabby.github.io/shoe-api/Shoe-API.json")
  .then((res) => res.json())
  .then((data) => {
    createCart(data);
    globalProduct = data;
  });

const sendId = (id) => {
  const container = document.getElementById("cart");
  for (let p of globalProduct) {
    if (p.id == id) {
      cart(p);
    }
  }
};

// Switch Tab
const switchTab = (id) => {
  if (id == "cart") {
    document.getElementById("display-products").style.display = "none";
  } else if (id == "shop") {
    document.getElementById("display-products").style.display = "flex";
  }
};

const createCart = (data) => {
  const container = document.getElementById("display-products");
  for (let product of data) {
    // console.log(product.id);
    const div = document.createElement("div");
    div.classList.add("col-lg-3");
    div.innerHTML = `
    <div class="content">
                        <div class="card-image-container">
                            <img src="${
                              product.image
                                ? product.image
                                : "images/products/shoes/shoe-1.png"
                            }" alt="imgage" class="card-img">
                        </div>
                        <h2 class="card-title">${product.name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <h3>${product.price}</h3>
                        <ul class="card-ul">
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star checked"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                        <button class="addToCart-btn" onclick="sendId('${
                          product.id
                        }')">Add To Cart</button>
                    </div>
    
    
    
    
    `;
    container.appendChild(div);
  }
};

// shopping cart code

const cart = (product) => {
    console.log(product);
  const container = document.getElementById("table");
  const tr = document.createElement("tr");
  tr.innerHTML = `
                <tr>
                    <td>
                        <div class="cart-info d-flex">
                            <img src="${product.image}" alt="">
                            <div>
                                <h6>${product.name}</h6>
                                <small>Price: $${product.price}</small>
                                <br>
                                <a href="">remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1"></td>
                    <td>$${product.price}</td>
                </tr>
    
    `
    container.appendChild(tr)
};
