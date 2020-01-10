<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
           <OrderForm :data="infoData"
           @setAllPrice="setAllPrice"/>

            <!-- 侧边栏 -->
            <OrderAside :data="infoData"
            :allPrice="allPrice"/>
        </el-row>
    </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm.vue";
import OrderAside from "@/components/air/OrderAside.vue";
export default {
    data(){
        return {
            infoData:{
                insurances:[],
                seat_infos: {}
            },
            allPrice:0
        }
    },
    components:{
        OrderForm,
        OrderAside
    },
    mounted(){
        const {id, seat_xid}=this.$route.query;
        this.$axios({
            url:"/airs/"+id,
            params:{
                seat_xid
            }
        }).then(res=>{
            console.log(res);
            this.infoData=res.data;
        })
    },
    methods: {
        setAllPrice(price){
            this.allPrice = price;
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>