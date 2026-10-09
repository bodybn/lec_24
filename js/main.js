function value(){
    var dollar= document.getElementById("dollar").value;
    var result=document.getElementById("result");
    if(dollar==""){
        result.innerHTML="Enter data";
    }
    else if(isNaN(dollar)){
        result.innerHTML="Enter num please";

    }
    else if(dollar<=0){
        result.innerHTML="Enter real number";
    }
    else{
        result.innerHTML="it costs " + dollar*50+"$";
    }
    return false;
}