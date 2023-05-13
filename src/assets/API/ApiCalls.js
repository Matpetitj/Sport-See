import userDatas from "../MockedDatas/user.json"

export async function callApi(id, endpoint) {
    fetch(`../MockedDatas/user.json` + {id} + {endpoint})
     .then((res) => {
        if (!res) {
            throw new Error (
                'An error occured in the fetch process',
                res.status
            )
        }
     })
}


export function getEndpointByService(service, userId) {
    switch (service) {
      case "activities":
        return `user/${userId}/performance`;
  
      case "average-sessions":
        return `user/${userId}/average-sessions`;
  
      case "daily-activity":
        return `user/${userId}/activity`;
  
      case "firstName":
        return `user/${userId}`;
  
      case "key-data":
        return `user/${userId}`;
  
      case "today-score":
        return `user/${userId}`;
  
      default:
        return null;
    }
  }