const URL = "http://127.0.0.1:5500";
// const URL = "https://dlaz.online";

let selectLang = document.querySelector('.select-lang');

const langArray = ["en", "de", "sk"];

let currentHrefLang = location.pathname.slice(1, 3);

if (langArray.includes(currentHrefLang)) {
  localStorage.setItem("lang", currentHrefLang);
} else {
  localStorage.setItem("lang", "en");
}

selectLang.addEventListener('change', changeLanguage);

function changeLanguage() {
  let lang = selectLang.value;
  selectLang.value = lang;
  localStorage.setItem("lang", lang);
  location.href = `${URL}/${lang}`;
}
