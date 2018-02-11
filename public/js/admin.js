document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#opret").addEventListener("click", (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/adminopret", {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            "body": `{"navn":"${document.querySelector("#navn").value}",
            "beskrivelse":"${document.querySelector("#beskrivelse").value}",
            "billede":"${document.querySelector("#billede").value}"}`,
            'mode': 'cors',
            'cache': 'default'
        })
    })
    let slet = document.querySelectorAll(".slet");
    slet.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            fetch("http://localhost:3000/adminslet/" + element.dataset.id, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'mode': 'cors',
                'cache': 'default'
            })
        })
    })
    let redigere = document.querySelectorAll(".redigere");
    redigere.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            fetch("http://localhost:3000/adminredigere/" + element.dataset.id, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                "body": `{"navn":"${document.querySelector("#navn2").value}",
                    "beskrivelse":"${document.querySelector("#beskrivelse2").value}",
                    "billede":"${document.querySelector("#billede2").value}"}`,
                'mode': 'cors',
                'cache': 'default'
            })
        })
    })
})