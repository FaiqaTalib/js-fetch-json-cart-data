 async function datafetch() {
     let response = await fetch('https://dummyjson.com/carts', { method: 'get' });
     let data = await response.json();
     let record = data.carts
     console.log(record[0].products[0].title);



     document.getElementById('prodrow');
     prodrow.innerHTML = '';
     for (i = 0; i < record.length; i++) {
         prodrow.innerHTML += `
         <div class="card" style="width: 18rem;">
  <img src="${record[i].products[i].thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${record[i].products[i].title}</h5>
    <p class="card-text">Quantity: ${record[i].products[i].quantity}</p>
    <h6>$ ${record[i].products[i].total}</h6>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
         `
     }

 }

 datafetch()