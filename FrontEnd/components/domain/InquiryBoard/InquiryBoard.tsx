import { useState } from 'react';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';

interface InquiryBoardProps {
  inquiries: Array<{
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    isAnswered: boolean;
  }>;
}

export default function InquiryBoard({ inquiries }: InquiryBoardProps) {
  const [selectedInquiry, setSelectedInquiry] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {inquiries.map((inquiry) => (
        <Card key={inquiry.id} className="hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">{inquiry.title}</h3>
              <p className="text-sm text-gray-500">
                작성자: {inquiry.author} | 작성일: {inquiry.createdAt}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {inquiry.isAnswered ? (
                <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded">
                  답변완료
                </span>
              ) : (
                <span className="px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded">
                  답변대기
                </span>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedInquiry(selectedInquiry === inquiry.id ? null : inquiry.id)}
              >
                {selectedInquiry === inquiry.id ? '접기' : '더보기'}
              </Button>
            </div>
          </div>
          {selectedInquiry === inquiry.id && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="whitespace-pre-line">{inquiry.content}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
