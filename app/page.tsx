import { MainSlider } from "@/components/home/slide/MainSlider";
import { Menu } from "@/components/home/menu/Menu";
import { Brand } from "@/components/home/brand/Brand";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <MainSlider />
      <Menu />
      <Brand />
    </div>
  );
}
