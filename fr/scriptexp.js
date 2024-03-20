document.addEventListener('DOMContentLoaded', function () {
  const experiences = [
      {
          title: "Apprenti Conducteur de travaux en alternance",
          date: "Septembre 2022 à octobre 2024",
          company: "<a href='https://www.eurovia.fr'>Eurovia PACA</a> (13) <br> ",
          mainText: "Etude de marchées, budgétisation et négociation <br> Analyse des performances et rapports <br> Gestion d’un portefeuille de sous-traitants <br> Chef de chantier, gestion d’équipes et des procédés",
          images: [
          ]
      },
      {
        title: "Enseignant d'anglais au Japon",
        date: "Avril 2023 à Juillet 2024",
        company: "<a href='https://free-is.org/grade/'>Funabashi International School</a> (Tokyo, Japon) <br> ",
        mainText: "Professeur d’anglais durant 3 mois <br> Étude des méthodes managériales Japonaise <br> Découverte de la culture et de la langue : écrire, parler et savoir être",
        images: [
        ]
    },
    {
        title: "Manager évènementiel",
        date: "Mars 2022 à Mars 2023",
        company: "<a> Union Des Associations</a> (13) <br> ",
        mainText: "Superviseur des évènements Centraliens <br> Gestion de la planification <br> Participation aux commissions stratégiques",
        images: [
        ]
    },
    {
        title: "Responsable du Weekend d'Intégration",
        date: "Janvier 2022 à janvier 2023",
        company: "<a> Bureau Des Élèves</a> (13) <br> ",
        mainText: "Travail en équipe <br> Encadrement de 500 personnes",
        images: [
        ]
    },
  ];

  const experienceContainer = document.getElementById('experienceContainer');
  const prevExperienceBtn = document.getElementById('prevExperienceBtn');
  const nextExperienceBtn = document.getElementById('nextExperienceBtn');
  let currentIndex = 0;

  function showExperience(index) {
      if (index >= 0 && index < experiences.length) {
          const currentExperience = experiences[index];
          const experienceDiv = document.createElement('div');
          experienceDiv.className = 'experience';
          experienceDiv.innerHTML = `
              <h2>${currentExperience.title}</h2>
              <em>${currentExperience.date}, ${currentExperience.company}</em><br>
              <div class="detail">${currentExperience.mainText}</div>
              
              <!-- Pictures for the current experience -->
              <div class="picture-container">
                  ${currentExperience.images.map(image => `<div class="picture"><img src="${image}" alt="Experience Image"></div>`).join('')}
              </div>
          `;
          experienceContainer.innerHTML = '';
          experienceContainer.appendChild(experienceDiv);
      }
  }

  function showNextExperience() {
      currentIndex = (currentIndex + 1) % experiences.length;
      showExperience(currentIndex);
  }

  function showPrevExperience() {
      currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
      showExperience(currentIndex);
  }


  showExperience(currentIndex);


  nextExperienceBtn.addEventListener('click', showNextExperience);
  prevExperienceBtn.addEventListener('click', showPrevExperience);
});