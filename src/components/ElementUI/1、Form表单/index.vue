<template>
    <div class="content">
        <h1>Form表单</h1>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="1"></el-tab-pane>
            <el-tab-pane label="其它信息" name="2"></el-tab-pane>
        </el-tabs>
        <div class="maincontent">
            <el-form :model="updateForm" ref="updateForm" size="small" label-width="100px" :validate-on-rule-change="true">
                <div v-if="activeName == 1">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="姓名:" prop="name" :rules="rules.name">
                                <el-input v-model="updateForm.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="性别:" prop="sex" :rules="rules.sex">
                                <el-select v-model="updateForm.sex" placeholder="请选择">
                                    <el-option v-for="item in sexList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    size="small">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-table
                        :data="updateForm.goodsList"
                        stripe
                        border
                        header-cell-class-name="tableheader"
                        style="width: 100%">
                        <el-table-column
                            prop="CustomerName"
                            label="商品名称"
                            align="center">
                            <template slot-scope="scope">
                                <el-form-item :prop="'goodsList.' + scope.$index + '.goodName'" :rules="rules.goodName">
                                    <el-input size="small" v-model="scope.row.goodName"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="CustomerIdType"
                            label="商品类型"
                            align="center">
                            <template slot-scope="scope"> 
                                <el-form-item :prop="'goodsList.' + scope.$index + '.goodType'" :rules="rules.goodType">
                                    <el-select v-model="scope.row.goodType" placeholder="请选择" style="width:100%;margin-left:0px">
                                        <el-option v-for="item in sexList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        size="small">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column align="center">
                            <template slot="header" slot-scope="scope">
                                <i class="el-icon-circle-plus" @click="handleAdd()"></i>
                            </template>
                            <template slot-scope="scope" v-if="scope.$index != 0">
                                <i class="el-icon-remove" @click="handleDelete(scope.$index)"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div v-if="activeName == 2">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="工作:" prop="work" :rules="rules.work">
                                <el-input v-model="updateForm.work"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="地址:" prop="address" :rules="rules.address">
                                <el-input v-model="updateForm.address"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <el-button type="primary" size="mini" @click="submit('updateForm')" style="margin-top:20px">确定</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
        return {
            activeName: '1',
            updateForm: {
                goodsList: [{goodName: '', goodType: ''}]
            },
            rules: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: ['blur'] },
                ],
                sex: [
                    {required: true, message: '性别不能为空', trigger: 'change'}
                ],
                goodName: [
                    { required: true, message: '商品名称不能为空', trigger: ['blur'] },
                ],
                goodType: [
                    {required: true, message: '商品类型不能为空', trigger: 'change'}
                ],
                work: [
                    {required: true, message: '工作不能为空', trigger: ['blur']}
                ],
                address: [
                    {required: true, message: '地址不能为空', trigger: ['blur']}
                ],

            },
            sexList: [{value: 1, label: '男'}, {value: 2, label: '女'}],
        }
    },
    created(){
    },
 
    methods: {
        handleClick() {
            this.$nextTick(() => {
                this.$refs.updateForm.clearValidate()
            })
        },
        submit (form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    this.$message({message:'保存成功',type:'success'})
                    console.log(this.updateForm);
                }
            })
        },
        handleAdd () {
            if (this.updateForm.goodsList.length < 3) {
                let customerInfo = {}
                this.updateForm.goodsList.push(customerInfo)
            } else {
                this.$message({
                message: '最多添加三条',
                type: 'warning',
                duration: 3000
                })
            }
        },
        handleDelete (index) {
            this.updateForm.goodsList.splice(index, 1)
        },
    },
}
</script>