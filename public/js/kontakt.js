document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        let navn = document.querySelector("#navn").value
        let email = document.querySelector("#email").value
        let besked = document.querySelector("#besked").value
        if(navn.length < 2 || email.length < 2 || besked.length < 2){
            event.preventDefault();
        }

    })
})