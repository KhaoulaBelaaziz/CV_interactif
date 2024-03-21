document.addEventListener('DOMContentLoaded', function () {
  const experiences = [
      {
          title: "Présidente du Club AIAC Great Debaters ",
          date: "2021/2022",
          company: "<a href='https://facebook.com/gdbaiac?locale=fr_FR'>The Great Debators AIAC</a>  <br> ",
          mainText: "Passionnée par le monde des débats, j'ai cherché à partager cette passion avec les nouveaux membres de notre communauté en mettant en place et en dirigeant des échanges inter-écoles.",
          images: [
          ]
      },
      {
        title: "Membre du Club Paradisiers",
        date: "2021/2022",
        company: "<a href='https://www.facebook.com/paradisiers?locale=fr_FR'>Les Paradisiers de l'AIAC </a> <br> ",
        mainText: "Organiser une caravane humanitaire (réaménagement d’une école primaire).",
        images: [
        ]
    },
    {
        title: "Membre du bureau du Club AIAC Animal Aid",
        date: "2021/2022",
        company: "<a href='https://www.facebook.com/profile.php?id=100081960567983&locale=fr_FR'>AIAC Animal Aid</a> <br>",
        mainText: "Lancer des ateliers et des événements passionnants pour sensibiliser les étudiants à la protection animale. En leur montrant l'importance du bien-être des animaux à travers des rencontres avec des experts et des campagnes interactives, on vise à inspirer un changement positif dans leur attitude envers les animaux.",
        images: [
        ]
    },
    {
        title: "Membre du Club AIAC Electronics ",
        date: "2021/2022",
        company: "<a href='https://www.facebook.com/AIACElectronicsCLUB?locale=fr_FR'>AIAC Electronics CLUB </a> <br>",
        mainText: "Le AIAC ELECTRONICS CLUB se consacre à développer les compétences en électronique et systèmes embarqués, offrant également des explorations en robotique, programmation, IoT et automatisme pour ceux prêts à relever des défis et à innover.",
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