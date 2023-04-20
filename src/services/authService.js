import axios from 'axios';

const API_URL = 'http://localhost:8888/api/v1/auth/';

class AuthService {
    constructor() {
        this.isLoggedIn = false;
        this.checkLoggedIn();
    }
    
  async login(email, password) {
    const response = await axios
      .post(API_URL + 'authenticate', {
        email,
        password
      });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data.token;
  }

  logout() {
    localStorage.removeItem('token');
    window.reload();
  }

  async register(email, password) {
    const response = await axios
      .post(API_URL + 'register', {
        email,
        password
      });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data.token;
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