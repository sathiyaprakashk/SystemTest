import axios  from "axios";
import { baseModel } from "./model";

export const apiService ={
    getList: async ()=>{
        const result = await axios.get<baseModel[]>('https://reqres.in/api/users?page=2');
        return result.data;
    }
}