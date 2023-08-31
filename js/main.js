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
let linhas = [...document.querySelectorAll('#hamburguer div')]

h.addEventListener('click',(evt)=>{

    n.classList.toggle('active')
    if(existe){
        filhos.map((el,i)=>{
            el.style.animation = `fade .5s ease forwards ${i/4+ 0.15}s`
        })

        linhas[0].style.transform = 'rotate(-45deg) translate(-8px,9px)'
        linhas[1].style.opacity = '0'
        linhas[2].style.transform = 'rotate(45deg) translate(-5px,-7px)'
        existe=false
    }else{
        filhos.map((el)=>{
            el.style.animation = ''
        })
        linhas[0].style.transform = ''
        linhas[1].style.opacity = '1'
        linhas[2].style.transform = ''
        existe=true
    }
   
})





