import { create } from 'zustand';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';

const useProductStore = create((set, get) => ({
    cards: [],
    loading: false,
    fetchCards: async () => {
        set({ loading: true });
        try {
            const response = await getProducts();
            set({ cards: response.data });
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            set({ loading: false });
        }
    },
    addCard: async (data) => {
        await createProduct(data);
        await get().fetchCards();
    },
    updateCardById: async (id, data) => {
        await updateProduct(id, data);
        await get().fetchCards();
    },
    deleteCardById: async (id) => {
        await deleteProduct(id);
        await get().fetchCards();
    }
}));

export default useProductStore;
