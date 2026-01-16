function getUser(){
    fetch("https://randomuser.me/api/?results=3")

    .then((raw) => raw.json())
    .then((data) => {
         const userDiv = document.querySelector(".users")
            userDiv.innerHTML = ""

           data.results.forEach(function(user){
            
           //card
            const card = document.createElement("div");
            card.className =
            "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full text-center";

            //innerflex
            const innerFlex = document.createElement("div")
            innerFlex.className = "flex items-center space-x-4"

            // Image
            const img = document.createElement("img");
            img.src = user.picture.large;
            img.alt = "User";
            img.className =
            "w-16 h-16 rounded-full object-cover border-2 border-gray-700";

            const textBox = document.createElement("div")

            // Name
            const name = document.createElement("h2");
            name.textContent = user.name.first + " " + user.name.last;
            name.className = " text-xl font-semibold text-gray-100";

            // Email
            const email = document.createElement("p");
            email.textContent = user.email;
            email.className = "text-gray-400 ";

        
            const badge = document.createElement("span")
            badge.className = "inline-block mt-2 px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full"
            badge.textContent = "Active"

 
            // Append elements to card
        
            textBox.appendChild(name);
            textBox.appendChild(email);
            textBox.appendChild(badge)


            // Append card to container
            innerFlex.appendChild(img)
            innerFlex.appendChild(textBox)

            card.appendChild(innerFlex)
            userDiv.appendChild(card)



         


        })
    })
}


document.querySelector("#refreshBtn").addEventListener("click" , function(){
    getUser()
})
