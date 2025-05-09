'use client';

import { useState } from 'react';
import ProductCard from '../../../components/domain/ProductCard/ProductCard';
import Card from '../../../components/ui/Card/Card';

const CATEGORIES = [
  '전체',
  'AI 로봇 키트',
  '프로그래밍 키트',
  '센서 모듈',
  '교육 교재',
];

const PRODUCTS = [
  {
    id: 1,
    title: 'AI 로봇 키트 Basic',
    price: 99000,
    imageUrl: '/images/products/robot-kit-basic.jpg',
    description: '인공지능의 기초를 배울 수 있는 초급자용 로봇 키트입니다.',
    category: 'AI 로봇 키트',
  },
  {
    id: 2,
    title: 'AI 로봇 키트 Advanced',
    price: 199000,
    imageUrl: '/images/products/robot-kit-advanced.jpg',
    description: '고급 AI 기능을 구현할 수 있는 중급자용 로봇 키트입니다.',
    category: 'AI 로봇 키트',
  },
  // 더미 데이터
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [sortBy, setSortBy] = useState<'latest' | 'price-low' | 'price-high'>('latest');

  const filteredProducts = PRODUCTS.filter(
    product => selectedCategory === '전체' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0; // 최신순은 기본 정렬 유지
    }
  });

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          {/* 카테고리 필터 */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 정렬 옵션 */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="latest">최신순</option>
            <option value="price-low">가격 낮은순</option>
            <option value="price-high">가격 높은순</option>
          </select>
        </div>
      </Card>

      {/* 상품 목록 */}
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
