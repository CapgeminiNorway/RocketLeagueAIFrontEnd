<template>
  <div class="currentMatch q-mr-md">
    <div class="row justify-center q-pa-lg">
      <div class="col-12 text-center q-mb-lg">
        <div class="row justify-center">
          <div class="col-4">
            <img  src="https://png.icons8.com/color/1600/cyborg.png" width="60"
            height="60" />
          </div>

          <p class="col-4 text-bold">
            {{ opponent1.name }}
            vs
            {{ opponent2.name }}
          </p>
            <div class="col-4">
              <img class="col-4" src="https://png.icons8.com/color/1600/year-of-dragon.png" width="60"
              height="60" />
            </div>
          </div>
        </div>
        <div class="col-4 text-center">{{ opponent1.totalMatches }}</div>
      <div class="col-4 text-center">Total Matches</div>
      <div class="col-4 text-center">{{ opponent2.totalMatches }}</div>
      <div class="col-4 text-center">{{ opponent1.totalWins }}</div>
      <div class="col-4 text-center">Total Wins</div>
      <div class="col-4 text-center">{{ opponent2.totalWins }}</div>
      <div class="col-4 text-center">{{ opponent1.percentWinsThisOpponent }}%</div>
      <div class="col-4 text-center">% Wins this opponent</div>
      <div class="col-4 text-center">{{ opponent2.percentWinsThisOpponent }}%</div>
    </div>
  </div>

    <!--<matchStats></matchStats>-->
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
        name: 'RASHBOT',
        totalMatches: 4,
        totalWins: 1,
        percentWinsThisOpponent: 40,
      },
      opponent2: {
        name: 'GOSLING',
        totalMatches: 7,
        totalWins: 5,
        percentWinsThisOpponent: 60,
      },
    };
  },
  mounted() {

  },
  methods: {
  },
};
</script>
