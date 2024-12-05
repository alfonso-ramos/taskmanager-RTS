import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { UserRegistrationForm } from '../types/index';

export async function createAccount(formatData: UserRegistrationForm) {
    try {
        const url = '/auth/create-account'
        const { data } = await api.post<string>(url, formatData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)

        }
    }
    
}