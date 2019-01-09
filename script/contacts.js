
window.onload=function(){
      document.getElementById("raport").style.display = "none";
   }

   function showContact(){ 
      document.getElementById("raport").style.display = "block";
   var name_text=  document.getElementById("name_text"); 
   var name=  document.getElementById("name").value; 
   name_text.innerText=name;

   var thema_text=  document.getElementById("thema_text"); 
   var thema=  document.getElementById("thema").value; 
   thema_text.innerText= thema;  

   var det_text=  document.getElementById("det_text"); 
   var det=  document.getElementById("det").value; 
   det_text.innerText= det;   

   var mail_text=  document.getElementById("mail_text"); 
   var mail=  document.getElementById("mail").value; 
   mail_text.innerText= mail;   


   }
  



    