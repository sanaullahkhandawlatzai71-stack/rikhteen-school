let english = false;

function changeLanguage() {

  english = !english;

  document.documentElement.lang = english ? "en" : "ps";
  document.documentElement.dir = english ? "ltr" : "rtl";

  document.querySelector("header h1").textContent =
    english
      ? "Rikhtin Private High School"
      : "ريښتين خصوصي عالي لېسه";

  document.querySelector("header p").textContent =
    english
      ? "Education • Ethics • Progress"
      : "Rikhtin Private High School";

  document.querySelector("header button").textContent =
    english ? "پښتو" : "English";

  document.getElementById("title").textContent =
    english
      ? "Education • Ethics • Progress"
      : "زده کړه • اخلاق • پرمختګ";

  document.getElementById("description").textContent =
    english
      ? "Quality education and a strong learning environment for a brighter future."
      : "د روښانه راتلونکي لپاره معیاري زده کړې او غوره تعلیمي چاپېریال.";

  document.getElementById("more").textContent =
    english ? "Learn More" : "نور معلومات";

  document.getElementById("aboutTitle").textContent =
    english ? "About Us" : "زموږ په اړه";

  document.getElementById("education").textContent =
    english ? "Education" : "زده کړه";

  document.getElementById("educationText").textContent =
    english
      ? "A structured and supportive learning environment for students."
      : "د زده کوونکو لپاره منظم او مناسب تعلیمي چاپېریال.";

  document.getElementById("ethics").textContent =
    english ? "Character" : "اخلاق";

  document.getElementById("ethicsText").textContent =
    english
      ? "Building respect, responsibility and good character."
      : "د ښه اخلاقو، درناوي او مسؤلیت احساس پیاوړتیا.";

  document.getElementById("future").textContent =
    english ? "Bright Future" : "روښانه راتلونکی";

  document.getElementById("futureText").textContent =
    english
      ? "Encouraging students to develop their abilities and achieve their goals."
      : "د زده کوونکو د وړتیاوو او راتلونکي لپاره هڅونه.";

  document.getElementById("noticeTitle").textContent =
    english ? "School Notice" : "د ښوونځي خبرتیا";

  document.getElementById("noticeText").textContent =
    english
      ? "Stay connected with us for important school announcements and educational programs."
      : "د ښوونځي د مهمو اعلانونو او تعلیمي پروګرامونو لپاره له موږ سره اړیکه وساتئ.";
}