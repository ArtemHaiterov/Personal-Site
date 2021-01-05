<template>
  <div class="home-wrapper">
    <div class="homeItem">
      <div class="homeItem-title">Профессиональные навыки</div>
      <div class="homeItem-content">
        <ul>
          <li>
            JavaScript (1 год опыта) Выше среднего, использую в настоящее время.
          </li>
          <li>
            HTML/CSS(LESS) (2 года опыта) Выше среднего, использую в настоящее
            время.
          </li>
          <li>
            Vue.js (1 года опыта) Выше среднего, использую в настоящее время.
          </li>
          <li>JQuery (1 год опыта) Средний, использую в настоящее время.</li>
          <li>Python (1 год опыта) Начинающий, 1 год назад.</li>
          <li>C++ (1 год опыта) Начинающий, 1 год назад.</li>
          <li>GitHub (1 год опыта) Средний, использую в настоящее время.</li>
          <li>Git (1 год опыта) Средний, использую в настоящее время.</li>
          <li>Webpack (1 год опыта) Средний, использую в настоящее время.</li>
          <li>SQL (1 года опыта) Средний, 1 год назад.</li>
        </ul>
      </div>
    </div>
    <div class="homeItem">
      <div class="homeItem-title">Образование</div>
      <div class="homeItem-content">
        <li>
          Приднепровская государственная академия строительства и архитектуры
        </li>
        <li>Информационные технологии и механическая инженерия, Днепр</li>
        <li>Неоконченное высшее, с 09.2016 по 05.2022 (5 года 8 месяцев)</li>
      </div>
    </div>

    <div class="homeItem">
      <div class="homeItem-title">Знание языков</div>
      <div class="homeItem-content">
        <li>Украинский ─ свободно</li>
        <li>Русский ─ свободно</li>
        <li>Английский ─ средний</li>
      </div>
    </div>
    <div class="homeItem">
      <div class="homeItem-title">О себе</div>
      <div class="homeItem-content">
        Меня зовут Артём, мне 21 год. Люблю работать в команде, легко нахожу
        общий язык с людьми. Быстро обучаюсь новому. Готов к трудным и
        интересным проектам. Целеустремленный и легкообучаем, готов довести
        любое дело до результативного конца.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pvHome",
};
</script>

<style scoped>
li {
  list-style-type: none;
  padding-bottom: 5px;
}
.home-wrapper {
  max-width: 1280px;
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
}

.homeItem {
  box-sizing: border-box;
  width: calc(100% - 30px);
  margin: 18px 15px;
  border: 3px solid rgb(0, 71, 129);
  border-radius: 13px;
}

.homeItem-title {
  text-align: center;
  font: 24px "Fira Sans", sans-serif;
}

.homeItem-content {
  padding: 10px 10px;
  font: 20px "Fira Sans", sans-serif;
}
</style>
