export const userLogin = (value)=>{
    localStorage.setItem("user" ,JSON.stringify({isLoggedIn:value}));

    return {
        type : "LOGIN_SUCCESS",
        payload:{
            isLoggedIn:value
        },
    }
}
export const userLogout = (value)=>{
    localStorage.removeItem("user");

    return {
        type : "LOG_OUT",
        payload:{
            isLoggedIn:value
        },
    }
}

export const addCart = (value)=>{

    return {
        type : "ADD_TO_CART",
        payload:value,
    }
}

export const removeCartItem = (value)=>{

    return {
        type : "REMOVE_TO_CART",
        payload:{id:value},
    }
}

export const removeALLItem = ()=>{

    return {
        type : "REMOVE_ALL_CART_ITEM",
    }
}