import { create } from 'zustand';
import { getUsers, createUser, updateUser, deleteUser } from '../services/api';

const useUserStore = create((set, get) => ({
    users: [],
    loading: false,
    fetchUsers: async () => {
        set({ loading: true });
        try {
            const response = await getUsers();
            set({ users: response.data });
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            set({ loading: false });
        }
    },
    addUser: async (data) => {
        await createUser(data);
        await get().fetchUsers();
    },
    updateUserById: async (id, data) => {
        await updateUser(id, data);
        await get().fetchUsers();
    },
    deleteUserById: async (id) => {
        await deleteUser(id);
        await get().fetchUsers();
    }
}));

export default useUserStore;
