import http from './http';
import LSservice from './localStorage.service';
///////////////// ajeitar /////////
class AuthService {
  async register(name: string, email: string, password: string, avatar: string) {
    return http
      .post('/users', {
        name,
        email,
        password,
        avatar
      })
      .then((response) => {
        if (response) {
          LSservice.setProfile(response.data);
          console.log(response)
        }

        return response.data;
      });
  }

  async login(email: string, password: string) {
    return http
      .post('/auth/login', {
        email,
        password
      })
      .then((response) => {
        if (response.data.access_token) {
          LSservice.setToken(response.data);
        }

        return response.data;
      });
  }

  logout() {
    LSservice.removeProfile();
  }
}

export default new AuthService();