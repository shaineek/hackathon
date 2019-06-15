$(document).ready(function(){
    if(window.localStorage.getItem('authToken')==null){
        window.location.replace('./index.html')
    }

    // $("#logout").click(function(){
    //     window.localStorage.removeItem('authToken');
    //     window.location.replace('./index.html')
    // })
    var data=''
    $.ajax({
        type:'GET',
        // data:JSON.stringify(data),
        contentType:'application/json',
        url:`http://localhost:3000/question/category/${window.localStorage.getItem('categoryId')}`,
        success:function(res){
             data=res
             
             let no_ques=data.length
             //console.log(no_ques)
             var index=0;
             //console.log(data[index])
             //console.log(data[index].ques)
             $('#q_id').html(data[index].ques)
             $('#option1').html(data[index].answers[0].answer)
             $('#option2').html(data[index].answers[1].answer)
             $('#option3').html(data[index].answers[2].answer)
             $('#option4').html(data[index].answers[3].answer)

            //  var radiovalue=$("input[name='q_answer']:checked").val();
            //  console.log(radiovalue)

            
            var correct=0
            var incorrect=0
            $("#option1").click(function(){
               
                // console.log(data[index].answers[0].is_right==true)
                if(data[index].answers[0].is_right==true){
                    correct+=1;
                    console.log(correct)
                }
                else{
                    incorrect+=1;
                    console.log(incorrect)
                }
                
            })
            $("#option2").click(function(){
               
                if(data[index].answers[1].is_right==true){
                    correct+=1;
                    console.log(correct)
                }
                else{
                    incorrect+=1;
                    console.log(incorrect)
                }
                
            })

            $("#option3").click(function(){
              
                if(data[index].answers[2].is_right==true){
                    correct+=1;
                    console.log(correct)
                }
                else{
                    incorrect+=1;
                    console.log(incorrect)
                }
                
            })

            $("#option4").click(function(){
               
                if(data[index].answers[3].is_right==true){
                    correct+=1;
                    console.log(correct)
                }
                else{
                    incorrect+=1;
                    console.log(incorrect)
                }
                
            })

            $("#next_ques").click(function(){
                index++;
                if(index<no_ques){
                // console.log('dcdc',index);
                $("#myModal").css("display", "none");
                $('#q_id').html(data[index].ques)
                $('#option1').html(data[index].answers[0].answer)
                $('#option2').html(data[index].answers[1].answer)
                $('#option3').html(data[index].answers[2].answer)
                $('#option4').html(data[index].answers[3].answer)
                console.log('index',index)
                }
                else{
                    console.log('ds',index)
                    window.localStorage.setItem('correct',correct)
                    window.localStorage.setItem('incorrect',incorrect);
                    var scr= (correct/(correct+incorrect))*100
                    console.log(scr)
                   var scorecard={}
                   scorecard.category_id=data[0].category_id
                   scorecard.category_name=window.localStorage.getItem('categoryName');
                   scorecard.username=window.localStorage.getItem('username');
                   scorecard.correct=correct;
                   scorecard.incorrect=incorrect;
                   scorecard.score=scr
                   console.log(scr);
                   console.log(JSON.stringify(scorecard))
                    $.ajax({
                        type:'POST',
                        data:JSON.stringify(scorecard),
                        contentType:'application/json',
                        url:'http://localhost:3000/scorecard',
                        success:function(res){
                            const data=res
                            console.log(data)
                           
            
                             
                           
                           
                        }
                    })
                    window.location.replace('./result.html')
                }
            })


             


        }

    })
   


})