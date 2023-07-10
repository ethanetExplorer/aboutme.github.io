
//Greeter thing
var currentTime = new Date().getHours();
var greeting;
if (currentTime >= 5 && currentTime < 12) {
  greeting = "Good morning";
} else if (currentTime >= 12 && currentTime < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}
var greetingElement = document.getElementById("greeting");
greetingElement.textContent = greeting;

//Collapsing achievements list

const acadButton = document.getElementById('acad');
const sciResButton = document.getElementById('sci-res');
const photoButton = document.getElementById('photo');
const progButton = document.getElementById('prog');
const content = document.getElementById('all-achievements');

acadButton.addEventListener('click', () => {
  const acadAchievements = `
    <ul>
      <li class="achievement-item">2021: SPhL Physics League (Participation)</li>
      <li class="achievement-item">2022: Australian Math Competition (Certificate of Proficiency)</li>
      <li class="achievement-item">2022: Honours Roll in Principles of Accounting</li>
      <li class="achievement-item">2022: SIMCC</li>
      <li class="achievement-item">2023: Singapore Math Kangaroo Contest (Bronze Award)</li>
    </ul>
  `;
  content.innerHTML = acadAchievements;
});

sciResButton.addEventListener('click', () => {
  const sciResAchievements = `
    <ul>
      <li class="achievement-item">2020: Science Buskers Festival by Science Centre Singapore</li>
      <li class="achievement-item">2020: Science & Technology Challenge by Nanyang Polytechnic</li>
      <li class="achievement-item">2020: Youth Science Ambassador Programme by Science Centre Singapore</li>
      <li class="achievement-item">2022: Unity Scientific Innovation Challenge with SP & ERI@N (Merit)</li>
      <li class="achievement-item">2022: NUS Physics Illustratum (Merit)</li>
    </ul>
  `;
  content.innerHTML = sciResAchievements;
});

photoButton.addEventListener('click', () => {
  const photoAchievements = `
    <ul>
      <li class="achievement-item">2017: JPAS Novice Attainment</li>
      <li class="achievement-item">2018: Photofest</li>
    </ul>
  `;
  content.innerHTML = photoAchievements;
});

progButton.addEventListener('click', () => {
  const progAchievements = `
    <ul>
      <li class="achievement-item">2021: Youth Cyber Exploration Programme by Temasek Polytechnic</li>
      <li class="achievement-item">2022: App Development with Swift - Certified User</li>
      <li class="achievement-item">2022: Youth Cyber Exploration Programme by Singapore Polytechnic</li>
      <li class="achievement-item">2022: Central Capture-The-Flag Competition (Participation)</li>
    </ul>
  `;
  content.innerHTML = progAchievements;
});


// Experience
const CCAbutton= document.getElementById('CCA');
const enrichmentButton = document.getElementById('rich');
const otherButton = document.getElementById('oth');

CCAbutton.addEventListener('click', () => {
  const CCAexp = `
    CCA
  `;
  content.innerHTML = acadAchievements;
});

enrichmentButton.addEventListener('click', () => {
  const richExp = `
  Enrichment
  `;
  content.innerHTML = sciResAchievements;
});

otherButton.addEventListener('click', () => {
  const othExp = `
   Others
  
  `;
  content.innerHTML = photoAchievements;
});

