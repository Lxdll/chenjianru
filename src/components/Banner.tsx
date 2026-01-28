/**
 * @author: luxudongg@gmail.com
 * description
 */

interface BannerProps {}

export default function Banner(props: BannerProps) {
  const renderItem = (text: string) => {
    return <div className="mx-2 cursor-pointer">{text}</div>;
  };
  return (
    <div className="flex h-16 w-full flex-shrink-0 items-center justify-center bg-black text-sm text-white">
      {renderItem('关于我')}
      {/* <span>|</span> */}
      {renderItem('作品集')}
    </div>
  );
}
