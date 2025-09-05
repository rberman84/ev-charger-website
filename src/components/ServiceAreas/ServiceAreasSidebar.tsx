import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ServiceAreasSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openGroups, setOpenGroups] = useState({
    north: true,
    south: true,
    east: true,
  });

  // Town data organized by regions
  const townGroups = [
    {
      id: "north",
      title: "North/West Suffolk",
      towns: [
        { name: "Huntington", slug: "huntington", available: true },
        { name: "Commack", slug: "commack", available: true },
        { name: "Hauppauge", slug: "hauppauge", available: true },
        { name: "Smithtown", slug: "smithtown", available: true },
        { name: "Stony Brook", slug: "stony-brook", available: true },
        { name: "Port Jefferson", slug: "port-jefferson", available: true },
      ]
    },
    {
      id: "south",
      title: "South Shore", 
      towns: [
        { name: "Babylon", slug: "babylon", available: true },
        { name: "Islip", slug: "islip", available: true },
        { name: "Bay Shore", slug: "bay-shore", available: true },
        { name: "Sayville", slug: "sayville", available: true },
        { name: "Patchogue", slug: "patchogue", available: true },
        { name: "Ronkonkoma", slug: "ronkonkoma", available: true },
      ]
    },
    {
      id: "east",
      title: "Central/East & Hamptons",
      towns: [
        { name: "Brookhaven", slug: "brookhaven", available: true },
        { name: "Farmingville", slug: "farmingville", available: true },
        { name: "Holbrook", slug: "holbrook", available: true },
        { name: "Riverhead", slug: "riverhead", available: true },
        { name: "Southampton", slug: "southampton", available: true },
        { name: "East Hampton", slug: "east-hampton", available: true },
        { name: "Montauk", slug: "montauk", available: true },
        { name: "Shelter Island", slug: "shelter-island", available: true },
      ]
    }
  ];

  // Load saved group states from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('ev-service-areas-groups');
    if (savedState) {
      try {
        setOpenGroups(JSON.parse(savedState));
      } catch (e) {
        // Use default state if parsing fails
      }
    }
  }, []);

  // Save group states to localStorage
  const toggleGroup = (groupId: keyof typeof openGroups) => {
    const newState = {
      ...openGroups,
      [groupId]: !openGroups[groupId]
    };
    setOpenGroups(newState);
    localStorage.setItem('ev-service-areas-groups', JSON.stringify(newState));
  };

  // Filter towns based on search term
  const filterTowns = (towns: typeof townGroups[0]['towns']) => {
    if (!searchTerm) return towns;
    return towns.filter(town => 
      town.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Check if group should be visible (has matching search results)
  const shouldShowGroup = (towns: typeof townGroups[0]['towns']) => {
    if (!searchTerm) return true;
    return filterTowns(towns).length > 0;
  };

  return (
    <Sidebar className="w-64 border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          EV Charger Installation by Town
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search towns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
            aria-label="Search towns"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        {townGroups.map((group) => {
          const filteredTowns = filterTowns(group.towns);
          const isVisible = shouldShowGroup(group.towns);
          
          if (!isVisible) return null;

          return (
            <SidebarGroup key={group.id} className="mb-2">
              <Collapsible
                open={openGroups[group.id as keyof typeof openGroups]}
                onOpenChange={() => toggleGroup(group.id as keyof typeof openGroups)}
              >
                <CollapsibleTrigger asChild>
                  <SidebarGroupLabel className="cursor-pointer hover:bg-muted/50 rounded px-2 py-1 transition-colors">
                    {group.title}
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu className="space-y-1">
                      {filteredTowns.map((town) => (
                        <SidebarMenuItem key={town.slug}>
                          <SidebarMenuButton asChild>
                            {town.available ? (
                              <Link
                                to={`/service-areas/${town.slug}`}
                                className="flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm hover:bg-muted transition-colors"
                              >
                                <MapPin className="w-4 h-4 text-electric-green" />
                                <span>{town.name}</span>
                              </Link>
                            ) : (
                              <div className="flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm text-muted-foreground cursor-not-allowed">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span>{town.name}</span>
                                <span className="text-xs">(Coming Soon)</span>
                              </div>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};

export default ServiceAreasSidebar;