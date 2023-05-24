import userDatas from "../assets/MockedDatas/user.json"

// Fonction callApi utilisant simulateEndpoint
export function callApi(id, endpoint) {
  const response = simulateEndpoint(id, endpoint);
  if (response instanceof Error) {
    console.error(response);
    return Promise.reject(response);
  } else {
    return Promise.resolve(response);
  }
}

// Fonction pour simuler les endpoints
export function simulateEndpoint(id, endpoint) {
  const userData = userDatas.find(data => data.data.id === id);
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