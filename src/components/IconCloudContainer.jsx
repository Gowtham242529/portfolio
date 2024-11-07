import IconCloud from "@/components/ui/icon-cloud";
import { iconCloudIcons as slugs } from "@/assets/Data";

export default function IconCloudContainer() {
  return (
    <div className="relative flex w-full md:w-[50%] lg:w-[40%] h-full max-w-lg items-center justify-center overflow-hidden bg-background px-20 pt-4 pb-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
