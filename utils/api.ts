const API = {
  DASHBOARD: `/dashboard`,
  USERS: `/users`,
  USERS_UPDATE: (id: any) => `/users/${id}`,
  USERS_DELETE: (id: any) => `/users/${id}`,
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
