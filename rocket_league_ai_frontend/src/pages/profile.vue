<template>
  <q-page class="main-container">
    <q-btn :to="'/'" flat class="text-black">Home</q-btn>
    <div class="row">
      <div class="cap_flex col-12 q-mb-lg">
        <h5 class="bg-primary text-white ">Hello {{ username }}!</h5>
      </div>
      <div class="cap_flex col-6">
        <h5 class="bg-primary text-white">Upload your bot:</h5>
        <div class="q-pa-md row">
          <div class="inputWrapper col-6">
            <q-input
            class="q-mb-md"
            v-model="form.botname"
            float-label="Bot name"
            @keyup.enter="submit"
            />
            <p class="text-faded">Avatar:</p>
            <input type="file" class="q-mb-md"/>
            <p class="text-faded">Zip-file:</p>
            <input type="file" class="q-mb-md"/>
            <div class="row float-right q-pb-md">
              <q-btn color="primary" class="q-ma-sm" @click="submit">Submit</q-btn>
            </div>
          </div>
        </div>

      </div>
      <div class="col-1"></div>
      <div class="cap_flex col-5">
        <h5 class="bg-primary text-white">STATS</h5>
        <p>no stats yet</p>
      </div>
    </div>

  </q-page>
</template>
<script>
import store from '../store/index';

export default {
  data() {
    return {
      username: store.state.user.user.username,
      form: {
        botname: '',
        file: '',
      },
    };
  },
  methods: {
    submit() {

    },
  },
};
</script>
