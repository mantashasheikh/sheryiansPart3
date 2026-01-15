let coffee = {
    color : "dark",
    drink : function(){
        console.log("gut gut gut")
    }
}
let arabiataCoffee = Object.create(coffee)
arabiataCoffee.taste = "bitter"
arabiataCoffee.drink()