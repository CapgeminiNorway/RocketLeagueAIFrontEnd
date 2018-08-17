<template>
  <q-page class="main-container">
    <videoWrapper></videoWrapper>
    <div class="row justify-center q-mt-lg">
      <currentMatch></currentMatch>
      <leaderBoard></leaderBoard>
      <about></about>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import videoWrapper from '../components/videoWrapper';
import leaderBoard from '../components/leaderBoard';
import currentMatch from '../components/currentMatch';
import about from '../components/about';


export default {
  name: 'PageIndex',
  components: {
    videoWrapper,
    leaderBoard,
    currentMatch,
    about,
  },
  data() {
    return {
    };
  },
};
</script>
