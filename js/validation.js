

function validate(){
    var name= document.getElementById('name');
    var nameId = document.getElementById('name-id');
    var number = document.getElementById('number');
    var numberId = document.getElementById('number-id');
    var email = document.getElementById('email');
  
    let regxNum = /^[6-9][0-9]{9}$/;
    if(regxNum.test(number.value)){
        
        numberId.innerText = "";
        
    }else{
        
        numberId.innerText = "'Invalid'";
        numberId.style.color = 'red';
        return false;
    }
}