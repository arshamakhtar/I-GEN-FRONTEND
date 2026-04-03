"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "../ui/breadcrumb";

export default function BreadcrumbPageClient(){
    const path = usePathname()

    return( <BreadcrumbPage className="text-sm font-semibold text-gray-700 dark:text-gray-200">
    {path === "/" && "Home"}
    {path === "/create" && "Create"}
    </BreadcrumbPage>
    )
}