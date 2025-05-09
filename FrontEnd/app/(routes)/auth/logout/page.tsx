import { useEffect } from 'react';
import { useAuth } from '../../../../hooks/useAuth';

export default function LogoutPage() {
  const { logout } = useAuth();
  useEffect(() => { logout(); }, [logout]);
  return <p>로그아웃 중입니다...</p>;
}
