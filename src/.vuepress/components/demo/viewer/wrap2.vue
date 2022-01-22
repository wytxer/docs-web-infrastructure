<template>
  <div>
    <div class="PB16">
      切换文件类型
      <a-button type="primary" @click="onSetImageList()" class="ML16">图片</a-button>
      <a-button type="primary" @click="onSetFileList()" class="ML16">图片与其他类型的文件</a-button>
    </div>
    <div class="PB16">
      切换列表展示方式
      <a-button type="primary" @click="listType = 'thumbnail'" class="ML16">缩略图形式</a-button>
      <a-button type="primary" @click="listType = 'link'" class="ML16">链接形式</a-button>
      <a-button type="primary" @click="listType = 'card'" class="ML16">卡片形式</a-button>
    </div>
    <ak-viewer v-model="fileList" :list-type="listType" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      listType: 'link'
    }
  },
  created () {
    this.onSetImageList()
  },
  methods: {
    onSetFileList () {
      this.fileList = [{
        fileName: '风景图片.jpg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F05%2FChMkJ1bKyaOIB1YfAAusnvE99Z8AALIQQPgER4AC6y2052.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=1d7412373357a29e06b070a4ed53ef71'
      }, {
        fileName: 'pim-second-edition.pdf',
        filePath: 'https://pimbook.org/pdf/pim_toc.pdf'
      }, {
        fileName: '风景1.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1011%2F10091G20P8%2F1G009120P8-9-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=8f6c853be6c383fe22ba5bbce2627463'
      }, {
        fileName: 'page.pdf',
        filePath: 'https://pimbook.org/pdf/pim_first_pages.pdf'
      }]
    },
    onSetImageList () {
      this.fileList = [{
        fileName: '风景图片.jpg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F091114092956%2F140911092956-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=02138b4ff0f2e695d5977e4411466600'
      }, {
        fileName: '风景1.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F032120114622%2F200321114622-4-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=b5183a2016badc51bee55f7445018ff2'
      }, {
        fileName: '名字很长名字很长名字很啊啊啊啊啊啊啊啊啊啊啊啊啊长名字很长名字很长名字很长名字很长名字很长.jpg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZP02121D11-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=4178158a425051df868b29a441a4b47a'
      }, {
        fileName: '桌面背景图片111.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-5-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=3cc5e0525171bcee2f5ccbaf161675aa'
      }, {
        fileName: '桌面背景图片3.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G520141A4%2F200G5141A4-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=d37332d0e8b836fd16e25aa2dbbac749'
      }, {
        fileName: '桌面背景图片5.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110814%2F6351-110Q4013H269.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=14a830162d8e89da59d32444c311e60f'
      }, {
        fileName: '桌面背景图片6.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G320105112%2F200G3105112-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=66b592c2f739931dd7ea2b0e459bf2ec'
      }]
    }
  }
}
</script>
