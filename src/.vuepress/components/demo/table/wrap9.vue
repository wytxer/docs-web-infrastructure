<template>
  <div class="demo-table-wrap">
    <ak-table ref="table" :columns="columns" :loadData="queryTables" :scroll="{x: columnsWidth}" drag columnStorage>
      <!-- 状态 -->
      <template #status="text">
        <a-badge v-if="text === 1" status="success" text="正常" />
        <a-badge v-else status="error" text="异常" />
      </template>

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

const columns = [{
  title: 'id',
  dataIndex: 'id',
  width: 100
}, {
  title: '姓名',
  dataIndex: 'name',
  width: 150
}, {
  title: '手机号',
  dataIndex: 'mobile',
  width: 150
}, {
  title: '角色名称',
  dataIndex: 'roleName',
  width: 150
}, {
  title: '状态',
  dataIndex: 'status',
  scopedSlots: { customRender: 'status' },
  width: 150
}, {
  title: '操作',
  dataIndex: 'action',
  scopedSlots: { customRender: 'action' },
  fixed: 'right'
}]

export default {
  data () {
    return {
      // 查询参数
      queryFilters: {},
      columns
    }
  },
  computed: {
    // 动态计算 columns 宽度
    columnsWidth () {
      return this.columns.reduce((total, item, index) => {
        return total + (item.width || 200)
      }, 0)
    }
  },
  methods: {
    queryTables
  }
}
</script>

<style lang="less" scoped>
// 列表操作按钮
.ak-table-actions {
  margin: 16px 0;
}
</style>
