window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("splash").style.opacity="0";

        setTimeout(()=>{
            document.getElementById("splash").style.display="none";
            document.getElementById("main-content").style.opacity="1";
        },1000);

    },2000);

});
