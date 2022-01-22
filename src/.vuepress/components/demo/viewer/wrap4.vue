<template>
  <div>
    <ak-viewer v-model="fileList" file-type="image" list-type="link" style="width: 200px" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [{
        fileName: '风景图片风景图片风景图片风景图片风景图片风景图片.jpg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F05%2FChMkJ1bKyaOIB1YfAAusnvE99Z8AALIQQPgER4AC6y2052.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=1d7412373357a29e06b070a4ed53ef71'
      }, {
        fileName: '风景1.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1011%2F10091G20P8%2F1G009120P8-9-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=8f6c853be6c383fe22ba5bbce2627463'
      }]
    }
  }
}
</script>
