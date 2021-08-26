import apiService from "../../services/api-service"

const resource = 'auth'

async function login(credentials) {
    const response = await apiService.postRequest(`${resource}/login`, credentials)

    if(response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken)         
    } else {
        throw new Error(response.message)
    }
}

async function register(credentials) {
    const response = await apiService.postRequest(`${resource}/register`, credentials)
    
    if(response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken)    
    } else {
        throw new Error(response.message)
    }
}

async function validateAccessToken() {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if(!accessToken) {
            return false
        }
        const response = await apiService.postRequest(`${resource}/validate-token`, { accessToken })
        return response.isValid        
    } catch (error) {
        console.error(error)
        return false
    }
}

const usuariosController = {
    validateAccessToken,
    login,
    register,
}

export default usuariosController