let a = document.querySelector(".my-menu")
let open = false

a.addEventListener("click" , ()=>{
    open = !open
    if(open){
        document.querySelector(".my-nav-links").classList.add("my-nav-links-checked")
    }
    if(!open){
        document.querySelector(".my-nav-links").classList.remove("my-nav-links-checked")
    }
})