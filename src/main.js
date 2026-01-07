const ulEl = document.getElementById("productlist");
let productsArray = [];

for (let i = 1; i <= 50; i++) {
  productsArray.push("Product " + i);
}

//  display all products
// document.getElementById("productlist").innerHTML = productsArray;

//creating fragment
let fragment = document.createDocumentFragment();

for (let i = 0; i < productsArray.length; i++) {
  const product = productsArray[i];

  const li = document.createElement("li");
  li.innerText = product;
  li.classList.add("border", "border-gray-200", "text-center", "w-100");
  fragment.append(li);
}
console.time("renderfragment");
ulEl.appendChild(fragment);
console.timeEnd("renderfragment"); // end timer

console.time("directRender"); // start t
for (let i = 0; i < productsArray.length; i++) {
  const product = productsArray[i];

  const li = document.createElement("li");
  li.innerText = product;
  ulEl.appendChild(li);
}
console.timeEnd("directRender"); // end timer and log
