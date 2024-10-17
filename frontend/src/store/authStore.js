import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user:null,
    isAuthenticated:false,
    error:null,
    isCheckingAuth:true,

    signup: async (name, email, password) => {
        set({error:null});
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signup', {name, email, password});
            set({user:response.data.user, isAuthenticated:true});
        } catch (error) {
            set({error:error.response.data.message || "Error signing up"});
            throw error;
        }
    },

    login: async (email, password) => {
        set({error:null});
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {email, password});
            set({ user:response.data.user, isAuthenticated:true, error:null });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error logging in" });
            throw error; 
        }
    },

    verifyEmail: async (code) => {
        set({ error: null });
        try {
            const response = await axios.post('http://localhost:3000/api/auth/verify-email', { code });
            set({ user: response.data.user, isAuthenticated: true });
            return response.data;
        } catch (error) {
            set({ error: error.response.data.message || "Error verifying email" });
            throw error;
        }
    },

    checkAuth: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        set({ isCheckingAuth: true, error:null });
        try {
            const response = await axios.get('http://localhost:3000/api/auth/check-auth');
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
            set({ error: null, isAuthenticated: false, isCheckingAuth: false});
            throw error;
        }
        
    },
}));