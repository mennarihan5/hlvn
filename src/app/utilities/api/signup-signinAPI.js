import axios from "axios";

export const signUpApi = async (data) => {
    try {
        const response = await axios.post('https://documenter.getpostman.com/view/35371152/2sA3XJn5NB#b683397d-5a90-433d-a551-39c51cdbaf5e', 
        data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
         }
    );
        return response.data;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error(error.response?.data?.message);
    }
};

export const signInApi = async (data) => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login',
         data,
         {
            headers: {
                'Content-Type': 'application/json'
            }
         }
    );
        console.log('Sign In API - Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error(error.response?.data?.message || 'Something went wrong');
    }
}