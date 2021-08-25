import configService from "./config-service"

async function getRequest(resource) {
    const url = `${configService.serverHost}/${resource}/`
    const response = await fetch(url, { method: 'get' })
    return await response.json()
}

async function postRequest(resource, data) {
    const url = `${configService.serverHost}/${resource}`
    const response = await fetch(url, { method: "post", body: JSON.stringify(data) })
    return await response.json()
}

async function putRequest(resource, data) {
    const url = `${configService.serverHost}/${resource}`
    const response = await fetch(url, { method: "put", body: JSON.stringify(data) })
    return await response.json()
}

async function deleteRequest(resource, data) {
    const url = `${configService.serverHost}/${resource}`
    const response = await fetch(url, { method: "post", body: JSON.stringify(data) })
    return await response.json()
}

const apiService = {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
}

export default apiService

