import { UseQueryOptions, useQuery, UseMutationOptions, useMutation } from '@tanstack/react-query';
import authService from '../services/authService';
import { User, LoginRequest, SignupRequest, AuthResponse } from '../types/auth';

// Query Keys
export const authKeys = {
  user: () => ['user'] as const,
};

// Queries
export const useUserQuery = (
  options?: Omit<UseQueryOptions<User, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: () => authService.getUser(),
    ...options,
  });
};

// Mutations
export const useLoginMutation = (
  options?: Omit<UseMutationOptions<AuthResponse, Error, LoginRequest>, 'mutationFn'>
) => {
  return useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data.email, data.password),
    ...options,
  });
};

export const useSignupMutation = (
  options?: Omit<UseMutationOptions<AuthResponse, Error, SignupRequest>, 'mutationFn'>
) => {
  return useMutation({
    mutationFn: (data: SignupRequest) => authService.signup(data),
    ...options,
  });
};

export const useLogoutMutation = (
  options?: Omit<UseMutationOptions<void, Error, void>, 'mutationFn'>
) => {
  return useMutation({
    mutationFn: () => authService.logout(),
    ...options,
  });
};
