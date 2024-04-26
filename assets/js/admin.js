// LOCALDEN ÜRÜNLERİ GETİRİYOM

const getProducts = () => {
          const products = localStorage.getItem('products');
          return products ? JSON.parse(products) : [];   // BOŞ DEĞİLSE JSONDAN NESNEYE DÖNÜŞTÜRDÜM.
};

// LOCALE KAYDEDİYOM

          const setProducts = (products) => {
          localStorage.setItem('products', JSON.stringify(products));   // ÜRÜNLERİ JSON OLARAK KAYDETTİM.
};
    
        const addProduct = (name, price) => {
          const products = getProducts();
          products.push({ name, price });
          setProducts(products);
          displayProducts();
};

// BELİRLİ ÜRÜNÜ KALDIR.

        const removeProduct = (name) => {
          const products = getProducts().filter(p => p.name !== name);   // BELİRTİLEN ÜRÜNÜ ÇIKART
          setProducts(products);
          displayProducts();
};
    
        const displayProducts = () => {
          const productList = document.getElementById("product-list");
          const products = getProducts();
          productList.innerHTML = "";
          for (let product of products) {
            productList.innerHTML += `<li>${product.name} - ${product.price} TL <button click="removeProduct('${product.name}')">Sil</button></li>`;
          }
};