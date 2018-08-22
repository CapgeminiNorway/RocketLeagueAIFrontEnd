<template>
  <div class="col-6 currentMatch cap_flex q-mr-md">
    <h5 class="bg-primary text-white">CURRENT MATCH:</h5>
    <p>{{ opponent1 }}</p>
    <p>{{ opponent2 }}</p>
  </div>
</template>
<script>
export default {
  name: 'currentMatch',
  data() {
    return {
      opponent1: 'user1',
      opponent2: 'user2',
    };
  },
};
</script>
