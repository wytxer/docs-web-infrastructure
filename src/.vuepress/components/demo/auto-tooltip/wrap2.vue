<template>
  <ak-table rowKey="id" :columns="columns" :loadData="loadData">
    <template #description="text">
      <ak-auto-tooltip :text="text" />
    </template>
  </ak-table>
</template>

<script>
const loadData = params => {
  return new Promise(resolve => {
    const data = {
      rows: [],
      currentPage: 1,
      totalSize: 5
    }
    for (let a = 1; a <= 5; a += 1) {
      data.rows.push({
        id: a,
        name: `姓名 - ${a}`,
        phone: `1361571655${a}`,
        age: a,
        description: a % 2 === 0 ? '内容描述内容描述内容描述内容描述' : `描述内容描内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 - ${a}`
      })
    }
    resolve(data)
  })
}

const columns = [{
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '手机号',
  dataIndex: 'phone'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '描述',
  dataIndex: 'description',
  scopedSlots: {
    customRender: 'description'
  }
}]

export default {
  data () {
    return {
      columns
    }
  },
  methods: {
    loadData
  }
}
</script>
