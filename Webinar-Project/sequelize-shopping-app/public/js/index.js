$(document).ready(
    function(){
        let prodList = $('.productList')
        fetchData(function(productsArray){
            prodList.empty()
            for(let everyProd of productsArray){
                prodList.append(createCard(everyProd))
            }
        })
    }
)