import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Maker Lab Mall',
  description: '교육용 AI 키트 및 교육 과정 쇼핑몰',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className="text-xl font-bold text-blue-600">
                    AI Maker Lab Mall
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/products" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    상품
                  </a>
                  <a href="/education" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    교육
                  </a>
                  <a href="/company" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    회사소개
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                <a href="/auth/login" className="text-gray-900">로그인</a>
                <a href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md">회원가입</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">고객센터</h3>
                <p>전화: 1544-0000</p>
                <p>평일 09:00 - 18:00</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">회사정보</h3>
                <p>AI Maker Lab</p>
                <p>서울시 강남구</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">바로가기</h3>
                <ul className="space-y-2">
                  <li><a href="/company" className="hover:text-blue-600">회사소개</a></li>
                  <li><a href="/policy" className="hover:text-blue-600">이용약관</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">소셜미디어</h3>
                <div className="flex space-x-4">
                  {/* 소셜 미디어 아이콘들 추후 추가 */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
