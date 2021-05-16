function fetchData(done){
    $.get('http://localhost:4234/api/product',(data)=>{
        console.log(data)
        done(data)
    })
}
function addProduct (name, manuf, price, complete) {
    $.post('/api/product', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        complete(data)
    })
}
function createCard(eachProduct){
    let eachCard = $(`<div class="card border-primary mx-auto my-2 col-md-4">
            <div class="card-body">
                    <h3 class="card-title">${eachProduct.name}</h3>
                    <h6 class="card-subtitle mb-2 text-muted">${eachProduct.manufacturer}</h6>
                    <br>
                <div class="row ">
                    <b class="col-md-6">Price:₹ ${eachProduct.price}</b>
                    <a href="#" class="btn btn-primary col-md-6">Add To Cart</a>
                </div>
            </div>
        </div>
    `)

    return eachCard
}


    