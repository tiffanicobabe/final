<template>
<div class="home">
  <p>Welcome to Catch a Ride! This website was designed so students can offer carpool rides home during the holidays! Sign up to offer a ride!</p>
  <ride-list :rides="rides" />
  <p v-if="error">{{error}}</p>
  <div>
    <a href="https://github.com/tiffanicobabe/final">
      Github
    </a>
  </div>
</div>
</template>


<script>
import axios from 'axios';
import RideList from '@/components/RideList.vue';
export default {
  name: 'Home',
  components: {
    RideList,
  },
  data() {
    return {
      rides: [],
      error: '',
    }
  },
  created() {
    this.getRides();
  },
  methods: {
    async getRides() {
      try {
        let response = await axios.get("/api/rides/all");
        this.photos = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>

