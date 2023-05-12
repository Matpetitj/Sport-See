import userDatas from "../MockedDatas/user.json"

export async function callApi(id, endpoint) {
    fetch(`../MockedDatas/user.json`)
     .then((res) => {
        if (!res) {
            throw new Error (
                'An error occured in the fetch process',
                res.status
            )
        }
     })
}

export function callMock(id, endpoint) {
    let mockedData
    if (id === 12) {
        if (endpoint === '-activity') {
            mockedData = userDatas
        }
        if (endpoint === '-averagesession') {
            mockedData = userDatas
        }
        if (endpoint === '-performance') {
            mockedData = userDatas
        }
        if (endpoint === '') {
            mockedData = userDatas
        }
    } else if (id === 18) {
        if (endpoint === '-activity') {
            mockedData = userDatas
        }
        if (endpoint === '-averagesession') {
            mockedData = userDatas
        }
        if (endpoint === '-performance') {
            mockedData = userDatas
        }
        if (endpoint === '') {
            mockedData = userDatas
        }
    }
    return mockedData
}