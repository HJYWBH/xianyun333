export const state = ()=>({
    userInFo:{
        token:"",
        user:{
            
        }
    }
})

export const mutations = {
    setUserInfo(state,data){
        state.userInFo=data
    },

    loginout(state){
        state.userInFo={
            token:"",
            user:{}
        }
    }
}




export const actions = {
    login({ commit },data){
        this.$axios({
            url:"/accounts/login",
            method:'post',
            data
        }).then((res)=>{
            commit("setUserInfo",res.data)
            this.$router.go(-1)
        })
    },

    captcha( store , contactPhone ){
       return this.$axios({
            url: "/captchas",
            method: "POST",
            data: {
              tel: contactPhone,
            },
          }).then((res) => {
            //   console.log(res.data);
            const { code } = res.data;
            return code
          });
    
    }
}