<template>
  <li>
    <div class="newby2">
      <div class="newby">
        <h3>{{ fullName }}</h3>
      </div>
      <h4>${{ rate }}/hour</h4>
      <base-button mode="outline" link :to="coachContactLink" id="btn1"
        >Contact</base-button
      >
    </div>

    <div class="actions">
      <div id="maker3">
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </div>

      <base-button link :to="coachDetailsLink" id="btn2"
        >View Details</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact'; // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    }
  }
};
</script>

<style scoped>
#maker3 {
  display: flex;
  justify-content: center;
  margin: 5px;
  position: absolute;
  left: -3%;
  top: -5%;
}


li {
  background: #fff;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  grid-gap: 1rem;
  margin: 2rem 1rem;
  border: 1px solid #2a265f;
  border-radius: 12px;
  /* padding: 1rem; */
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.newby {
  display: inline-flex;
  flex-wrap: wrap;
}

.newby2 {
  padding-left: 4rem;
  display: grid;
  background-color: #2a265f;
  color: #fff;
  padding: 20px;
  margin: 0;
}

#btn1 {
  background: #fff !important;
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 16px;
  opacity: 0.8;
  margin-top: 35px;
  text-decoration: none;
  text-align: center;
  padding: 6px;
  /* transform: scale(1); */
  transition: all 0.3s ease;
}

#btn1:hover,
#btn1:focus {
  opacity: 1;
  /* transform: scale(1.05); */
  color: #333;
  font-weight: bold;
}

#btn2 {
  background-color: #2a265f;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 9px;
  right: 20px;
  letter-spacing: 1px;
  transform: scale(1);
  transition: all 0.3s ease;
}

#btn2:hover,
#btn2:focus {
  transform: scale(1.03);
}

.newby h3 {
  margin-right: 10px;
}

.newby2 h4 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  position: relative;
}
</style>
