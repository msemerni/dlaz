const selectLang = document.querySelector('.select-lang');

let lang = localStorage.getItem("lang");

if (!lang) {
  selectLang.value = "en";
} else {
  selectLang.value = lang;
}

selectLang.addEventListener('change', changeLanguage);

function changeLanguage() {
  lang = selectLang.value;
  localStorage.setItem("lang", lang);

  for (let section in langArr) {
    // console.log("=SECTION=: ", section);
    for (let key in langArr[section]) {
      // console.log(key);
      let elem = document.querySelector(`.lng-${section}-${key}`);
      if (elem) {
        elem.innerHTML = langArr[section][key][lang];
      }
    }
  }
}

changeLanguage();
