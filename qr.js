const input = document.querySelector("#input");
const imgbox = document.querySelector(".img-box");
const qrimg = document.querySelector("#qrimg")


function generateQR(){

if(input.value.length > 0){
    qrimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;

imgbox.classList.add("img-show");


}else {
    input.classList.add("error");
setTimeout(()=>{
      input.classList.remove("error");
      input.style.border="1px solid red";
    
},1000);

}


}