<template>
<div class="main">
  <div class="menu">
    <p><a><i class="fas fa-image"></i></a></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    <RideForm :show="show" @uploadFinished="uploadFinished" />
  </div>
  <p>test</p>
</div>
</template>

<script>
import axios from 'axios';
import RideForm from './RideForm.vue';
export default {
   name: 'MyAccount',
  components: {
      RideForm,
  },
  data() {
    return {
      photos: [],
      error: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}
</style>
