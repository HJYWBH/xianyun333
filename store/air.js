export const state = ()=>{
    return {
        infoData:{
            seat_infos:{}
        },
        allprice:0
    }
}

export const mutations = {
    setInfoData(state,da){
        state.infoData=da
    },


    setallPrice(state,daa){
        state.allprice = daa
    }
}