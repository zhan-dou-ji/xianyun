// 保存air下的数据
export const state = () => ({
    //历史搜索记录
    history:[], 
    allPrice:0
});
// 同步修改state的数据
export const mutations = {
    //自定义一个函数，修改上面的属性
    // mutations函数的第一个参数必须是state，state就是上面的state对象
    setHistory(state, data){
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        state.history.unshift(data);
    },
    setAllPrice(state, price){
        state.allPrice=price;
    }
}

