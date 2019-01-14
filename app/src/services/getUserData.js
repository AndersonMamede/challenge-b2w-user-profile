function getUserData() {
  const url = '../mock-data.json';

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(result => console.info('?', result))
      // .then(resolve)
      .catch(reject);
  });
}

export default getUserData;
