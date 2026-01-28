/**
 * @author: luxudongg@gmail.com
 * description
 */

import { ItemType } from '@/type';
import Item from './Item';

interface ProjectProps {}

const data: ItemType[] = [
  {
    title: '天涯明月刀',
    date: '2023/05/27',
    description: '开创次条模板、独立制作推文200余篇',
    onClick: () => {
      window.open('https://mp.weixin.qq.com/s/khcDoTH2-rEge17xOteB0A');
    },
  },
  {
    title: '樊登读书',
    date: '2024/05/23',
    description: '上稿【樊登读书】【读书有范】【读者】、单篇文章破10w+',
    onClick: () => {
      window.open('https://mp.weixin.qq.com/s/khcDoTH2-rEge17xOteB0A');
    },
  },

  {
    title: '天涯明月刀',
    date: '2023/05/27',
    description: '开创次条模板、独立制作推文200余篇',
    onClick: () => {
      window.open('https://mp.weixin.qq.com/s/khcDoTH2-rEge17xOteB0A');
    },
  },
  {
    title: '樊登读书',
    date: '2024/05/23',
    description: '上稿【樊登读书】【读书有范】【读者】、单篇文章破10w+',
    onClick: () => {
      window.open('https://mp.weixin.qq.com/s/khcDoTH2-rEge17xOteB0A');
    },
  },

  {
    title: '天涯明月刀',
    date: '2023/05/27',
    description: '开创次条模板、独立制作推文200余篇',
    onClick: () => {
      window.open('https://mp.weixin.qq.com/s/khcDoTH2-rEge17xOteB0A');
    },
  },
  {
    title: '樊登读书',
    date: '2024/05/23',
    description: '上稿【樊登读书】【读书有范】【读者】、单篇文章破10w+',
    onClick: () => {
      window.open('https://mp.weixin.qq.com/s/khcDoTH2-rEge17xOteB0A');
    },
  },
];

export default function Project(props: ProjectProps) {
  return (
    <div className="h-full w-2/3">
      <div className="my-2 text-[36px] font-extrabold">作品集</div>
      {data.map((item, index) => (
        <Item key={index} item={item} serialNumber={index + 1} />
      ))}
    </div>
  );
}
