export const formatDate = () => {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [year, month, day].join('-');
  };

const rand = () => Math.random().toString(36).substr(2);
export const fakeToken = () => rand() + rand();

export const getAuthorizationToken = () =>
  `Bearer ${localStorage.getItem('token') || ''}`;