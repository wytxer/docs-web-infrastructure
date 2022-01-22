<template>
  <ak-viewer v-model="fileList" />
</template>

<script>
export default {
  data () {
    return {
      fileList: [{
        fileName: '风景图片.jpg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F05%2FChMkJ1bKyaOIB1YfAAusnvE99Z8AALIQQPgER4AC6y2052.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=1d7412373357a29e06b070a4ed53ef71'
      }, {
        fileName: 'aaa/风景1.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F091114092956%2F140911092956-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=02138b4ff0f2e695d5977e4411466600'
      }, {
        fileName: 'pim-second-edition.pdf',
        filePath: 'https://pimbook.org/pdf/pim_toc.pdf'
      }, {
        fileName: '小米.mp4',
        filePath: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/video1-2.mp4'
      }, {
        // 也支持 name 和 url
        name: 'node-v16.13.2-x86.msi',
        url: 'https://nodejs.org/dist/v16.13.2/node-v16.13.2-x86.msi'
      }]
    }
  }
}
</script>
