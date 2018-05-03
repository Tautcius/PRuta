<template>
  <div>
   <b-navbar toggleable="md" type="light" variant="faded">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="w-100" justified tabs exact-active-class>
      <b-nav-item to="/about">Apie Mus</b-nav-item>
      <b-nav-item to="/workshop">Kūrybinės Dirbtuvės</b-nav-item>
      <b-nav-item to="/gallery">Galerija</b-nav-item>
      <b-nav-item to="/contact">Kontaktai</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>
