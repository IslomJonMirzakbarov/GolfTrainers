<template>
  <span class="badge" :class="type">
    <label id="first-title">{{ text }}</label>
    <label id="second-title">Degree</label>
    <i class="fas fa-ribbon"></i>
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  box-shadow: 0.5px 0.5px 5px 0.5px rgb(119, 118, 118);
  padding: 1rem;
  margin: 5px;
  margin-right: 10px;
  height: 85px;
  width: 95px;
  text-align: center;
}

.badge:focus {
  outline: none;
}

.badge label {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

#first-title {
  font-size: 1rem;
  font-weight: bold;
}

#second-title {
  font-size: 0.8rem;
}



.average {
  background-color: rgb(205, 127, 50, 0.9);
  color: black;
}

.advanced {
  background-color: rgb(192, 192, 192);
  color: black;
}

.pro {
  background-color: rgba(241, 205, 0, 0.945);
  color: black;
}
</style>
