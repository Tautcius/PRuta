<template>
    <div>
    <div @click="language = !language">
      <b-img v-if="language" right :src="require('@/assets/LTU.png')" fluid alt="LTU" />
      <b-img v-else right :src="require('@/assets/ENG.png')" fluid alt="ENG" /> 
    </div>
    </div>
</template>

<script>
export default {
  name: 'Language',
  data () {
    return {
      language: true
    }
  }
}
</script>
