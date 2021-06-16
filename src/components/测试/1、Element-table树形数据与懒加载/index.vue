<template>
    <div class="content">
        <h1>Element-table树形数据与懒加载</h1>
        <el-table 
            :data="tableData1" 
            style="width: 100%" 
            row-key="Id" 
            border lazy 
            :load="load" 
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData1: [
                {Id: 1,date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}, 
                {Id: 2,date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1517 弄'}, 
                {Id: 3,date: '2016-05-01',name: '王小虎',address: '上海市普陀区金沙江路 1519 弄'}, 
                {Id: 4,date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄',hasChildren: true}
            ]
        }
    },
    methods: {
        load(tree, treeNode, resolve) {
            resolve([
                {Id: 31,date: '2016-05-01',name: '王小虎',address: '上海市普陀区金沙江路 1519 弄'}, 
                {Id: 32,date: '2016-05-01',name: '王小虎',address: '上海市普陀区金沙江路 1519 弄'}
            ])
      }
    }
}
</script>