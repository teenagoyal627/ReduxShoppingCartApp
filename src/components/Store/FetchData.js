import { cartActions } from "./cartSlice"
import { uiAction } from "./uiSlice"

export const fetchCartData=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch('https://fir-82470-default-rtdb.firebaseio.com/cart.json')
            if(!response.ok){
                throw new Error('could not fetch cart data')
            }
            const data=await response.json();
            return data;
        }
        try{
          const cartData= await fetchData()
          dispatch(cartActions.replaceCart(cartData))

        }catch(error){
            dispatch(
                uiAction.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Error fetching data.",
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "Pending",
        title: "wait data is being sending",
        message: "wait a minute",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://fir-82470-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed..");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "success!",
          message: "Data successfully send on the data base.",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Error on the data send.",
        })
      );
    }
  };
};
