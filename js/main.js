const fill = document.getElementById("loadingFill");
const logo = document.getElementById("hondaLogo");
const bar = document.getElementById("loadingBar");
// Стартуем анимацию загрузки
setTimeout(() => {
  fill.style.width = "100%";
}, 500);

// После завершения — увеличиваем логотип и убираем полосу загрузки
fill.addEventListener("transitionend", () => {
  logo.classList.add("zoom");
  bar.classList.add("hidden");
});

const flyObject = document.getElementById("flyObject");

fill.addEventListener("transitionend", () => {
  logo.classList.add("zoom");
  bar.classList.add("hidden");

  // Появление и вылет объекта через 300 мс после увеличения логотипа
  setTimeout(() => {
    flyObject.classList.add("fly-in");
  }, 300);
});

const header = document.getElementById("header");
const buttonBox = document.getElementById("buttonBox");
const upLeftText = document.getElementById("upLeftText");
const bottomLeftText = document.getElementById("bottomLeftText");
const upRightText = document.getElementById("upRightText");
const bottomRightText = document.getElementById("bottomRightText");

// Элементы хедера
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const icon4 = document.getElementById("icon4");

fill.addEventListener("transitionend", () => {
  logo.classList.add("zoom");
  bar.classList.add("hidden");

  // Появление центрального объекта
  setTimeout(() => {
    flyObject.classList.add("fly-in");

    // Хедер сверху
    header.classList.add("show");

    // Появление текстов слева
    text1.classList.add("show");
    text2.classList.add("show");
    text3.classList.add("show");

    // Появление иконок справа
    icon1.classList.add("show");
    icon2.classList.add("show");
    icon3.classList.add("show");
    icon4.classList.add("show");

    // Верхний текст слева
    upLeftText.classList.add("show");

    // Верхний текст справа
    upRightText.classList.add("show");

    // Нижний текст появляется с задержкой
    setTimeout(() => {
      bottomLeftText.classList.add("show");
      bottomRightText.classList.add("show");
    }, 500);
  }, 300);
});

setTimeout(() => {
  flyObject.classList.add("fly-in");

  // Хедер, кнопка, текст
  header.classList.add("show");
  buttonBox.classList.add("show");
  leftText.classList.add("show");
  rightText.classList.add("show");

  // ⏳ Через 1 сек после появления всего — разблокируем скролл
  setTimeout(() => {
    document.body.classList.remove("noscroll");
  }, 1000);
}, 4000);

const orderBtn = document.querySelector("#buttonBox button");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

orderBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
