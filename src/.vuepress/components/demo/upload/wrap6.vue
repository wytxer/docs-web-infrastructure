<template>
  <ak-upload v-model="files" action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3">
    <span slot="tips">仅限 png、jpg、jpeg、mp4 格式的文件，也可以从素材库添加。</span>
    <a-button slot="suffix" icon="file-search" class="ML8" @click.stop="$message.info('点击了素材库')">素材库</a-button>
  </ak-upload>
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
