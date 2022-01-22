<template>
  <ak-upload v-model="files" list-type="picture-card" action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3" />
</template>

<script>
export default {
  data () {
    return {
      files: []
    }
  }
}
</script>
