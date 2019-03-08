import Keycloak from 'keycloak-js';
import store from '../store';

export default class KeycloakAuthService {
  constructor() {
    this.login = this.login.bind(this);

    this.onAuthSuccess = this.onAuthSuccess.bind(this);
    this.onAuthError = this.onAuthError.bind(this);
    this.onAuthRefreshError = this.onAuthRefreshError.bind(this);
    this.updateToken = this.updateToken.bind(this);

    this.keycloak = Keycloak({
      url: process.env.VUE_APP_KEYCLOAK_URL,
      realm: process.env.VUE_APP_KEYCLOAK_REALM,
      clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
    });

    this.keycloak.onAuthSuccess = this.onAuthSuccess;
    this.keycloak.onAuthError = this.onAuthError;
    this.keycloak.onAuthRefreshError = this.onAuthRefreshError;

    this.keycloak.init({});
  }

  login() {
    this.keycloak.login();
  }

  updateAccessToken() {
    store.dispatch('setAccessToken', this.keycloak.token);
  }

  onAuthSuccess() {
    this.updateAccessToken();
    store.dispatch('setAuthenticated', true);
  }

  onAuthError() {
    this.keycloak.clearToken();
  }

  onAuthRefreshError() {
    this.keycloak.clearToken();
  }

  async updateToken() {
    return await new Promise((resolve, reject) => {
      this.keycloak
        .updateToken(5)
        .success(resolve)
        .error(reject);
    });
  }
}
