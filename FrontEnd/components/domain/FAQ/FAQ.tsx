import { useState } from 'react';
import Card from '../../ui/Card/Card';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQProps {
  faqs: FAQItem[];
  categories: string[];
}

export default function FAQ({ faqs, categories }: FAQProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          전체
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredFaqs.map(faq => (
          <Card key={faq.id} padding="none">
            <button
              className="w-full text-left px-6 py-4 focus:outline-none"
              onClick={() => toggleItem(faq.id)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{faq.question}</span>
                <span className="text-gray-400">
                  {openItems.has(faq.id) ? '−' : '+'}
                </span>
              </div>
            </button>
            {openItems.has(faq.id) && (
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
