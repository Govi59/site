<template lang="html">
  <div>
    <navbar class="rel"></navbar>
    <div id="years-list">
      <router-link class="inline-link" v-for="(annee, id) in anneesGallerie" :key="id" :to="`/galerie/${annee}`" exact>{{ annee }}</router-link>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

let anneesGallerie = [ '2017' ]

export default {
  components: { Navbar },
  data: function () {
    return { anneesGallerie }
  }
}
</script>

<style lang="scss">
#years-list {
  padding: 1rem 5rem 3rem 5rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  a {
    margin-right: 0.8em;
    font-size: 1.9em;
    color: rgb(120, 120, 120);

    &.nuxt-link-active {
      color: white;
    }
  }
}

.gallerie_grid {
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 5px;
  justify-content: center;

  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: calc(0.5 * 2/3 * 100vw);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(1/3 * 2/3 * 100vw);
  }

  @media (min-width: 1199px) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: calc(1/5 * 2/3 * 100vw);
  }
}

.big-image {
  grid-area: span 2 / span 2;
}

.small-image {
  grid-area: span 1 / span 1;
}

.gallerie_grid__entry {
  background-color: #2a0917;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}


.fade-in {
  animation: fadeIn 0.6s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fullscreen-v-img {
  z-index: 100;
}
</style>
