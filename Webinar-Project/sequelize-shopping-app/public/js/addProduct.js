$(
    function(){
        let btnAddProduct = $('#btnAddProduct')
        let inputProdName = $('#inputProdName')
        let inputProdManf = $('#inputProdManf')
        let inputProdPrice = $('#inputProdPrice')
        btnAddProduct.click(function(){
            let prodName = inputProdName.val()
            let prodManf = inputProdManf.val()
            let prodPrice = inputProdPrice.val()
            addProduct(prodName, prodManf, prodPrice,function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            })
            
            
        })
    }
)