/**
 * @author: luxudongg@gmail.com
 * description
 */

import { ItemType } from '@/type';
import { useState } from 'react';

interface ItemProps {
  item: ItemType;
  serialNumber: number;
}

export default function Item(props: ItemProps) {
  const { item, serialNumber } = props;
  const { title, description, date, onClick } = item;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`mt-10 flex cursor-pointer rounded-md ${isHover ? 'bg-[#ddd]' : ''}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <div className={`ml-2 text-[#ccc] ${isHover ? 'text-black' : ''}`}>
        #{serialNumber}
      </div>
      <div className="p-4">
        <div className="text-[24px] font-bold">
          {title}
          <span className="ml-2 text-sm text-[#ccc]">{date}</span>
        </div>
        <div className="mt-2 text-[#555]">{description}</div>
      </div>
    </div>
  );
}
