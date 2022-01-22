<template>
  <ak-table :columns="columns" :loadData="queryTables" :customRow="onRowClick" dragSort @drop="onDrop" />
</template>

<script>
const queryTables = () => {
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
  return { rows }
}

export default {
  data () {
    return {
      // 查询参数
      queryFilters: {},
      // 表头
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        width: 200
      }, {
        title: '手机号',
        dataIndex: 'mobile',
        width: 200
      }, {
        title: '角色名称',
        dataIndex: 'roleName',
        width: 200
      }]
    }
  },
  methods: {
    queryTables,
    // 行属性，如不需要此功能可自行删除此代码片段
    onRowClick (record, index) {
      return {
        on: {
          click: () => {
            console.log('单击', record, index)
          },
          dblclick: () => {
            console.log('双击', record, index)
          }
        }
      }
    },
    // 拖动结束的回调
    onDrop (sourceItem, targetItem, isDrop) {
      console.log(sourceItem, targetItem, isDrop)
    }
  }
}
</script>
