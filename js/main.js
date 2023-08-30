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
let n = document.getElementById('nav_list')

h.addEventListener('click',(evt)=>{
    n.style.classList.toggle('active')
})


