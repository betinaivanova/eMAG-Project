window.onload = (function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

// SHOPPING CART

// var cart = [];
// function Items(name,price,count) {
//     this.name = name;
//     this.price = price;
//     this.count = count;
// }
// function addItemToCart(name,price,count) {
//     for(var prop in cart) {
//         if(cart[prop].name === name) {
//             cart[prop].count += count;
//             return;
//         }
//     }
//     var item = new Items(name,price,count);
//     cart.push(item);
//     saveCart();
// }
// function removeItemFromCart(name) {
//     for(var prop in cart) {
//         if(cart[prop].name === name) {
//             cart[prop].count --;
//             if(cart[prop].count === 0) {
//                 cart.splice(prop,1);
//             }
//             break;
//         }
//     }
//     saveCart();
// }
// function removeItemFromCartAll(name) {
//     for(var prop in cart) {
//         if(cart[prop].name === name) {
//             cart.splice(prop,1);
//             break;
//         }
//     }
//     saveCart();
// }
// function clearCart() {
//     cart = [];
//     saveCart();
// }
// function countCart() {
//     var totalCount = 0;
//     for(var prop in cart) {
//         totalCount += cart[prop].count;
//     }
//     return totalCount;
// }
// //return total cost
// function totalCart() {
//     var totalCost = 0;
//     for(var prop in cart) {
//         totalCost += cart[prop].price;
//     }
//     return totalCost;
// }
// function listCart() {
//     var cartCopy = [];
//     for(var prop in cart) {
//         var item = cart[prop];
//         var itemCopy = {};
//         for(var p in item) {
//             itemCopy[p] = item[p]
//         }
//         cartCopy.push(itemCopy);
//     }
// }
// function saveCart() {
//     localStorage.setItem("shoppingCart", JSON.stringify(cart));
// }
// function loadCart() {
//     cart = JSON.parse(localStorage.getItem('shoppingCart'));
// }
// addItemToCart("Apple",1.22,1);
// console.log(cart);
});