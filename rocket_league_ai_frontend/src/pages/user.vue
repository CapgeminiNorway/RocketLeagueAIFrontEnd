<template>
  <q-page class="main-container">
    <h1>Hei {{ username }}</h1>
  </q-page>
</template>
<script>
import store from '../store/index';


export default {
  data() {
    return {
      username: store.state.user.user.username,
    };
  },
};
</script>
