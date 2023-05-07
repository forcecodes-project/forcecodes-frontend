<template>
  <main>
    <h3 class="mt-3 text-center">
      About us
    </h3>
    <div class="row mt-3">
      <div class="container mt-3">
        <img src="src/assets/img/Kolya.jpg" alt="Avatar2" class="image" style="width:100%; border-radius: 5%">
        <div class="middle">
          <p class="text">Nikolay Timofeev</p>
          <p class="text">Teamlead and backend-developer</p>
          <p class="text">tg: @timofeev41</p>
        </div>
      </div>

      <div class="container mt-3">
        <img src="src/assets/img/Nastya.jpg" alt="Avatar1" class="image" style="width:100%; border-radius: 5%">
        <div class="middle">
          <p class="text">Anastasia Konik</p>
          <p class="text">Frontend-developer</p>
          <p class="text">tg: @asyakonik17</p>
        </div>
      </div>

      <div class="container mt-3">
        <img src="src/assets/img/Nikita.jpg" alt="Avatar3" class="image" style="width:100%; border-radius: 5%">
        <div class="middle">
          <p class="text">Nikita Beryoza</p>
          <p class="text">Backend-developer</p>
          <p class="text">tg: @justcontestit</p>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <button class="btn" style="background-color: #02b095" @click="goToPremium">Get premium</button>
    </div>
  </main>
</template>

<script>

export default {
  name: "ContactsBlock",
  methods: {
    goToPremium() {
      this.$router.push('/premium')
    }

  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 21%;
}

.image {
  opacity: 1;
  display: block;
  width: 21%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  color: white;
  font-size: 16px;
}
</style>