import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useUserStore = create(
    persist(
        (set, get) => ({
            user: null,
            accessToken: null,
            setUser: (user) => set({ user }),
            setAccessToken: (accessToken) => set({ accessToken }),
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