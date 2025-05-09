import axiosInstance from './axiosInstance';

export interface AuthService {
  login: (email: string, password: string) => Promise<any>;
  signup: (userData: any) => Promise<any>;
  forgotPassword: (email: string) => Promise<any>;
  resetPassword: (token: string, newPassword: string) => Promise<any>;
  logout: () => Promise<void>;
  getUser: () => Promise<any>;
}

const authService: AuthService = {
  login: async (email: string, password: string) => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  },

  signup: async (userData: any) => {
    const response = await axiosInstance.post('/auth/signup', userData);
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await axiosInstance.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token: string, newPassword: string) => {
    const response = await axiosInstance.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return response.data;
  },

  logout: async () => {
    await axiosInstance.post('/auth/logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  getUser: async () => {
    // 실제 구현에서는 토큰 기반 사용자 정보 반환
    return {
      id: 1,
      email: 'test@example.com',
      name: '테스트',
      role: 'USER',
      createdAt: '',
      updatedAt: '',
    };
  },
};

export default authService;
