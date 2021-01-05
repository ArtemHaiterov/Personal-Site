<template>
  <div class="portfolio-wrapper">
    <div class="portfolioItem">
      <div class="portfolioItem-header">
        <div class="portfolioItem-title">Персональный сайт</div>
        <div class="portfolioItem-link">
          <a href="https://www.microsoft.com/uk-ua/" target="_blank"
            >Artem Haiterov</a
          >
        </div>
      </div>
      <div class="portfolioItem-middle">
        <div class="portfolioItem-images">
          <div class="portfolioItem-image">
            <img src="../assets/first.jpg" />
          </div>
          <div class="portfolioItem-image">
            <img src="../assets/second.jpg" />
          </div>
        </div>
      </div>
      <div class="portfolioItem-content content-inner">
        <p>Single Page Application на Vue.</p>
        <p>
          Персональный сайт, с моим резюме, портфолио и контактами.
        </p>
        <p>
          Проект находится в стадии разработки. Программная часть готовая почти полностью.
        </p>
      </div>
    </div>
    <div class="portfolioItem">
      <div class="portfolioItem-header">
        <div class="portfolioItem-title">Персональный сайт</div>
        <div class="portfolioItem-link">
          <a href="https://www.microsoft.com/uk-ua/" target="_blank"
            >Artem Haiterov</a
          >
        </div>
      </div>
      <div class="portfolioItem-middle">
        <div class="portfolioItem-images">
          <div class="portfolioItem-image">
            <img src="../assets/first.jpg" />
          </div>
          <div class="portfolioItem-image">
            <img src="../assets/second.jpg" />
          </div>
        </div>
      </div>
      <div class="portfolioItem-content content-inner">
        <p>Single Page Application на Vue.</p>
        <p>
          Персональный сайт, с моим резюме, портфолио и контактами.
        </p>
        <p>
          Проект находится в стадии разработки. Программная часть готовая почти полностью.
        </p>
      </div>
    </div>
    <div class="portfolioItem">
      <div class="portfolioItem-header">
        <div class="portfolioItem-title">Персональный сайт</div>
        <div class="portfolioItem-link">
          <a href="https://www.microsoft.com/uk-ua/" target="_blank"
            >Artem Haiterov</a
          >
        </div>
      </div>
      <div class="portfolioItem-middle">
        <div class="portfolioItem-images">
          <div class="portfolioItem-image">
            <img src="../assets/first.jpg" />
          </div>
          <div class="portfolioItem-image">
            <img src="../assets/second.jpg" />
          </div>
        </div>
      </div>
      <div class="portfolioItem-content content-inner">
        <p>Single Page Application на Vue.</p>
        <p>
          Персональный сайт, с моим резюме, портфолио и контактами.
        </p>
        <p>
          Проект находится в стадии разработки. Программная часть готовая почти полностью.
        </p>
      </div>
    </div>
   <div class="portfolioItem">
      <div class="portfolioItem-header">
        <div class="portfolioItem-title">Персональный сайт</div>
        <div class="portfolioItem-link">
          <a href="https://www.microsoft.com/uk-ua/" target="_blank"
            >Artem Haiterov</a
          >
        </div>
      </div>
      <div class="portfolioItem-middle">
        <div class="portfolioItem-images">
          <div class="portfolioItem-image">
            <img src="../assets/first.jpg" />
          </div>
          <div class="portfolioItem-image">
            <img src="../assets/second.jpg" />
          </div>
        </div>
      </div>
      <div class="portfolioItem-content content-inner">
        <p>Single Page Application на Vue.</p>
        <p>
          Персональный сайт, с моим резюме, портфолио и контактами.
        </p>
        <p>
          Проект находится в стадии разработки. Программная часть готовая почти полностью.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pvPortfolio",
};
</script>

<style scoped>
.portfolio-wrapper {
  max-width: 1280px;
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
}

.portfolioItem {
  box-sizing: border-box;
  width: calc(50% - 30px);
  margin: 32px 15px;
  border: 3px solid rgb(0, 71, 129);
  border-radius: 13px;
}

.portfolioItem-header {
  padding: 12px;
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  align-items: center;
  justify-content: space-between;
  font: 20px "Fira Sans", sans-serif;
}

.portfolioItem-title {
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;
}

.portfolioItem-link {
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
}
.portfolioItem-link a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: color 0.3s;
}

.portfolioItem-link a:hover {
  color: rgb(255, 0, 0);
}

.portfolioItem-middle {
  border-top: 3px solid rgb(0, 71, 129);
  padding: 12px;
}
.portfolioItem-images {
  margin-left: -15px;
  margin-right: -15px;
  font-size: 0;
}

.portfolioItem-image {
  display: inline-block;
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;
  width: calc(50% - 30px);
}

.portfolioItem-image img {
  max-width: 100%;
  height: auto;
}

.portfolioItem-content {
  border-top: 3px solid rgb(0, 71, 129);
  padding: 12px;
  font: 18px "Fira Sans", sans-serif;
}
.content-inner p {
  margin: 12px 0;
}

.content-inner p:first-child {
  margin-top: 0;
}

.content-inner p:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 842px) {
  .portfolioItem {
    width: calc(100% - 30px);
  }

  .portfolioItem-header {
    font-size: 14px;
  }
  .portfolioItem-content {
    font-size: 14px;
  }

  .portfolioItem-image {
    text-align: center;
  }
}
</style>
