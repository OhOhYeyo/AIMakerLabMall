'use client';

import { useState } from 'react';
import Card from '../../../components/ui/Card/Card';
import InquiryBoard from '../../../components/domain/InquiryBoard/InquiryBoard';
import Button from '../../../components/ui/Button/Button';

const COURSES = [
  {
    id: 1,
    title: 'AI 기초 과정',
    description: '인공지능의 기본 개념과 원리를 배우는 입문자를 위한 과정',
    duration: '4주',
    level: '초급',
    price: 299000,
    startDate: '2025-06-01',
  },
  {
    id: 2,
    title: 'AI 로봇 프로그래밍',
    description: 'AI 로봇 키트를 활용한 실습 중심의 프로그래밍 과정',
    duration: '8주',
    level: '중급',
    price: 499000,
    startDate: '2025-06-15',
  },
];

const DUMMY_INQUIRIES = [
  {
    id: 1,
    title: '수업 시간 문의',
    content: '평일 수업은 몇 시에 진행되나요?',
    author: '김철수',
    createdAt: '2025-05-08',
    isAnswered: true,
  },
  {
    id: 2,
    title: '수강 연령 제한',
    content: '중학생도 수강 가능한가요?',
    author: '박영희',
    createdAt: '2025-05-09',
    isAnswered: false,
  },
];

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState<'courses' | 'inquiry'>('courses');

  return (
    <div className="space-y-8">
      {/* 교육 소개 섹션 */}
      <div className="bg-blue-600 text-white rounded-lg p-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">AI 교육 프로그램</h1>
          <p className="text-lg">
            AI Maker Lab의 체계적인 교육 과정으로 인공지능 전문가로 성장하세요.
            초급부터 고급까지 단계별 맞춤 교육을 제공합니다.
          </p>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'courses'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            교육 과정
          </button>
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'inquiry'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            수업 문의
          </button>
        </nav>
      </div>

      {/* 교육 과정 목록 */}
      {activeTab === 'courses' && (
        <div className="grid gap-6 md:grid-cols-2">
          {COURSES.map((course) => (
            <Card key={course.id}>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="mt-2 text-gray-600">{course.description}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">기간:</span> {course.duration}
                  </div>
                  <div>
                    <span className="font-medium">시작일:</span> {course.startDate}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {course.price.toLocaleString()}원
                  </span>
                  <Button>신청하기</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* 수업 문의 게시판 */}
      {activeTab === 'inquiry' && (
        <div className="space-y-6">
          <Button onClick={() => alert('문의하기 모달 구현 예정')}>
            문의하기
          </Button>
          <InquiryBoard inquiries={DUMMY_INQUIRIES} />
        </div>
      )}
    </div>
  );
}
