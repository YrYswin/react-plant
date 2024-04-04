import http from './http';
import TokenService from './token.service';
///////////////// ajeitar /////////
class AuthService {
  async login(email: string, password: string) {
    return http
      .post('/auth/login', {
        email,
        password
      })
      .then((response) => {
        if (response.data.access_token) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

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
          TokenService.setUser(response.data);
          console.log(response)
        }

        return response.data;
      });
  }
}

export default new AuthService();