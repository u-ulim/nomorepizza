import { MainSlider } from "@/components/main/MainSlider";
import { Menu } from "@/components/main/Menu";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <MainSlider />
      <Menu />
    </div>
  );
}
