$(document).ready(
    function(){
        let table = $('#tableData');
        table.empty();
        $.get('/api',(data)=>{

            for(let person of data){
                let tableRow = table.append($('<tr></tr>'))
                tableRow.append($('<td>' + person.name + '</td>'))
                tableRow.append($('<td>' + person.age + '</td>'))
                tableRow.append($('<td>' + person.city + '</td>'))
            }
            
            
        })
    }
)