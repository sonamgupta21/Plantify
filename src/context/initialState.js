import { fetchUser } from "../utils/fetchLocalStorageData";
import { fetchCart } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
export const initialState = {
  user: userInfo,
  plantItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
