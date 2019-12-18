$(document).ready(function(){
function run(){
var password = prompt("Password Please");
if(password != 'codingmaster'){
document.body.innerHTML = '';
document.body.innerHTML = 'Password Failed! Reload to Renter Password';
}else{
alert('Success');
}
}
run();
    
    $("#list-items").html(localStorage.getItem("listItems"));
    
    $(".add-items").submit(function(event){
      
      event.preventDefault();
      
      var item = $("#todo-list-item").val();
      
      if (item){
        $("#list-items").append(
        "<li><input class='checkbox' type='checkbox' />" +
          item + " <a class='remove'>x</a><hr></li>"
        );
        
      localStorage.setItem("listItems", $("#list-items").html());
        $("#todo-list-item").val("");
        
        
      }
      else
        alert("Input box can't be empty");
      
    });
    
    
    $(document).on("change", ".checkbox", function(){
      if($(this).attr("checked")){
        $(this).removeAttr("checked");
      }
      else{
          $(this).attr("checked", "checked");
      }
      
      $(this).parent().toggleClass("completed");
      
      localStorage.setItem("listItem", $("#list-items").html());
      
    })
    
    $(document).on("click", ".remove", function (){
      $(this).parent().remove();
      localStorage.setItem("listItem", $("#list-items").html());
    });
  
  
  });
