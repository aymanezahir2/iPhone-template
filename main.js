const images = document.querySelectorAll(".icon img");
const curr= document.querySelector(".img img");
images.forEach(function(item){
    item.addEventListener("click",function(){
        if(item.dataset.color == "gold"){
            document.body.style.backgroundColor ="var(--color-gold)"
            curr.setAttribute("src","/image/0.png")
            document.body.removeAttribute("class")
            document.body.classList.add("gold")
        }else  if(item.dataset.color == "gray"){
            document.body.style.backgroundColor ="var(--color-gray)"
            curr.setAttribute("src","/image/2.png")
            document.body.removeAttribute("class")
            document.body.classList.add("gold")
        }else  if(item.dataset.color == "white"){
            document.body.style.backgroundColor ="var(--color-black)"
            curr.setAttribute("src","/image/3.png")
            document.body.removeAttribute("class")
        }else if(item.dataset.color == "blue"){
            document.body.style.backgroundColor ="var(--color-blue)"
            curr.setAttribute("src","/image/1.png")
            document.body.removeAttribute("class")
            document.body.classList.add("gold")
        }else{
            document.body.style.backgroundColor ="var(--color-red)"
            curr.setAttribute("src","/image/4.png")
             document.body.removeAttribute("class")
        }

        if(document.body.classList.contains("gold")){
            document.getElementsByTagName("h2")[0].style.color="black"
            document.getElementsByTagName("p")[0].style.color="black"
            document.querySelectorAll("a").forEach(function(item){
                item.style.color="black"
            })
        }else{
            document.getElementsByTagName("h2")[0].style.color="white"
            document.getElementsByTagName("p")[0].style.color="white"
            document.querySelectorAll("a").forEach(function(item){
                item.style.color="white"
            })
        }
        
    })
})

console.log(document.body.style.backgroundColor=="#1f1f1f");