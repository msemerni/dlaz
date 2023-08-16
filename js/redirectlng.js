// const URL = "http://127.0.0.1:5500";
const URL = "https://dlaz.online";

let lang = localStorage.getItem("lang");

if (!lang) {
  localStorage.setItem("lang", "en");
  location.href = `${URL}/en/`;
} else {
  location.href = `${URL}/${lang}/`;
}
