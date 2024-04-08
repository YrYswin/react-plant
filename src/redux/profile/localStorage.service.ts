import { AuthState } from 'MyModels';
import { profileDataState, tokensState } from './types'

class TokenService {
  // getLocalRefreshToken() {
  //   const user = this.getUser();
  //   return user?.refresh_token;
  // }

  // getLocalAccessToken() {
  //   const user = this.getUser();
  //   return user?.access_token;
  // }

  // updateLocalRefreshToken(token: string) {
  //   const user = this.getUser();
  //   user.access_token = token;
  //   this.setUser(user);
  // }

  // updateLocalAccessToken(token: string) {
  //   const user = this.getUser();
  //   user.access_token = token;
  //   this.setUser(user);
  // }

  setProfile(profile: profileDataState) {
    console.log(JSON.stringify(profile));
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  setToken(tokens: tokensState) {
    console.log(JSON.stringify(tokens));
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }

  getProfile() {
    const profileJson = localStorage.getItem('profile');
    const profile = profileJson !== null ? JSON.parse(profileJson) : {};
    return profile;
  }

  getTokens() {
    const tokensJson = localStorage.getItem('tokens');
    const tokens = tokensJson !== null ? JSON.parse(tokensJson) : [];
    return tokens;
  }
  removeProfile() {
    localStorage.removeItem('profile');
    localStorage.removeItem('tokens');
  }
}

export default new TokenService();