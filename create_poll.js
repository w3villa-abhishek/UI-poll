$(document).ready(function(){
  
    var maxVal = localStorage.getItem("txtValue1");
    var fact = 180/maxVal;
    function setValue(_val){
      $('#counter').text(_val);
      $('#arrow').css({"transform":'rotate('+(_val*fact)+'deg)'});
    }; 
    
    $("#testParam").change(function(){
      
      var value = $(this).val(); 
      setValue(value);
    });  
    
  });

  function val() {
    document.getElementById('val').innerHTML = document.getElementById('rangeinput').value
  }

  function convertToBase64(el) {
    var file = el.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      localStorage.setItem("txtValue3", reader.result);  
    };
    reader.onerror = function (error) {
      // console.log('Error: '+error);
      localStorage.setItem("txtValue3", "//via.placeholder.com/200x200");  
    };
  }
  
  function getData()
{
    //gettting the values
    var question = document.getElementById("question").value;
    var rangeinput= document.getElementById("rangeinput").value; 
    var pickcolor= document.getElementById("pickcolor").value; 
    //saving the values in local storage
    localStorage.setItem("txtValue", question);
    localStorage.setItem("txtValue1", rangeinput);
    localStorage.setItem("txtValue2", pickcolor); 
    
}

document.getElementById("data").innerHTML=localStorage.getItem('txtValue');
document.getElementById("testParam").setAttribute("max",localStorage.getItem("txtValue1"));
document.getElementById('theme').style.backgroundColor = localStorage.getItem("txtValue2");
document.getElementById("data3").innerHTML=`<img src="${localStorage.getItem("txtValue3")}" />`;
