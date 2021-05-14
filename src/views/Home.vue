<template>
  <div class="home">
    
    <HelloWorld msg="giving back to mama earth by buying less but better" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
