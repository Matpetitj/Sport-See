import userDatas from "../MockedDatas/user.json"

export function callApi(id, endpoint) {
  fetch(`http://localhost:3000/user/${id}/${endpoint}`)
    .then(res => {
      console.log(res);
      const data = res.json();
      if(res.ok) {
        return data
      } else {
        throw new Error (
          'Error ! An error occured in the fetch method',
          res.status
        )
      }
    })
}

export function getEndpointByService(service, userId) {
    switch (service) {
      case "activity":
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

// export async function callApi(id, endpoint) {
//     fetch(`http://localhost:3000/user/${id}/${endpoint}`)
//       .then(async response => {
//         const data = await response.json();

//         if(!response.ok) {
//           const error = (data && data.message) || response.statusText;
//           return Promise.reject(error);
//         }
//         this.setState({ totalReactPackages: data.total})
//       })
//       .catch(error => {
//         this.setState({ errorMessage: error.toString() });
//         console.error('An error occured in the fetch method', error);
//       });
// }