import userDatas from "../MockedDatas/user.json"

export async function callApi() {
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