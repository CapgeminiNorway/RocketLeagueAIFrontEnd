<template>
  <div class="col-6 currentMatch cap_flex q-mr-md">
    <h5 class="bg-primary text-white">CURRENT MATCH:</h5>
    <div class="row justify-center q-pa-lg">
      <div class="col-12 text-center q-mb-lg">
        <div class="row justify-center">
          <div class="col-4">
            <img  src="https://png.icons8.com/color/1600/cyborg.png" width="60"
            height="60" />
          </div>
          <p class="col-4" >{{ opponent1.name }}
            vs
            {{ opponent2.name }}</p>
            <div class="col-4">
              <img class="col-4" src="https://png.icons8.com/color/1600/year-of-dragon.png" width="60"
              height="60" />
            </div>
          </div>
        </div>
        <div class="col-4 text-center">{{ opponent1.shots }}</div>
      <div class="col-4 text-center">Shots</div>
      <div class="col-4 text-center">{{ opponent2.shots }}</div>
      <div class="col-4 text-center">{{ opponent1.shotsOnTarget }}</div>
      <div class="col-4 text-center">Shots on target</div>
      <div class="col-4 text-center">{{ opponent2.shotsOnTarget }}</div>
      <div class="col-4 text-center">{{ opponent1.possession }}%</div>
      <div class="col-4 text-center">Possession</div>
      <div class="col-4 text-center">{{ opponent2.possession }}%</div>
    </div>

    <!--<matchStats></matchStats>-->
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
      opponent1: {
        name: 'cyborg',
        shots: 4,
        shotsOnTarget: 4,
        possession: 40,
      },
      opponent2: {
        name: 'dragon_bot',
        shots: 7,
        shotsOnTarget: 8,
        possession: 60,
      },
    };
  },
  mounted() {

  },
  methods: {
  },
};
</script>
