import axios from 'axios';

const create = (baseURL = 'http://api.jakarta.go.id/v1/') => {
  const api = axios.create({
    baseURL,
    headers: {
      'Authorization': '1S6ZcVHJe01cHoGbM7okG8P2D8vJFEWLADFsc8rKnypzcTozBL2jP0tJ+ZyTVkbB'
    },
    timeout: 10000
  });

  const fetchUmum = () => api.get('rumahsakitumum');
  const fetchKhusus = () => api.get('rumahsakitkhusus');
  const fetchPuskesmas = () => api.get('puskesmas');
  
  return {
    fetchUmum,
    fetchKhusus,
    fetchPuskesmas
  };
};

export default {
  create
};
