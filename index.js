const copybtn = document.querySelector("button");
const textarea = document.querySelector("textarea");



copybtn.addEventListener("click" , function(){
    textarea.select()
    let textvalue = textarea.value;

    navigator.clipboard.writeText(textvalue);
    copybtn.innerText='کپی شد';
    copybtn.style.backgroundColor=" #03a9f4";

    setTimeout(() => {
        copybtn.innerHTML="کپی کن";
        copybtn.style.backgroundColor="  #83e5fc";
    }, 1000);
})
console.log(navigator);

