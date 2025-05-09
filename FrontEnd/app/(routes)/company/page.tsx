'use client';

import Image from 'next/image';
import Card from '../../../components/ui/Card/Card';
import FAQ from '../../../components/domain/FAQ/FAQ';

const COMPANY_VALUES = [
  {
    title: '혁신',
    description: '최신 AI 기술을 교육에 접목하여 혁신적인 학습 경험을 제공합니다.',
    icon: '🚀',
  },
  {
    title: '전문성',
    description: '각 분야 전문가들이 직접 설계한 커리큘럼으로 수준 높은 교육을 제공합니다.',
    icon: '📚',
  },
  {
    title: '실용성',
    description: '실제 현장에서 활용 가능한 실용적인 기술과 지식을 전달합니다.',
    icon: '💡',
  },
];

const FAQ_DATA = {
  faqs: [
    {
      id: 1,
      question: '교육 과정은 어떻게 구성되어 있나요?',
      answer: '초급, 중급, 고급 과정으로 나누어져 있으며, 각 과정은 이론과 실습을 병행하여 진행됩니다.',
      category: '교육',
    },
    {
      id: 2,
      question: '온라인 수업도 가능한가요?',
      answer: '네, 대부분의 과정은 온라인으로도 수강 가능합니다. 실습이 필요한 경우 키트를 배송해 드립니다.',
      category: '교육',
    },
    {
      id: 3,
      question: '교육 키트는 어떤 것들이 있나요?',
      answer: 'AI 로봇 키트, 센서 모듈 키트, 프로그래밍 학습 키트 등 다양한 교육용 키트를 제공하고 있습니다.',
      category: '제품',
    },
  ],
  categories: ['교육', '제품', '회사'],
};

export default function CompanyPage() {
  return (
    <div className="space-y-16">
      {/* 회사 소개 섹션 */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">AI Maker Lab</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI Maker Lab은 인공지능 교육의 혁신을 선도하는 에듀테크 기업입니다.
          우리는 최신 AI 기술을 누구나 쉽게 배우고 활용할 수 있도록 돕습니다.
        </p>
      </section>

      {/* 핵심 가치 섹션 */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">핵심 가치</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((value) => (
            <Card key={value.title} className="text-center p-6">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 연혁 섹션 */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">회사 연혁</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="font-bold">2025년</h3>
                  <p className="text-gray-600">AI 교육 플랫폼 런칭</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="flex-1 pl-8">
                  <h3 className="font-bold">2024년</h3>
                  <p className="text-gray-600">AI Maker Lab 설립</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        <FAQ faqs={FAQ_DATA.faqs} categories={FAQ_DATA.categories} />
      </section>

      {/* 연락처 섹션 */}
      <section className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">연락처</h2>
          <div className="space-y-4">
            <p>
              <span className="font-medium">주소:</span> 서울시 강남구 AI로 123
            </p>
            <p>
              <span className="font-medium">전화:</span> 02-123-4567
            </p>
            <p>
              <span className="font-medium">이메일:</span> contact@aimakerlab.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
