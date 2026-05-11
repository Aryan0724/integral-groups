"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Database, 
  Layers, 
  Home, 
  FileText, 
  PlayCircle, 
  Users, 
  UserCheck, 
  BarChart3, 
  Settings, 
  Activity,
  Search,
  Bell,
  Command,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Terminal,
  Cpu,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

// Space Grotesk will be handled via globals.css or local font import in real app
// For now we assume font-sans is Inter/Space Grotesk style

const sidebarItems = [
  { id: 'dashboard', name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { id: 'ecosystem', name: "Ecosystem", icon: Database, path: "/admin/ecosystem" },
  { id: 'departments', name: "Departments", icon: Layers, path: "/admin/departments" },
  { id: 'homepage', name: "Homepage", icon: Home, path: "/admin/homepage" },
  { id: 'intelligence', name: "Intelligence", icon: FileText, path: "/admin/intelligence" },
  { id: 'media', name: "Media", icon: PlayCircle, path: "/admin/media" },
  { id: 'collaborations', name: "Collaborations", icon: Users, path: "/admin/collaborate" },
  { id: 'applications', name: "Applications", icon: UserCheck, path: "/admin/pipeline" },
  { id: 'analytics', name: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { id: 'settings', name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans selection:bg-cyan-500/30">
      
      {/* BACKGROUND SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-small opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(8,145,178,0.02)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(30,58,138,0.02)_0%,_transparent_50%)]" />
      </div>

      {/* SIDEBAR */}
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        className="relative z-20 h-screen border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col transition-all duration-500 ease-in-out"
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center px-6 border-b border-white/5 relative overflow-hidden">
          <Link href="/admin" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
              <span className="text-black font-bold text-lg leading-none">∫</span>
            </div>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase leading-tight">Integral</span>
                <span className="text-[9px] text-cyan-500/60 uppercase tracking-[0.3em]">Command_OS</span>
              </motion.div>
            )}
          </Link>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/20 hover:text-white transition-colors"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.id} href={item.path}>
                <div className={cn(
                  "relative flex items-center h-12 rounded-lg transition-all duration-300 group",
                  isActive ? "bg-white/5 text-white shadow-[0_0_20px_rgba(255,255,255,0.02)]" : "text-white/40 hover:text-white/80 hover:bg-white/[0.02]"
                )}>
                  {/* Active Indicator Line */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute left-0 w-1 h-6 bg-cyan-500 rounded-r-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      />
                    )}
                  </AnimatePresence>

                  <div className="flex items-center px-4 w-full">
                    <item.icon size={18} className={cn(
                      "shrink-0 transition-colors duration-300",
                      isActive ? "text-cyan-500" : "group-hover:text-white/60"
                    )} />
                    {!isCollapsed && (
                      <motion.span 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-4 text-[11px] uppercase tracking-[0.2em] font-medium"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Subtle Glow on Hover */}
                  <div className="absolute inset-0 rounded-lg bg-cyan-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* System Status Module (Persistent) */}
        <div className="p-4 border-t border-white/5 space-y-3">
          <div className={cn(
            "p-3 rounded-xl border border-white/5 bg-black/40 space-y-2 transition-all duration-300",
            isCollapsed ? "items-center" : ""
          )}>
            <div className="flex items-center justify-between">
              {!isCollapsed && <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Infrastructure</span>}
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
              />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-green-500/80">
                  <span>Systems Stable</span>
                  <Activity size={10} />
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-green-500/40"
                  />
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={handleLogout}
            className="w-full flex items-center h-12 rounded-lg text-white/40 hover:text-red-500 hover:bg-red-500/5 transition-all duration-300 group"
          >
            <div className="flex items-center px-4">
              <LogOut size={18} className="shrink-0 transition-colors group-hover:text-red-500" />
              {!isCollapsed && (
                <span className="ml-4 text-[11px] uppercase tracking-[0.2em] font-medium">Terminate Session</span>
              )}
            </div>
          </button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-screen flex flex-col relative z-10 overflow-hidden">
        
        {/* TOPBAR */}
        <header className="h-20 shrink-0 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-10 relative">
          <div className="flex items-center space-x-8">
            {/* Live Operational Indicator */}
            <div className="flex items-center space-x-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    className="w-1 h-1 bg-cyan-500 rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-mono">Ecosystem_Active</span>
            </div>

            {/* Quick Stats */}
            <div className="hidden lg:flex items-center space-x-6 text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">
              <div className="flex items-center space-x-2">
                <Globe size={12} className="text-white/20" />
                <span>3 Departments Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu size={12} className="text-white/20" />
                <span>System_Load: 12%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative group hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Search Systems..."
                className="bg-white/[0.03] border border-white/5 rounded-full pl-10 pr-4 py-2 text-[11px] uppercase tracking-widest text-white/60 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all w-64 placeholder:text-white/10"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1 text-[9px] text-white/10 border border-white/10 rounded px-1.5 py-0.5">
                <Command size={8} />
                <span>K</span>
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-white/30 hover:text-white transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_rgba(6,182,212,1)]" />
            </button>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 pl-6 border-l border-white/5">
              <div className="flex flex-col items-end">
                <span className="text-[11px] font-bold tracking-widest uppercase">Admin_Root</span>
                <span className="text-[8px] text-white/20 uppercase tracking-widest">Level_4_Clearance</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center relative group">
                <UserCheck size={20} className="text-cyan-500 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 rounded-xl bg-cyan-500 opacity-0 group-hover:opacity-10 blur transition-opacity" />
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD SCROLL AREA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          {/* Transition Mask */}
          <div className="sticky top-0 h-8 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
          
          <div className="p-10 max-w-[1600px] mx-auto min-h-full pb-20">
            {children}
          </div>
        </div>
      </main>

      {/* COMMAND PALETTE OVERLAY (Future) */}
      <AnimatePresence>
        {/* Placeholder for actual command palette logic */}
      </AnimatePresence>
    </div>
  );
}
