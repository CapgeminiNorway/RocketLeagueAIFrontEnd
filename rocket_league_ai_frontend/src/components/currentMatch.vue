<template>
  <div class="col-6 currentMatch cap_flex q-mr-md">
    <h5 class="bg-primary text-white">CURRENT MATCH:</h5>
    <p>user1 vs user2</p>
    <matchStats></matchStats>
  </div>
</template>
<script>
import matchStats from '../components/matchStats';

export default {
  name: 'currentMatch',
  components: {
    matchStats,
  },
  data() {
    return {
      opponent1: 'user1',
      opponent2: 'user2',
    };
  },
  mounted() {

  },
  methods: {
  },
};
</script>
