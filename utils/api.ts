const API = {
  DASHBOARD: `/dashboard`,
  USERS: `/users`,
  USERS_UPDATE: (id: any) => `/users/${id}`,
  USERS_DELETE: (id: any) => `/users/${id}`,
  PARTNERS: `/partners`,
  PARTNERS_UPDATE: (id: any) => `/partners/${id}`,
  PARTNERS_DELETE: (id: any) => `/partners/${id}`,
  GAMES: `/games`,
  GAMES_UPDATE: (id: any) => `/games/${id}`,
  GAMES_DELETE: (id: any) => `/games/${id}`,
  TRANSACTIONS: `/transactions`,
  TRANSACTIONS_UPDATE: (id: any) => `/transactions/${id}`,
  TRANSACTIONS_DELETE: (id: any) => `/transactions/${id}`,
  VOUCHERS: `/vouchers`,
  VOUCHERS_UPDATE: (id: any) => `/vouchers/${id}`,
  VOUCHERS_DELETE: (id: any) => `/vouchers/${id}`,
  AUTH: {
    LOGIN: `/login`,
    REGISTER: `/register`,
    CHANGE_PASSWORD: `/changePassword/`,
    FORGOT_PASSWORD: `/forgetPassword`,
    FORGOT_PASSWORD_VERIFY_OTP: `/forgetPassword/verifyOtp`,
    RESET_PASSWORD: `/forgetPassword/resetPassword`,
  },
};

export default API;
