window.onload = function () {
  currYear();
}

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
    for (let key in langArr[section]) {
      let elem = document.querySelector(`.lng-${section}-${key}`);
      if (elem) {
        elem.innerHTML = langArr[section][key][lang];
      }
    }
  }
}

function currYear() {
  document.querySelector('.copyRight').innerHTML += new Date().getFullYear();
}

/* start animation */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotate-once');
      setTimeout(() => {
        entry.target.classList.remove('rotate-once');
      }, 500); 
    }
  });
}

const images = document.querySelectorAll('.advantage-col-item-img > img');

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 1,
});

images.forEach((img) => {
  observer.observe(img);
});
/* end animation */

changeLanguage();
