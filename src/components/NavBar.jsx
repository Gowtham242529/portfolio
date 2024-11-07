import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function NavBar() {
  return (
    <div className="flex pt-8 px-10 w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        desktopClassName="justify-center"
      />
    </div>
  );
}
