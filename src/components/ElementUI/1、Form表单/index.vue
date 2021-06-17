<template>
    <div class="content">
        <h1>Form表单</h1>
        <div class="maincontent" id="PickUpOrderEdit">
            <el-form :model="updateForm" ref="updateForm" size="small" label-width="100px" :validate-on-rule-change="true">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="产品名称:" prop="ProductName">
                        <el-input v-model="updateForm.ProductName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="用车类型:" prop="AirportTransferType">
                        <el-input v-model="updateForm.AirportTransferType" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-table
                :data="updateForm.CustomerInfosList"
                stripe
                border
                header-cell-class-name="tableheader"
                style="width: 100%">
                    <el-table-column
                        prop="CustomerName"
                        label="姓名"
                        align="center">
                        <template slot-scope="scope">
                        <el-form-item :prop="'CustomerInfosList.' + scope.$index + '.CustomerName'" :rules="rules.CustomerName">
                            <el-input size="small" v-model="scope.row.CustomerName"></el-input>
                        </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="CustomerIdType"
                        label="证件类型"
                        align="center">
                        <template slot-scope="scope">
                        <el-form-item :prop="'CustomerInfosList.' + scope.$index + '.CustomerIdType'" :rules="rules.CustomerIdType">
                            <el-select v-model="scope.row.CustomerIdType" placeholder="请选择" @change="customerIdTypeChange($event, scope.$index)">
                                <el-option v-for="item in idType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                size="small">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        </template>
                    </el-table-column>
                </el-table>
                <el-form-item class="submit-radio">
                <el-button type="primary" size="mini" @click="submit('updateForm')">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
        return {
            updateForm: {
                CustomerInfosList: [{CustomerName: '', CustomerIdType: 1, CustomerIdNum: '', CustomerPhone: '', DepAddress: '', ArrAddress: '', Sequence: 0}]
            },
            rules: {
                CustomerName: [
                    { required: true, message: '乘客姓名不能为空', trigger: ['blur'] },
                    { max: 20, message: '乘客姓名不能超过20个字符，请重新输入', trigger: 'blur' }
                ],
                CustomerIdType: [
                    {required: true, message: '请选择证件类型', trigger: 'change'}
                ]
            },
            idType: [{value: 1, label: '身份证'}, {value: 2, label: '护照'}, {value: 3, label: '港澳台居民居住证'}, {value: 4, label: '其他'}],
        }
    },
    created(){
    },
 
    methods: {
        submit (form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    this.$message({message:'保存成功',type:'success'})
                } else {
                    this.$message({message:'校验不通过',type:'warning'})
                }
            })
        }
    },
}
</script>