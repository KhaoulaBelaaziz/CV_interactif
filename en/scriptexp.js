document.addEventListener('DOMContentLoaded', function () {
  const experiences = [
      {
          title: "Apprentice works supervisor",
          date: "September 2022 to October 2024",
          company: "<a href='https://www.eurovia.fr'>Eurovia PACA</a> (13) <br> ",
          mainText: "Market research, budgeting and negotiation <br> Performance analysis and reporting <br> Subcontractor portfolio management <br> Site manager, team and process management",
          images: [
          ]
      },
      {
        title: "English teacher in Japan",
        date: "April 2023 to July 2024",
        company: "<a href='https://free-is.org/grade/'>Funabashi International School</a> (Tokyo, Japan) <br> ",
        mainText: "English teacher for 3 months <br> Study of Japanese management methods <br> Discovery of the culture and language: writing, speaking and interpersonal skills",
        images: [
        ]
    },
    {
        title: "Events Manager",
        date: "March 2022 to March 2023",
        company: "<a> Union Of Associations</a> (13) <br> ",
        mainText: "Supervisor of Centraliens events <br> Planning management <br> Participation in strategic committees",
        images: [
        ]
    },
    {
        title: "Head of Integration Weekend",
        date: "January 2022 to January 2023",
        company: "<a> Students' Office</a> (13) <br> ",
        mainText: "Teamwork <br> Managing 500 people",
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