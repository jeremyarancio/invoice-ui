import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true)

    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
