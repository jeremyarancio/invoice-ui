import { Inbox, User } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { user } from "@/types/user";

// Menu items.
const items = [
    {
        title: "Invoices",
        url: "/invoices",
        icon: Inbox,
    },
    {
        title: "Clients",
        url: "/clients",
        icon: User,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-6">
                        Invoice Manager
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="flex space-x-4">
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-900"></div>
                    <div className="grid flex-1 text-left text-sm">
                        <span className="truncate font-medium">
                            {user.username}
                        </span>
                        <span className="truncate text-xs">{user.email}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    );
}
