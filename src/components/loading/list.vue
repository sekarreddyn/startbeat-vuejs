<template>
  <content-loader :speed="1" primaryColor="#f3f3f3" secondaryColor="#ecebeb"></content-loader>
</template>
 
<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: {
    ContentLoader
  }
};
</script>