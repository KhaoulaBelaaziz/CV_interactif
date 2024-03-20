function afficherEmail(nom, entreprise, email) {
    let mailto = `mailto:mathis.schultz@centrale-med.fr?subject=Offre d'emploi&body=Hello, My name is ${nom} from the company ${entreprise} and I am interresseted in your profile for a mission, please contact me on this mail : ${email}`
    location.href = mailto
}

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let champNomPrenom = document.getElementById("nom")
    let NomPrenom = champNomPrenom.value

    let champEntreprise = document.getElementById("entreprise")
    let Entreprise = champEntreprise.value

    let champEmail = document.getElementById("email")
    let Email = champEmail.value

    afficherEmail(NomPrenom, Entreprise, Email)
    champNomPrenom.value = ''
    champEntreprise.value = ''
    champEmail.value = ''
})
