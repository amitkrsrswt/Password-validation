var pass=document.getElementById("password");
var confirm=document.getElementById("password1");
confirm.addEventListener("check")
function check(ele){
    if(ele.value.length>0){
        if(ele.value!=pass.value){
            document.getElementById("error").innerText=" password does not match";
        }else(ele.value==pass.value){
            document.getElementById("error").innerText=" password confirmed";

        }
    }

}