export const state = () =>({ 
    userInfo: {}
});
   

//vuex定义了修改state的数据必须要通过mutations方法来修改（主要是为了可以在函数封装修改的逻辑）
export const mutations= {
    // 第一个参数必须是state， 第二个参数是传递进来的数据
     setUserInfo(state,data){
         state.userInfo=data
     }
};
// 异步修改state的数据，存放公共的请求函数，并且该函数可能会修改state的数据（不一定要修改）
export const actions= {
    // 登录函数可能会复用，会多个地方调用到，刚好该函数请求完成后修改state中userInfo
    login(store,data){
        return this.$axios({
            url:"/accounts/login",
            method:"POST",
            data
        }).then(res =>{
            // 登录成功后返回上一个页面
            this.$router.back();
            console.log(res);
           //调用user下的mutations的方法
         store.commit('setUserInfo', res.data);
         return true;
        })
    },
    //发送手机验证码
    sendCaptcha(store,data){
        return this.$axios({
            url:"/captchas",
            method: 'POST',
            data:{
                tel:data
            }
        })
    },
    // 注册的请求
    register(store, data){
        return this.$axios({
            url: "/accounts/register",
            method: 'POST',
            data
        }).then(res => {
            // 登录成功后返回上一个页面
            this.$router.back();
            // 调用user下的mutations的方法
            store.commit("setUserInfo", res.data);

            return true;
        })
    }
}