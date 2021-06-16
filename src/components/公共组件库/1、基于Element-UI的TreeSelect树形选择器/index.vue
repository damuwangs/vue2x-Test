<template>
    <div class="content">
        <h1>基于Element-UI的TreeSelect树形选择器</h1>
        <SelectTree
            :props="props"
            :options="optionData"
            :value="valueId"
            :clearable="isClearable"
            :accordion="isAccordion"
            @getValue="getValue($event)"
        />
        ID为：{{valueId}}
    </div>
</template>

<script>
import SelectTree from "./treeSelect.vue";
import treeJson from './tree.json';
export default {
    components: {
        SelectTree
    },
    data () {
        return {
            isClearable: true, // 可清空（可选）
            isAccordion: true, // 可收起（可选）
            valueId: 1, // 初始ID（可选）
            props: {
                // 配置项（必选）
                value: "id",
                label: "name",
                children: "children"
            },
            // 选项列表（必选）
            list: [],
        }
    },
    created(){
        this.getNodeTree(treeJson);
        let obj = {}
        this.list = this.list.reduce((item, next) => {
            obj[next.id] ? '' : obj[next.id] = true && item.push(next)
            return item
        }, [])
    },
    computed: {
        /* 转树形数据 */
        optionData() {
            let cloneData = JSON.parse(JSON.stringify(this.list));// 对源数据深度克隆
            return cloneData.filter(father => {
                // 循环所有项，并添加children属性
                let branchArr = cloneData.filter(child => father.id == child.parentId); // 返回每一项的子级数组
                branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
                return father.parentId == 0; //返回第一层
            })
        }
    },
    methods: {
        // 取值
        getValue(value) {
            this.valueId = value;
            console.log(this.valueId);
        },
        getNodeTree(tree){
            for(var i in tree){
                if(typeof tree[i] == 'object'){
                    this.getNodeTree(tree[i])
                }else{
                    this.list.push(
                        {
                            "id":tree["id"],
                            "parentId":tree["parentId"],
                            "name":tree["goodsTypeName"]
                        }
                    )
                }
            }
        console.log('this.list = ', this.list);
        }
    }
}
</script>