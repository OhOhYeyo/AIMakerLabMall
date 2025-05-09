'use client';

import { useState } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import Button from '../../../../components/ui/Button/Button';
import Card from '../../../../components/ui/Card/Card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Password reset request failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            비밀번호 찾기
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            가입하신 이메일 주소를 입력해주세요.
          </p>
        </div>
        {!isSubmitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                이메일 주소
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Button type="submit" className="w-full">
                비밀번호 재설정 링크 받기
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600">
              비밀번호 재설정 링크를 이메일로 발송했습니다.
              이메일을 확인해주세요.
            </p>
            <Button
              onClick={() => window.location.href = '/auth/login'}
              className="w-full"
            >
              로그인 페이지로 돌아가기
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
