        var cart = [];
        function Items(name,price,count,img) {
            this.name = name;
            this.price = price;
            this.count = count;
            this.img = img;
        }
        function addItemToCart(name,price,count,img) {
            for(var prop in cart) {
                if(cart[prop].name === name) {
                    cart[prop].count += count;
                    return;
                }
            }
            var item = new Items(name,price,count,img);
            cart.push(item);
            saveCart();
        }
        function removeItemFromCart(name) {
            for(var prop in cart) {
                if(cart[prop].name === name) {
                    cart[prop].count --;
                    if(cart[prop].count === 0) {
                        cart.splice(prop,1);
                    }
                    break;
                }
            }
            saveCart();
        }
        function removeItemFromCartAll(name) {
            for(var prop in cart) {
                if(cart[prop].name === name) {
                    cart.splice(prop,1);
                    break;
                }
            }
            saveCart();
        }
        function clearCart() {
            cart = [];
            saveCart();
        }
        function countCart() {
            var totalCount = 0;
            for(var prop in cart) {
                totalCount += cart[prop].count;
            }
            return totalCount;
        }
//return total cost

        function totalCart() {
            var totalCost = 0;
            for(var prop in cart) {
                totalCost += Number(cart[prop].price);
            }
            return totalCost;
        }
        function totalPrice() {
            var totalPrice = 1;
            for(var prop in cart) {
                totalPrice *= Number(cart[prop].price) * Number(cart[prop].count);
            }
            return totalPrice;
        }
        function listCart() {
            var cartCopy = [];
            for(var prop in cart) {
                var item = cart[prop];
                var itemCopy = {};
                for(var p in item) {
                    itemCopy[p] = item[p]
                }
                cartCopy.push(itemCopy);
            }
        }
        function saveCart() {
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
        }
        function loadCart() {
            cart = JSON.parse(localStorage.getItem('shoppingCart'));
        }
      
        var allAddBtn = document.querySelectorAll('.add-btn');
        for(var index = 0; index < allAddBtn.length; index++) {
            allAddBtn[index].addEventListener('click',a);
        }
        function a(event) {
            event.preventDefault();
            var name = event.target.getAttribute("data-name");
            var price = event.target.getAttribute("data-price");
            var img = event.target.getAttribute("data-img");
            console.log(img);
            addItemToCart(name,price,1,img);
            displayCart();
        }
        function displayCart() {
            var prod = JSON.parse(localStorage.getItem('shoppingCart'));
            var cartArray = prod;
            console.log(prod);
            for(i in cartArray) {
                var li = document.createElement('li');
                var images = document.createElement('img');
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var span3 = document.createElement('span');
                var span4 = document.createElement('span');
                var span5 = document.createElement('span');
                span1.textContent = cartArray[i].name;
                span2.textContent = cartArray[i].price;
                span3.textContent = cartArray[i].count;
                images.src = cartArray[i].img;
                li.appendChild(images);
                li.appendChild(span1);
                li.appendChild(span2);
                li.appendChild(span3);
                var t = document.getElementById('total-cart');
                var p = document.getElementById('total-product');
              
                
            
                t.textContent = "Общо:" + totalCart();  
                p.textContent = "Брой продукти:" + countCart(); 
               
                
            }
            var sh = document.getElementById('shop');
           
            sh.appendChild(li);
            
            
            
    
              
        }
      
       