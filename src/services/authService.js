import axios from 'axios';

const API_URL = 'http://localhost:8888/api/v1/auth/';

class AuthService {
    constructor() {
        this.isLoggedIn = false;
        this.checkLoggedIn();
    }
    
  login(email, password) {
    return axios
      .post(API_URL + 'authenticate', {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        return response.data.token;
      });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  register(email, password) {
    return axios
        .post(API_URL + 'register', {
          email,
          password
        })
        .then(response => {
            if (response.data.token) {
              localStorage.setItem('token', response.data.token);
            }
            return response.data.token;
        });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = token ? true : false;
  }
}

export default new AuthService();