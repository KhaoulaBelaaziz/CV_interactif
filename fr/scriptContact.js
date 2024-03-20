function afficherEmail(nom, entreprise, email) {
    let mailto = `mailto:mathis.schultz@centrale-med.fr?subject=Offre d'emploi&body=Bonjour, je suis ${nom} de l'entreprise ${entreprise} et je suis intéressé par ton profil pour une mission. Tu peux me recontacter pour en savoir plus à l'adresse ${email}`
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
