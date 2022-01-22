<template>
  <ak-table :columns="columns" :loadData="queryTables">
    <!-- 状态 -->
    <template #status="text">
      <a-badge v-if="text === 1" status="success" text="正常" />
      <a-badge v-else status="error" text="异常" />
    </template>

    <!-- 操作 -->
    <template #action="text, record">
      <a>增加</a>
      <a-divider type="vertical" />
      <a @click="onDelete(record)">删除</a>
    </template>
  </ak-table>
</template>

<script>
const queryTables = () => {
  return new Promise(resolve => {
    const data = {
      rows: []
    }
    for (let i = 1; i < 18; i += 1) {
      const row = {
        key: i,
        id: i,
        name: '用户' + i,
        phone: '17600000000',
        roleName: '管理员',
        status: i % 2 === 0 ? 1 : 2
      }
      if (Math.random() > 0.5) {
        row.children = []
        for (let i = 0; i < 3; i++) {
          const key = Math.floor(Math.random() * 100000)
          row.children.push({
            key,
            id: key,
            name: '用户' + i,
            phone: '17600000000',
            roleName: '管理员',
            status: i % 2 === 0 ? 1 : 2
          })
        }
      }
      data.rows.push(row)
    }
    resolve(data)
  })
}

export default {
  data () {
    return {
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        width: 200
      }, {
        title: '手机号',
        dataIndex: 'phone',
        width: 200
      }, {
        title: '角色名称',
        dataIndex: 'roleName',
        width: 200
      }, {
        title: '状态',
        dataIndex: 'status',
        scopedSlots: { customRender: 'status' },
        width: 200
      }, {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
        width: 200
      }]
    }
  },
  methods: {
    queryTables,
    // 删除
    onDelete (row) {
      console.log('删除')
    }
  }
}
</script>
