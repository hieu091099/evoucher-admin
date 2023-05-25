const API_ROOT = process.env.NEXT_APP_API_URL || '';
const API = {
  DASHBOARD: `${API_ROOT}/dashboard`,
  AUTH: {
    LOGIN: `${API_ROOT}/auth/login`,
    REGISTER: `${API_ROOT}/auth/register`,
    CHANGE_PASSWORD: `${API_ROOT}/changePassword/`,
    FORGOT_PASSWORD: `${API_ROOT}/forgetPassword`,
    FORGOT_PASSWORD_VERIFY_OTP: `${API_ROOT}/forgetPassword/verifyOtp`,
    RESET_PASSWORD: `${API_ROOT}/forgetPassword/resetPassword`,
  },
};

export default API;