<template>
<div class="wrapper">
  <div class="contact-wrapper">
    <div class="contactItem">
      <div class="contactItem-content">
        <div class="contactItem-content">
          <a href="tel:+380968379499" target="_blank" rel="nofollow">
            +380968379499</a
          >
        </div>
      </div>
    </div>
    <div class="contactItem">
      <div class="contactItem-content">
        <div class="contactItem-content">
          <a href="https://github.com/ArtemHaiterov" target="_blank">
            ArtemHaiterov | Github</a
          >
        </div>
      </div>
    </div>
    <div class="contactItem">
      <div class="contactItem-content">
        <a href="https://www.facebook.com/artem.haiterov" target="_blank"
          >Artem Haiterov | Facebook</a
        >
      </div>
    </div>
    <div class="contactItem">
      <div class="contactItem-content">
        <div class="contactItem-content">
          <a href="https://instagram.com/_19artem99?r=nametag" target="_blank">
            _19artem99 | Instagram</a
          >
        </div>
      </div>
    </div>
    <div class="contactItem">
      <div class="contactItem-content">
        <div class="contactItem-content">
          <a href="mailto:artem.haiterov@gmail.com" target="_blank"
            >artem.haiterov@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "pvContact",
};
</script>

<style scoped>
.wrapper{
  display: flex;
  height: calc(100vh - 119px);
}

.contact-wrapper {
  background: rgb(0, 71, 129);
  max-width: 750px;
  height: 500px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  border: 3px solid rgb(0, 102, 255);
  border-radius: 13px;
}

.contactItem {
  margin: 15px;
  width: calc(100%);
  text-align: center;
}

.contactItem-content a {
  font-size: 24px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: color 0.3s;
}

.contactItem-content a:hover {
  color: rgb(255, 0, 0);
}
</style>
