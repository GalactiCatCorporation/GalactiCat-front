import axios from 'axios';

const API_URL = 'http://localhost:8888/api/vols';

class RideService {
    
  async createRide(start, end, steps, date) {
    const dateInitiale = new Date(date);
    const annee = dateInitiale.getFullYear();
    const mois = (dateInitiale.getMonth() + 1).toString().padStart(2, "0");
    const jour = dateInitiale.getDate().toString().padStart(2, "0");
    const heures = dateInitiale.getHours().toString().padStart(2, "0");
    const minutes = dateInitiale.getMinutes().toString().padStart(2, "0");
    const secondes = dateInitiale.getSeconds().toString().padStart(2, "0");
    const dateFinale = `${annee}-${mois}-${jour}T${heures}:${minutes}:${secondes}`;

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json'
    };

    const data = {
      "depart": start,
      "arrivee": end,
      "etapes": steps,
      "dateDepart": dateFinale,
    };

    // console.log(data)
    const response = await axios
      .post(API_URL, data, {
        headers
      })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
    return response.data;
  }

}

export default new RideService();