$(document).ready(function(){
    $.ajax({
      url: "https://batman-api.sayna.space/questions",
      dataType: 'json',
      success:function(questions){
        console.log(questions[0]);
      },
      error:function(){
        console.log('impossible de se connecter');
      }
    });
});