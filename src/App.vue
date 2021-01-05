<template>
  <div class="main">
    <pv-topbar />
    <router-view class="content" />
    <pv-footer />
  </div>
</template>

<script>
import PvTopbar from "@/components/Topbar";
import PvFooter from "@/components/Footer";

export default {
  name: "PvApp",
  components: {
    PvTopbar,
    PvFooter,
  },
};
</script>


