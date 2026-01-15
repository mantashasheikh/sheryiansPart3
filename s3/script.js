class CreatePencil{
    constructor(name, company, Prize, color){
        this.name = name
        this.company = company
        this.prize = prize
        this.color = color

    }
    erase(){
        document.body.querySelectorAll("h1").forEach((elm)=>{
            if(elm.style.color ===this.color){
                elm.remove()
            }
        })
    }
    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = text
        h1.style.color = this.color
        document.body.appendChild(h1)
    }
}
let p1 = new CreatePencil("natraj" , "natraj" , 10 , "black")
let p2 = new CreatePencil("apsara" , "apsara" , 15 , "blue")
