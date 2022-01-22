<template>
  <div class="demo-table-wrap">
    <ak-table ref="table" :columns="columns" :loadData="queryTables" :alert="options.alert" :rowSelection="options.rowSelection">
      <!-- 操作 -->
      <template #action>
        <a>增加</a>
        <a-divider type="vertical" />
        <a>删除</a>
      </template>
    </ak-table>
  </div>
</template>

<script>
const queryTables = () => {
  return new Promise(resolve => {
    const rows = []
    for (let i = 1; i < 18; i += 1) {
      rows.push({
        key: i,
        id: i,
        name: '用户' + i,
        mobile: '17600000000',
        roleName: '管理员'
      })
    }
    resolve({ rows })
  })
}

export default {
  data () {
    return {
      // 表头
      columns: [{
        title: 'id',
        dataIndex: 'id'
      }, {
        title: '姓名',
        dataIndex: 'name',
        filters: [
          { text: '用户1', value: '1' },
          { text: '用户2', value: '2' }
        ],
        onFilter: (value, record) => record.name.includes(value)
      }, {
        title: '角色名称',
        dataIndex: 'roleName'
      }, {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' }
      }],
      // 行选择的 key 数组
      selectedRowKeys: [],
      // 行选择的完整数据
      selectedRows: [],
      // 控制表格行选择
      options: {
        // 选中数据时显示提示框
        alert: {
          show: true,
          clear: () => {
            this.selectedRowKeys = []
            this.selectedRows = []
          }
        },
        // 控制表格行选择
        rowSelection: {
          onChange: (selectedRowKeys, selectedRows) => {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
          }
        }
      }
    }
  },
  methods: {
    queryTables
  }
}
</script>

<style lang="less" scoped>
.demo-table-wrap {
  /deep/ .ant-alert {
    margin-bottom: 16px !important;
  }
}
</style>
