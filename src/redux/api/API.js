const getAPI = async url => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
    })
      .then(rs => resolve(rs.json()))
      .catch(err => reject(err));
  });
};
// await fetch(url,
//   {
//       method: 'GET'
//   });
const urlServe = 'http://45.119.213.225/timecard/';
const postAPI = async url => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(rs => resolve(rs.json()))
      .catch(err => reject(err));
  });
};
export const LoginAPI = async input => {
  let url = `${urlServe}api/login?email=${input.email}&password=${input.password}`;

  return await postAPI(url);
};
export const CompanyMemberAPI = async input => {
  // console.log('CompanyMemberAPI=====', input);

  let url = `${urlServe}api/user?api_token=${input.token}`;
  console.log(url);

  return await getAPI(url);
};
