$(
    function(){
        
            
        
        $('.comments').click((event)=>{
           // commentForm.show()
            commentForm.show("slow", () => {
                $('#allPosts').hide()//attr('style',`display:none;`)
            })
            let thatComment = $(event.target)
            let pId = thatComment.attr('id')
            let comTitle = $('#inptTitle').val()
            
            
            let comBody = $('#inptBody').val()
            
            let commentor = $('#userName').val()
            
            $('#btnPost').click(()=>{
                /* $.post('/api/comments',{postId:pId,userName:commentor,cTitle:comTitle,cBody:comBody},(post)=>{
                    windo.alert('your comment posted')
                    $('#allPosts').show("fast",()=>{
                        commentForm.hide()
                    })
                }) */
                console.log(commentor)
                console.log(comBody)
                console.log(comTitle)
            })
            
            //console.log(postId)


        })
    }
)
/* $(document).ready(
    function () {
        let links = $('.navbar-nav .navlink')
        console.log(links)
    }
)

/* links.click(function(event){
    console.log(event.target)
}) */ 