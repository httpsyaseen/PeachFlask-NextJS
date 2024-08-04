"use client";

export function getCartItem() {
  const cart = localStorage.getItem("cart");
}

// export function addItem(item){
//     const cart = localStorage.getItem("cart");
//     cart=JSON.parse(cart);
//     cart.items.map((product,i,arr)=>{
//         if(item.id===product.id){
//             product.quantity+=1;

//         }
//     })
// }
