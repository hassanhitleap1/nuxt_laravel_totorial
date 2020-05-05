<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link class="navbar-brand" to="/"> app nuxt with laravel</nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/"> home <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/link"> Link</nuxt-link>
        </li>
      </ul>
      <template v-if="!authintacted">
        <div class="navbar-nav ml-md-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/registrar">registrar</nuxt-link>
          </li>
        </div>

      </template>
      <template v-if="authintacted">
          <div class="navbar-nav ml-md-auto">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout" >logout</a>
        </li>
        
      </div>
      </template>
    
    </div>
  </nav>
</template>

<script>

export default {
  method:{
    logout(){
        this.$auth.logout();
    }
  }
}
</script>