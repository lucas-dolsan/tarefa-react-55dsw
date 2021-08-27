import configService from "./config-service"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}


async function getRequest(resource) {
    const url = `${configService.serverHost}/${resource}/`
    const response = await fetch(url, { headers, method: 'get' })
    return await response.json()
}

async function postRequest(resource, data) {
    const url = `${configService.serverHost}/${resource}`
    const response = await fetch(url, { headers, method: "post", body: JSON.stringify(data) })
    return await response.json()
}

async function putRequest(resource, data) {
    const url = `${configService.serverHost}/${resource}`
    const response = await fetch(url, { headers, method: "put", body: JSON.stringify(data) })
    return await response.json()
}

async function deleteRequest(resource, data) {
    const url = `${configService.serverHost}/${resource}`
    await fetch(url, { headers, method: "delete", body: JSON.stringify(data) })
}

const apiService = {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
}

export default apiService

