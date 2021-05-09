$(document).ready(
    function(){
        let table = $('#tableData');
        table.empty();
        $.get('/api',(data)=>{
            let mainFeildes=table.append($('<tr></tr>'));
            mainFeildes.append($('<th>Name</th>'));
            mainFeildes.append($('<th>Age</th>'));
            mainFeildes.append($('<th>City</th>'));
            console.log(data)


            for(let i=0;i<data.length;i++){
                let tableRow = table.append($('<tr></tr>'))
                tableRow.append($('<td>' + data[i].name + '</td>'))
                tableRow.append($('<td>' + data[i].age + '</td>'))
                tableRow.append($('<td>' + data[i].city + '</td>'))
            }

            /*for(let person of data){
                let tableRow = table.append($('<tr></tr>'))
                tableRow.append($('<td>' + person.name + '</td>'))
                tableRow.append($('<td>' + person.age + '</td>'))
                tableRow.append($('<td>' + person.city + '</td>'))
            }*/
            
            
        })
    }
)