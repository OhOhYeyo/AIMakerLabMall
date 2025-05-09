'use client';

import { useState } from 'react';
import Card from '../../../components/ui/Card/Card';

const POLICIES = [
  {
    id: 'terms',
    title: '이용약관',
    content: `제1조 (목적)
이 약관은 AI Maker Lab(이하 "회사")이 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.

제2조 (정의)
1. "서비스"란 회사가 제공하는 모든 서비스를 의미합니다.
2. "회원"이란 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 개인 또는 법인을 의미합니다.

제3조 (약관의 효력 및 변경)
1. 이 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.
2. 회사는 약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.`,
  },
  {
    id: 'privacy',
    title: '개인정보처리방침',
    content: `1. 개인정보의 수집 및 이용 목적
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 관련 법령에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

2. 개인정보의 처리 및 보유기간
회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

3. 개인정보의 제3자 제공
회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 관련 법령에 의하여 허용되는 경우에만 개인정보를 제3자에게 제공합니다.`,
  },
  {
    id: 'shipping',
    title: '배송 정책',
    content: `1. 배송 소요기간
- 상품 배송은 결제 완료 후 1-3일 이내에 출고됩니다.
- 도서/산간 지역은 배송이 다소 지연될 수 있습니다.

2. 배송비 정책
- 기본 배송비: 3,000원
- 50,000원 이상 구매 시 무료배송
- 도서/산간 지역 추가 배송비가 발생할 수 있습니다.

3. 배송 조회
- 상품 발송 후 SMS로 운송장 번호가 발송됩니다.
- 마이페이지에서 배송 조회가 가능합니다.`,
  },
];

export default function PolicyPage() {
  const [activePolicy, setActivePolicy] = useState(POLICIES[0].id);

  const currentPolicy = POLICIES.find(p => p.id === activePolicy);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">이용약관 및 정책</h1>
      
      {/* 정책 탭 메뉴 */}
      <div className="flex space-x-4 mb-6">
        {POLICIES.map((policy) => (
          <button
            key={policy.id}
            onClick={() => setActivePolicy(policy.id)}
            className={`px-4 py-2 rounded-md ${
              activePolicy === policy.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {policy.title}
          </button>
        ))}
      </div>

      {/* 선택된 정책 내용 */}
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{currentPolicy?.title}</h2>
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-gray-600">
              {currentPolicy?.content}
            </pre>
          </div>
        </div>
      </Card>

      {/* 마지막 업데이트 정보 */}
      <p className="mt-6 text-sm text-gray-500 text-center">
        마지막 업데이트: 2025년 5월 9일
      </p>
    </div>
  );
}
