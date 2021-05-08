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

            }
        )
    }
)