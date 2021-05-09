$(document).ready(
    function(){
        let inptName = $('#inptName')
        let inptAge = $('#inptAge')
        let inptCity = $('#inptCity')
        let btnAddPerson = $('#btnAddPerson')

        btnAddPerson.click(
            function(){
                let nameVal = inptName.val()
                let ageVal = inptAge.val()
                let cityVal = inptCity.val()

                $.post('/api',{name:nameVal, age:ageVal, city:cityVal},(data)=>{
                    console.log('entered data into the database')

                })
                let msg = "Data Entered ✔️";
                $(".success-messages").text(msg).fadeIn().delay(2000).fadeOut("slow");
                $('h1').siblings($('<a>Check Details</a>').attr('href','http://localhost:4244/public'))

                

            }
        )
    }
)