<template>
  <div>
    <ak-viewer v-model="fileList" list-type="card" style="width: 500px" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [{
        fileName: '佐藤康夫 - 夜明.m4a',
        filePath: 'https://m801.music.126.net/20220116151244/06f1b54d44305feae54a43d16ac86160/jdyyaac/0e5d/025a/5608/975b3b2ae250b42c51f4ab1453cc98e3.m4a'
      }]
    }
  }
}
</script>
