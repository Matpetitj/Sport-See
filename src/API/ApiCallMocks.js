import userDatas from "../assets/MockedDatas/user.json"

// export function callApi(id, endpoint) {
//   return fetch(`http://localhost:3000/user/${id}/${endpoint}`)
//     .then(res => {
//       console.log(res);
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error(
//           'Error! An error occurred in the fetch method',
//           res.status
//         );
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       alert(`Une erreur s'est produite. Veuillez réessayer.`);
//       // logService.logError(error);
//     });
// }

// Fonction callApi utilisant simulateEndpoint
export function callApi(userId, endpoint) {
  try {
    const response = simulateEndpoint(userId, endpoint);
    return Promise.resolve(response);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
// Fonction pour simuler les endpoints
function simulateEndpoint(userId, endpoint) {
  const userData = userDatas.find(data => data.data.id === userId);
  if (!userData) {
    throw new Error('User not found');
  }

  switch (endpoint) {
    case '':
      return userData.data;
    case 'activity':
      return userData.data.activity;
    case 'average-sessions':
      return userData.data['average-sessions'];
    case 'performance':
      return userData.data.performance;
    case 'key-data':
      return userData.data.keyData;
    case 'today-score':
      return userData.data.todayScore;
    default:
      throw new Error('Endpoint not found');
  }
}


