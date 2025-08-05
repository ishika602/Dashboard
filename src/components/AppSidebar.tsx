import React from "react";
import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Plus,
  Projector,
  Search,
  Settings,
  User2,
  ChevronDown,
  
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarGroupAction,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import Image from "next/image";
import Link from "next/link";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";


const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader> 
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
              <Image src="/logo.svg" alt="logo" width={20} height={20}/>
              <span>Lama dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
                  {item.title==="Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel >
            Projects
          </SidebarGroupLabel>
          <SidebarGroupAction >
        <Plus /> <span className="sr-only">Add Project</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              <Projector/>
              See all projects
              </Link>

            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              <Plus/>
              Add Project
              </Link>

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
            Collapsable Group
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          </SidebarGroupLabel>
         <CollapsibleContent>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              <Projector/>
              See all projects
              </Link>

            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              <Plus/>
              Add Project
              </Link>

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
      </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
        


        <SidebarGroup>
          <SidebarGroupLabel >
            Nested Items
          </SidebarGroupLabel>
          
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              <Projector/>
              See all projects
              </Link>

            </SidebarMenuButton>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/#">
                  <Plus/>
                  Add Project
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/#">
                  <Plus/>
                  Add Category
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
          
        </SidebarMenu>
      </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
      
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <SidebarMenuButton>
      <User2/>John doe <ChevronUp className="ml-auto"/>
    </SidebarMenuButton>
  </DropdownMenuTrigger>
  {/* <DropdownMenuContent>
    <DropdownMenuItem>Account</DropdownMenuItem>
    <DropdownMenuItem>Setting</DropdownMenuItem>
    <DropdownMenuItem>Sign out</DropdownMenuItem>
  </DropdownMenuContent> */}
  <DropdownMenuContent align="end">
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator /> */}
    <DropdownMenuItem>Account</DropdownMenuItem>
    <DropdownMenuItem>Setting</DropdownMenuItem>
    <DropdownMenuItem>Sign out</DropdownMenuItem>
    {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
  </DropdownMenuContent>
</DropdownMenu>
</SidebarMenuItem>
        </SidebarMenu>
        
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;










