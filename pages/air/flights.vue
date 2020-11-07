<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <FlightsFilters :data="newObtoo" @changeCompany="changeCompany"/>
                
                <!-- 航班头部布局 -->
               
                <FlightsListHead/>
              
                
                
                <!-- 航班信息 -->
                <FlightsItem
                v-for="(item,index) in datalist " :key="index"
                :data="item"
                />
                    <!-- 分页 -->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="pageIndex"
                  :page-sizes="[5, 10, 15, 20]"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </div>
            

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
                <FlightsAside/>
            </div>
        </el-row>
    </section>
</template>

<script>

// import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead"
import FlightsItem from "@/components/air/flightsItem"
import FlightsFilters from "@/components/air/flightsFilters"
import FlightsAside from "@/components/air/flightsAside"
export default {
    components: {
        FlightsListHead,
        FlightsItem,
        FlightsFilters,
        FlightsAside
    },
    data(){
        return {
            newOb:{
                flights:[],
                info:{},
                options:{}
            },
            newObtoo:{
                flights:[],
                info:{},
                options:{}
            },
            // datalist:[],
            pageIndex:1,
            pagesize:5,
            total:0
        }
    },
    mounted () {
        this.getData()
    },
    computed: {
        datalist(){
            return this.newOb.flights.slice((this.pageIndex-1)*this.pagesize,this.pageIndex*this.pagesize)
       }
    },
    watch: {
        $route(){
            this.getData()
        }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize = val
        this.pageIndex = 1
        // this.fengzhuang()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageIndex = val
        // this.fengzhuang()
      },
      changeCompany(arr){
          if(arr){
              this.pageIndex = 1
              this.newOb.flights=arr
              console.log(arr.length);
              this.total = arr.length;
          }
      },
      getData(){
          this.pageIndex = 1
          this.$axios({
            url:"/airs",
            params:this.$route.query
        }).then((res)=>{
            this.newOb=res.data
            this.newObtoo = { ...res.data }
            console.log(res.data);
            // this.fengzhuang()
            // this.datalist = res.data.flights.slice(0,this.pagesize)
            this.total = res.data.total
        })
      }
      
    //   fengzhuang(){
    //       this.datalist = this.newOb.flights.slice((this.pageIndex-1)*this.pagesize,this.pageIndex*this.pagesize)
    //   }

    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>