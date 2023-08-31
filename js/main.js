class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks= document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
    }

    Clique(){
        this.mobileMenu.addEventListener('click',()=>{

        })
    }

    init(){
        if(this.mobileMenu){
            this.Clique()
        }

        return this
    }
}

let h = document.getElementById('hamburguer')
let filhos = [...document.getElementsByTagName('li')]

let n = document.getElementById('nav_list')
let existe = true

h.addEventListener('click',(evt)=>{

    n.classList.toggle('active')
    if(existe){
        filhos.map((el,i)=>{
            el.style.animation = `fade .5s ease forwards ${i/3+ 0.15}s`
        })
        existe=false
    }else{
        filhos.map((el)=>{
            el.style.animation = ''
        })
        existe=true
    }
   
})





