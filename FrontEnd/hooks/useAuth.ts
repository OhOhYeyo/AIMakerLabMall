import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import authService from '../services/authService';

export const useAuth = () => {
  const router = useRouter();

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      router.push('/');
      return response;
    } catch (error) {
      throw error;
    }
  }, [router]);

  const signup = useCallback(async (userData: any) => {
    try {
      const response = await authService.signup(userData);
      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // 실패하더라도 로컬 토큰은 삭제
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      router.push('/auth/login');
    }
  }, [router]);

  const forgotPassword = useCallback(async (email: string) => {
    try {
      const response = await authService.forgotPassword(email);
      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  return {
    login,
    signup,
    logout,
    forgotPassword
  };
};
