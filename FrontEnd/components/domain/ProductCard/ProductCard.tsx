import { FC } from 'react';
import { formatCurrency } from '../../../utils/currencyFormatter';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  className?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  description,
  className,
}) => {
  return (
    <Link href={`/products/${id}`} className={`block ${className || ''}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
          <p className="mt-2 text-sm font-medium text-gray-900">{formatCurrency(price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
