let count=0;
let err_msg=document.getElementById("error-msg");
let pElement=document.getElementById("p-tag");

function increment()
{
    err_msg.innerHTML="";
    pElement.innerHTML="Your Current Count is : "+(++count);
}


function decrement()
{
    if(count===0)
        {
           err_msg.innerHTML="Error : Cannot go below 0";
           return;
        }
    pElement=document.getElementById("p-tag");
    pElement.innerHTML="Your Current Count is : "+(--count);
}


function clearMe()
{
    pElement.innerHTML="Your Current Count is : 0";
    err_msg.innerHTML="";
    count=0;
}