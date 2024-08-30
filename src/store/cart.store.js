import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const {cart, isAdded} = get()

        if (!isAdded(item.id)) {
          set({
            cart: [...cart, item]
          })
        }
      },
      removeFromCart: (id) => {
        const {cart} = get()
        set({
          cart: cart.filter(item => item.id !== id)
        })
      },
      isAdded: (id) => {
        const {cart} = get()
        return !!cart.find((item) => item.id === id)
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCartStore