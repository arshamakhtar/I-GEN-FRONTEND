"use client";

import { Home, Zap, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";
import { useBackgroundContext } from "~/hooks/useBackgroundContext";

export default function SidebarMenuItems() {
  const path = usePathname();
  const { useExperimentalUI, toggleExperimental } = useBackgroundContext();

  let items = [{ title: "Home", url: "/", icon: Home, active: false }];

  items = items.map((item) => ({
    ...item,
    active: path === item.url,
  }));

  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.active}>
            <Link href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}

      {/* Experimental UI Toggle */}
      <SidebarMenuItem>
        <SidebarMenuButton onClick={toggleExperimental}>
          {useExperimentalUI ? (
            <>
              <Sparkles className="h-4 w-4" />
              <span>Use default UI</span>
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              <span>Try experimental UI</span>
            </>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  );
}