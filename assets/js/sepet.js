// LOCALSTORAGE DEN SEPET VERİLERİNİ AL

const getCart = () => {
          const cart = localStorage.getItem('cart');
          return cart ? JSON.parse(cart) : [];   // JSONDAN NESNEYE DÖNÜŞTÜR.
        };
// SEPETİ LOCALE KAYDETTİM

        const setCart = (cart) => {
          localStorage.setItem('cart', JSON.stringify(cart)); // SEPETİ JSON OLARAK KAYDETTİM
        };
// SEPETİ ÜRÜN ÇIKARTAN FONK
        
        const removeFromCart = (productName) => {
          const cart = getCart();
          const newCart = cart.filter(p => p.name !== productName);
          setCart(newCart); // GÜNCELLENEN SEPETİ KAYDETTİM
          displayCart();
        };
    
// TOPLAM FİYAT HESAPLAMA FONK

        const calculateTotalPrice = () => {
          const cart = getCart();
          let totalPrice = 0;  // BAŞLANGIÇ FİYATI
          for (let product of cart) {   // SEPETTEKİ ÜRÜNLERİ DÖNDÜM
            totalPrice += product.price;
          }
          document.getElementById("total-price").innerHTML = totalPrice;
        };
    
        const displayCart = () => {
          const cartList = document.getElementById("cart-list");
          const cart = getCart();
          cartList.innerHTML = "";
          for (let product of cart) {
            cartList.innerHTML += `<li>${product.name} - ${product.price} TL <button click="removeFromCart('${product.name}')">Çıkar</button></li>`;
          }
          calculateTotalPrice();
        };