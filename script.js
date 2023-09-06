var w= document.documentElement.clientWidth || Window.innerWidth;

if(w<=768){
    var element = document.getElementsByClassName("mobile-carousel");
    for(var i=0;i<element.length;i++){
        element[i].classList.add("carousel-item");
        
    }
    var element1 = document.getElementById("desktop-carousel");
    element1.classList.remove("carousel-item");
    var element4 = document.getElementById("card-wrapper-id");
    element4.classList.remove("card-wrapper");
    console.log("myfunction mobile") ;

    var buttons=document.getElementsByClassName("slide-button")
    for(var i=0;i<buttons.length;i++){
        buttons[i].style.visibility="show";
        console.log("button");
    }
}

else{
    var element3 = document.getElementsByClassName("mobile-carousel");
    for(var i=0;i<element3.length;i++){
        element3[i].classList.remove("carousel-item");
        console.log("desktop");
    }
    var element2 = document.getElementById("desktop-carousel");
    element2.classList.add("carousel-item");
    var element5 = document.getElementById("card-wrapper-id");
    element5.classList.add("card-wrapper");

    var button=document.getElementsByClassName("slide-button")
    for(var i=0;i<button.length;i++){
        button[i].style.visibility="hidden";
        console.log("button");
    }
    
}