// LOCALDEN ÜRÜNLERİ GETİR..

const getProducts = () => {
          const products = localStorage.getItem('products');  // ÜRÜNLERİ LOCALDEN AL..
          return products ? JSON.parse(products) : [];  // JSONDAN NESNEYE DÖNÜŞTÜR.
        };
 
// SEPETE ÜRÜN EKLE
        
        const addToCart = (productName) => {
          const cart = localStorage.getItem('cart');  // SEPETİ LOCALDEN AL..
          const currentCart = cart ? JSON.parse(cart) : [];  // SEPET DOLUYSA NESNEYE DÖNÜŞTÜR.
          
          const product = getProducts().find(p => p.name === productName);  // ÜRÜNÜ BUL..
          currentCart.push(product);  // SEPETE ÜRÜNÜ EKLE
          
          localStorage.setItem('cart', JSON.stringify(currentCart));   // MEVCUT GÜNCELLENEN SEPETİ KAYDET
        };

        // LİSTELE

        const displayProducts = () => {
          const productList = document.getElementById("product-list");
          const products = getProducts();
          productList.innerHTML = "";  // LİSTEYİ TEMİZLE
          for (let product of products) {
            productList.innerHTML += `<li>${product.name} - ${product.price} TL <button click="addToCart('${product.name}')">Sepete Ekle</button></li>`;
          }
        };