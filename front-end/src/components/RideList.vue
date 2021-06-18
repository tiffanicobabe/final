<template>
<div>
  <section class="ride-list">
    <div class="ride" v-for="ride in rides" v-bind:key="ride._id">
      <div class="rideInfo">
        <p class="rideTitle">{{ride.title}}</p>
        <p class="rideName">{{ride.user.firstName}} {{ride.user.lastName}}</p>
      </div>
      <p class="rideDate">{{formatDate(ride.created)}}</p>
    </div>
  </section>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'RideList',
  props: {
    rides: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    }
  }
}
</script>

<style scoped>
.rideInfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
}

.rideInfo p {
  margin: 0px;
}

.rideDate {
  font-size: 0.7em;
  font-weight: normal;
}

p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.ride-list {
  column-gap: 1em;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .ride-list {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .ride-list {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .ride-list {
    column-count: 2;
  }
}
</style>
