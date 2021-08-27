import apiService from "../../services/api-service"

const resource = 'compromissos'

async function getAll() {
    return await apiService.getRequest(resource)
}

async function getOneById(id) {
    return await apiService.getRequest(`${resource}/${id}`)
}

async function updateOneById(id, body) {
    return await apiService.putRequest(`${resource}/${id}`, body)
}

async function createOne(body) {
    return await apiService.postRequest(resource, body)
}

async function deleteOneById(id) {
    await apiService.deleteRequest(`${resource}/${id}`)
}

const compromissosController = {
    getAll,
    getOneById,
    updateOneById,
    createOne,
    deleteOneById,
}

export default compromissosController