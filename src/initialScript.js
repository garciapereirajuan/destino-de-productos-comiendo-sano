const initialScript = (element) => {
    window.onscroll = () => {
        var nav=document.querySelector("#nav-bar");   
        var navSustituto=document.querySelector("#nav-sustituto");
        var btnVolver=document.querySelector("#btn-volver");
        
        if(window.scrollY>137.5 && element !== "destroy"){
            nav.style.position="fixed";
            nav.className="nav-bar flotante";
            navSustituto.style.display="block";
            btnVolver.style.display="block";
        }
        if(window.scrollY<140 && element !== "destroy"){
            nav.style.position="relative";
            nav.className="nav-bar";
            navSustituto.style.display="none";
            btnVolver.style.display="none";
        }
    }

}

export default initialScript;