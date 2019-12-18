$(document).ready(function(){
    <HEAD>
<SCRIPT language="JavaScript">
<!--hide

var password;

var pass1="cool";

password=prompt('Please enter your password to view this page!',' ');

if (password==pass1)
  alert('Password Correct! Click OK to enter!');
else
   {
    window.location="http://brebru.com/extrainfo.html";
    }

//-->
</SCRIPT>
</HEAD>
    
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
