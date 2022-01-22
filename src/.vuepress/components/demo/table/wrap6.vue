<template>
  <div class="demo-table-wrap">
    <ak-table
      ref="table"
      :columns="columns"
      :loadData="loadData"
      :showPagination="false"
      dragSort
      @expand="onExpand"
      @drop="onDrop"
    >
      <template slot="expandedRowRender" slot-scope="record">
        <ak-table :columns="innerColumns" :loadData="record.children" :showPagination="false" dragSort @drop="onDrop">
          <span slot="action" class="table-action">
            <a>详情</a>
          </span>
        </ak-table>
      </template>

      <!-- 状态 -->
      <template #status="text">
        <a-badge v-if="text === 1" status="success" text="正常" />
        <a-badge v-else status="error" text="异常" />
      </template>

      <template #action>
        <a>增加</a>
        <a-divider type="vertical" />
        <a>删除</a>
      </template>
    </ak-table>
  </div>
</template>

<script>
const innerColumns = [
  { title: '编号', dataIndex: 'id', key: 'id' },
  { title: '日期', dataIndex: 'date', key: 'date' },
  { title: '描述', dataIndex: 'detail', key: 'detail' },
  { title: '数量', dataIndex: 'number', key: 'number' },
  { title: '操作', dataIndex: 'action', key: 'action', scopedSlots: { customRender: 'action' } }
]

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
    return {
      // 查询参数
      queryFilters: {},
      // 表头
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' }
      }, {
        title: '手机号',
        dataIndex: 'phone',
        scopedSlots: { customRender: 'phone' }
      }, {
        title: '角色名称',
        dataIndex: 'roleName'
      }, {
        title: '状态',
        dataIndex: 'status',
        scopedSlots: { customRender: 'status' }
      }, {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' }
      }],
      loadData: queryTables,
      // 子表格表头
      innerColumns,
      // 展开收起的时候触发，更新值
      onExpand: (expanded, record) => {
        const innerData = []
        // id 为 1 的添加子表格数据，此处请根据实际情况请求数据
        if (record.id === 1 || record.id === 2) {
          for (let i = 0; i < 3; ++i) {
            innerData.push({
              key: `${record.id}-${i}`,
              id: `${record.id}-${i}`,
              date: new Date().toLocaleDateString().replace(/\//g, '-'),
              detail: '这是描述',
              number: '56'
            })
          }
        }
        record.children = innerData
      }
    }
  },
  methods: {
    // 拖动结束，松开鼠标
    onDrop (sourceItem, targetItem, isDrop) {
      console.log(sourceItem, targetItem, isDrop)
    }
  }
}
</script>
