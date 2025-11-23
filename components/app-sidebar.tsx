"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  House,
  PanelLeft,
  Calendar1,
  StickyNote,
  Users,
  Settings,
  NotebookText,
  Lock,
  FileText,
  Square,
  IdCard,
  FolderKanban,
  DiamondPlus,
  SquareArrowOutUpRight,
  ToggleLeft,
  PanelTop,
  LayoutGrid,
  LayoutDashboard,
  Table2,
  Grid2x2,
  Headphones,
  Calendar,
  ChartNoAxesCombined,
  GamepadDirectional,
  Ellipsis,
  icons,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "NepseTrading",
      logo: AudioWaveform,
      plan: "",
    },
    {
      name: "NepseTrading",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "NepseTrading",
      logo: Command,
      plan: "Free",
    },
  ],
}

const navigation = [
  {
    
      section: "",
      items:[
        {
          title: "Dashboard",
          url: "#",
          icon: House,
          items: [
            {
              title: "History",
              url: "#",
            },
            {
              title: "Starred",
              url: "#",
            },
            {
              title: "Settings",
              url: "#",
            },
          ],
        },
        {
          title: "Layouts",
          url: "#",
          icon: PanelLeft,
        },
      ],
  },
  {
    section: "Apps & Pages",
    items: [
      { 
        title: "Calendar",
        url: "/calendar", 
        icon: Calendar 
      },
      { 
        title: "Invoice", 
        url: "/invoice", 
        icon: FileText, 
        isActive: false 
      },
      {
        title: "Users",
        url: "#",
        icon: Users,
        items: [
          { title: "List", url: "/users/list" },
          { title: "Details", url: "/users/details" },
        ],
      },
      {
      title: "Roles & permissions",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
      ],
    },
    {
      title: "Pages",
      url: "#",
      icon: NotebookText,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
      ],
    },
    {
      title: "Authentications",
      url: "#",
      icon: Lock,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
      ],
    },
    {
      title: "Wizard Examples",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
      ],
    },
    {
      title: "Modal Examples",
      url: "#",
      icon: Square,
    },
    ],
  },
  {
    section: "Components",
    items: [
      {
        title: "Card",
        url: "#",
        icon: IdCard,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
      {
        title: "User Interface",
        url: "#",
        icon: FolderKanban,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
      {
        title: "Extended UI",
        url: "#",
        icon: DiamondPlus,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
      {
        title: "Icons",
        url: "#",
        icon: SquareArrowOutUpRight,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    section: "FORMS & TABLES",
    items:[
      {
        title: "Form Elements",
        url: "#",
        icon: ToggleLeft,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
      {
        title: "Form Layouts",
        url: "#",
        icon: PanelTop,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
      {
        title: "Form Wizard",
        url: "#",
        icon: LayoutGrid,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
      {
        title: "Form Validation",
        url: "#",
        icon: LayoutDashboard,
      },
      {
        title: "Tables",
        url: "#",
        icon: Table2,
      },
      {
        title: "Data tables",
        url: "#",
        icon: Grid2x2,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
        ],
      },
    ]
  },
  {
    section: "CHARTS & MAPS",
    items:[
      {
        title:"Charts",
        url: "#",
        icon: ChartNoAxesCombined
      },
      {
        title: "Access Control",
        url: "#",
        icon: GamepadDirectional
      },
      {
        title: "Other",
        url: "#",
        icon: Ellipsis
      }
    ]
  },
  {
    section: "Misc",
    items: [
      {
        title: "Support",
        url: "#",
        icon: Headphones,
      },
      {
        title: "Documentation",
        url: "#",
        icon: FileText,
      },
    ]
  }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [collapsi, setCollapsi] = useState<boolean>(false);

  function toggleCollapsi() {
    setCollapsi((prev) => !prev);
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center transition-all scrollbar-custom">
        {!collapsi && <TeamSwitcher teams={data.teams} />}


        {/* <SidebarTrigger onClick={toggleCollapsi} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain sections={navigation} />
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}