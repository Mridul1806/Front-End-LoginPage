function myfn(){
    var x=document.getElementById("msg");
    x.className="show";
    setTimeout(function(){x.className=x.className.replace("show","");},3000);
}
function validateForm(){
    var w=document.getElementById("name").value;
    var x=document.getElementById("email").value;
    var y=document.getElementById("pno").value;
    var z=document.getElementById("password").value;
    var letters = /^[A-Za-z]+$/;
    if(w==""||x==""||y==""||z=="")
    {
        alert("Field can't be empty");
    }
    else if(!w.match(letters))
    {
        alert('Please input alphabet characters only');
    }
    else if(y<9&&y>11)
    {
        alert("Phone no invalid");
    }
    else if(z.length<8){
        alert("Password too short");
    }

}
function validateform1()
{
    var x=document.getElementById("pass").value;
    if(x=="")
    {
        alert("Field can't be empty");
    }
    else if(x.length<8)
    {
        alert("Wrong Password");
    }
}