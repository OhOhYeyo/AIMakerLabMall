'use client';

import ProductCard from '../../../components/domain/ProductCard/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: 'AI 로봇 키트 Basic',
    price: 99000,
    imageUrl: '/images/products/robot-kit-basic.jpg',
    description: '인공지능의 기초를 배울 수 있는 초급자용 로봇 키트입니다.',
  },
  {
    id: 2,
    title: 'AI 로봇 키트 Advanced',
    price: 199000,
    imageUrl: '/images/products/robot-kit-advanced.jpg',
    description: '고급 AI 기능을 구현할 수 있는 중급자용 로봇 키트입니다.',
  },
  // 더미 데이터
];

export default function MainPage() {
  return (
    <div className="space-y-12">
      {/* 히어로 섹션 */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI Maker Lab Mall
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            AI 교육의 모든 것, AI Maker Lab Mall에서 시작하세요.
            혁신적인 교육 키트와 전문적인 교육 과정을 제공합니다.
          </p>
        </div>
      </div>

      {/* 추천 상품 섹션 */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">추천 상품</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* 교육 과정 섹션 */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              AI 교육 과정
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              초급부터 고급까지, 단계별 맞춤 교육 과정을 제공합니다.
            </p>
          </div>
          {/* 교육 과정 카드들은 추후 구현 */}
        </div>
      </div>
    </div>
  );
}
