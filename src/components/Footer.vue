<template>
  <div class="footer">
    <div class="info">© 2021 Артём Гайтеров - персональный сайт</div>
  </div>
</template>

<script>
export default {
  name: 'PvFooter',
}
</script>

<style scoped>
.footer {
  padding: 15px 20px;
  background: rgb(0, 71, 129);
  color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
}

.info {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 25px;
}


</style>
