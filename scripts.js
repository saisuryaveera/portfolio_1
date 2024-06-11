document.addEventListener("DOMContentLoaded", function() {
  const certificatesGrid = document.querySelector('.certificates-grid');
  const certificatesData = [
    {
      title: "Prompt Engineering and Advanced ChatGPT",
      issuer: "edX",
      date: "May 2024",
      url: "https://courses.edx.org/certificates/0eeecd86af0144c3b1b38213d7975b0a"
    },
    {
      title: "AWS Academy Cloud Architecting",
      issuer: "AWS",
      date: "December 2023",
      url: "https://drive.google.com/file/d/126dEKDR71rVOPYkqGhXDzwY8fnG9aIDa/view?usp=drivesdk"
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "AWS",
      date: "November 2023",
      url: "https://drive.google.com/file/d/1GSh19r0-YpFLeGQEPE92j8HzfQjdEsgI/view?usp=sharing"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "November 2023",
      url: "https://drive.google.com/file/d/1guwpDUKeV10anBSyCrZ0WuN5Ig-3VNgH/view?usp=sharing"
    },
    {
      title: "Design & Implementation of Human-Computer Interfaces",
      issuer: "NPTEL",
      date: "November 2023",
      url: "https://drive.google.com/file/d/1jyNhRTMeNmPhXMJ6sIn7UKFkeZohYQ8o/view?usp=sharing"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      date: "November 2023",
      url: "https://coursera.org/share/61fd8c3c3a910d5ccd5db7297d079d21"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "October 2023",
      url: "https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4"
    },
    {
      title: "Wipro TalentNext Java Full Stack",
      issuer: "Wipro Limited",
      date: "October 2023",
      url: "https://drive.google.com/file/d/15KqnNe1gOGQDegzuO3UAybyW0iU7mi5L/view?usp=sharing"
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "August 2023",
      url: "https://www.hackerrank.com/certificates/37a66d1d0f90"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "August 2023",
      url: "https://www.hackerrank.com/certificates/4bb9d7491c10"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "August 2023",
      url: "https://drive.google.com/file/d/1RoTVTbTm6mzSZwG6kgbGoqBKJM9sp-28/view?usp=sharing"
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "June 2023",
      url: "https://www.hackerrank.com/certificates/d4ddf6780a6a"
    },
    {
      title: "Getting Started with Competitive Programming",
      issuer: "NPTEL",
      date: "May 2023",
      url: "https://drive.google.com/file/d/1-ztEKsCiquklpEnz8QT5mYNUMih814_Y/view?usp=sharing"
    },
    {
      title: "Java (Basic) Certificate",
      issuer: "HackerRank",
      date: "February 2023",
      url: "https://www.hackerrank.com/certificates/bf1ca7f81075"
    },
    {
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      date: "February 2023",
      url: "https://www.hackerrank.com/certificates/de98f9b900f9"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS",
      date: "December 2022",
      url: "https://www.credly.com/badges/5cca085b-499b-4175-b46c-4ff25cac3b73/linked_in_profile"
    },
    {
      title: "Data Base Management System",
      issuer: "NPTEL",
      date: "November 2022",
      url: "https://drive.google.com/file/d/1-iVnT3tKuVhGhSKW-Y8Vf2hoYK541Csi/view?usp=sharing"
    },
    {
      title: "Programming Data Structures and Algorithms Using Python",
      issuer: "NPTEL",
      date: "October 2022",
      url: "https://drive.google.com/file/d/1-fK9uUXPXaD6hFDZO8nKG_WmaeHkno5L/view?usp=sharing"
    },
    {
      title: "Java Programming",
      issuer: "Pantechelearning",
      date: "June 2022",
      url: "https://drive.google.com/file/d/1-zK-yauoNXN5FiwORyfwt--n-7zja9zf/view?usp=sharing"
    },
    {
      title: "C - Programming Course (Hands-On)",
      issuer: "skillrack",
      date: "July 2021",
      url: "www.skillrack.com/cert/213710/VBD"
    }
  ];

  certificatesData.forEach(certificate => {
    const card = document.createElement('div');
    card.classList.add('certificate-card');
    const imageUrl = `certificates/${certificate.title}.jpg`;
    card.innerHTML = `
      <img class="certificate-image" src="${imageUrl}" alt="${certificate.title}">
      <div class="certificate-content">
        <h3 class="certificate-title">${certificate.title}</h3>
        
        <div class="certificate-footer">
        <div>
         <p class="certificate-issuer">Issuer: ${certificate.issuer}</p>
          <p class="certificate-date">${certificate.date}</p>
        </div>
          <a href="${certificate.url}" class="certificate-button" target="_blank">View</a>
        </div>
      </div>
    `;
    certificatesGrid.appendChild(card);
  });
});
