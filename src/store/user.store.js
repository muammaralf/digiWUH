import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import instance from "../services/axios/instance"
import { toast } from "react-toastify"

const useUserStore = create(
    persist(
        (set, get) => ({
            user: null,
            accessToken: null,
            setUser: (user) => set({ user }),
            setAccessToken: (accessToken) => set({ accessToken }),
            fetch: async () => {
                try {
                    const {data} = await instance.get('/me')

                    get().setUser(data.data.user)
                } catch (e) {
                    toast.error(e.response?.data?.message?.message || 'Error')
                }
            },
            logout: () => {
                set({ user: null, accessToken: null })
            }
        }),
        {
          name: 'user-storage',
          storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useUserStore