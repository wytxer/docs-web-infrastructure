<template>
  <div class="demo-table-wrap">
    <ak-table ref="table" :columns="columns" :loadData="dataSource">
      <template v-for="col in ['name', 'mobile', 'roleName']" #[col]="text, record">
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => onInputChange(e.target.value, record.id, col)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>

      <!-- 状态 -->
      <template #status="text">
        <a-badge v-if="text === 1" status="success" text="正常" />
        <a-badge v-else status="error" text="异常" />
      </template>

      <!-- 操作 -->
      <template #action="text, record">
        <span v-if="record.editable" key="action1">
          <a @click="onSave(record.id)">保存</a>
          <a-divider type="vertical" />
          <a @click="onCancel(record.id)">取消</a>
        </span>
        <span key="action2" v-else>
          <a :disabled="editingKey !== ''" @click="onEdit(record.id)">编辑</a>
        </span>
      </template>
    </ak-table>
  </div>
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
      roleName: '管理员',
      status: i % 2 === 0 ? 1 : 2
    })
  }
  return { rows }
}

export default {
  data () {
    const dataSource = queryTables()
    return {
      // 表头
      columns: [{
        title: 'id',
        dataIndex: 'id'
      }, {
        title: '姓名',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' }
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        scopedSlots: { customRender: 'mobile' }
      }, {
        title: '角色名称',
        dataIndex: 'roleName',
        scopedSlots: { customRender: 'roleName' }
      }, {
        title: '状态',
        dataIndex: 'status',
        scopedSlots: { customRender: 'status' }
      }, {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' }
      }],
      // 行编辑 key
      editingKey: '',
      dataSource,
      // 行编辑前数据存储
      cacheData: dataSource.rows.map(item => ({ ...item }))
    }
  },
  methods: {
    // 编辑
    onEdit (key) {
      const newData = [...this.dataSource.rows]
      // 如果 loadData 传入的是一个函数，请用此方式获取 table 数据，相同场景同样适用
      // const newData = [...this.$refs.table.localDataSource]
      const target = newData.find(item => key === item.key) || {}
      if (target) {
        target.editable = true
        this.dataSource.rows = newData
        // 如果 loadData 传入的是一个函数，请用此方式更新 table 数据，相同场景同样适用
        // this.$refs.table.localDataSource = newData
        this.editingKey = key
      }
    },
    // 保存
    onSave (key) {
      const newData = [...this.dataSource.rows]
      const newCacheData = [...this.cacheData]
      const target = newData.find(item => key === item.key) || {}
      const targetCache = newCacheData.find(item => key === item.key) || {}
      if (target && targetCache) {
        delete target.editable
        this.dataSource.rows = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    // 取消
    onCancel (key) {
      const newData = [...this.dataSource.rows]
      const target = newData.find(item => key === item.key) || {}
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.find(item => key === item.key) || {})
        delete target.editable
        this.dataSource.rows = newData
      }
    },
    // 行内容改变
    onInputChange (value, key, column) {
      const newData = [...this.dataSource.rows]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.dataSource.rows = newData
      }
    }
  }
}
</script>
