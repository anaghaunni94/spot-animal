for (var i = 0;i < document.querySelectorAll(".box").length;i++) {
document.querySelectorAll(".box")[i].addEventListener("click",function() {

    if(this.innerHTML == "cat") {
        this.classList.add("first");  
        setTimeout(() => {
            this.classList.remove("first")
        }, 500);  
    }
    else if(this.innerHTML == "dog") {
        this.classList.add("second"); 
        setTimeout(() => {
            this.classList.remove("second")
        }, 500);    
    }
    else if(this.innerHTML == "elephant") {
        
        this.classList.add("third");
        setTimeout(() => {
            this.classList.remove("third")
        }, 500);     
    }
    else if(this.innerHTML == "tiger") {
        
       this.classList.add("fourth"); 
       setTimeout(() => {
        this.classList.remove("fourth")
    }, 500);    
    }
    else {
        
        this.classList.add("fifth"); 
        setTimeout(() => {
            this.classList.remove("fifth")
        }, 500);    
    }  
    
    });
}
      
 
     setTimeout(() => {
         text.classList.remove("first")
     }, 500);
 
        

    