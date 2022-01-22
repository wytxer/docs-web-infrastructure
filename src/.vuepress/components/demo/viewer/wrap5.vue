<template>
  <div>
    <ak-viewer v-model="fileList" file-type="image" list-type="custom" class="file-viewer-wrap">
      <div class="file-custom-item" slot-scope="{record}">
        <img :src="record.filePath" />
        <div class="file-info-content">
          <ak-auto-tooltip class="PB4" :text="record.fileName" />
          <div class="PB4 C-666">{{ record.time }}</div>
          <ak-auto-tooltip class="PB4 C-666" :text="record.remark" />
        </div>
        <a-popconfirm title="确定要删除吗？" ok-text="确定" cancel-text="取消" @confirm="onFileDelete(record)">
          <a-icon type="delete" class="action-btn" @click.stop />
        </a-popconfirm>
      </div>
      <div slot="actions" class="add-file-box">
        <a-icon type="plus" />
      </div>
    </ak-viewer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [{
        id: 1,
        fileName: '风景图片风景图片风景图片风景图片风景图片风景图片.jpg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F05%2FChMkJ1bKyaOIB1YfAAusnvE99Z8AALIQQPgER4AC6y2052.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644897631&t=1d7412373357a29e06b070a4ed53ef71',
        time: '2022-01-01 21:21:12',
        remark: '备注啊啊啊啊啊啊啊啊啊'
      }, {
        id: 2,
        fileName: 'test-dedicated/风景1.jpeg',
        filePath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1011%2F10091G20P8%2F1G009120P8-9-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644906958&t=8f6c853be6c383fe22ba5bbce2627463',
        time: '2022-01-01 20:21:12',
        remark: '备注啊啊啊啊啊啊啊啊啊备注啊啊啊啊啊啊啊啊啊备注啊啊啊啊啊啊啊啊啊备注啊啊啊啊啊啊啊啊啊'
      }]
    }
  },
  methods: {
    onFileDelete (record = {}) {
      this.fileList = this.fileList.filter(item => item.id !== record.id)
    }
  }
}
</script>
<style lang="less" scoped>
.file-viewer-wrap {
  .file-custom-item {
    width: 450px;
    border: 1px solid #d9d9d9;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    position: relative;
    margin-bottom: 16px;
    &:not(:last-child) {
      margin-right: 16px;
    }
    .file-info-content {
      flex: 1;
      width: 300px;
      padding-right: 24px;
    }
    img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }
    .action-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      color: #158dff;
      cursor: pointer;
    }
  }
  .add-file-box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #999;
    border: 1px dotted #d9d9d9;
    border-radius: 4px;
    background-color: #fafafa;
    margin-left: 16px;
    cursor: pointer;
    .anticon {
      font-size: 32px;
    }
  }
}
</style>
