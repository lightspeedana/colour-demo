shrink = false;

function enlarge(id){
    if (shrink == true){
        divs = document.getElementsByClassName("hero")
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "block";
            divs[i].style.height = "20vh";
        }

        titles = document.getElementsByClassName("title")
        for (var j = 0; j < titles.length; j++) {
            titles[j].style.display = "block";
        }
        shrink = false;
    }

    else{
        divs = document.getElementsByClassName("hero")
        for (var i = 0; i < divs.length; i++) {
            if (i == id){
                divs[i].style.height = "100vh";
            }
            else{
                divs[i].style.display = "none";
            }
        }

        titles = document.getElementsByClassName("title")
        for (var j = 0; j < titles.length; j++) {
            titles[j].style.display = "none";
        }
        shrink = true;
    }
    
}