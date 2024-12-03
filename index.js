const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const submitButton = document.getElementById("button");

submitButton.addEventListener("click", async () => {

    const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const age = document.getElementById("age").value;
const gender = document.getElementById("gender").value;
const submitButton = document.getElementById("button").value;



    console.log("Added successfully")
    const response = await fetch("http://localhost:8000/add-user" , {
        
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({firstName, lastName, email, password, age, gender})
    })

    const result = await response.text(); // Assuming the server sends plain text response
    

});
