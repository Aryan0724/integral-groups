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
  Globe,
  Menu,
  X,
  UserPlus,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { id: "homepage", name: "Homepage", icon: Home, path: "/admin/homepage" },
  { id: "about", name: "About Section", icon: Info, path: "/admin/about" },
  { id: "portfolios", name: "Portfolios", icon: Layers, path: "/admin/portfolios" },
  { id: "departments", name: "Departments", icon: Database, path: "/admin/departments" },
  { id: "intelligence", name: "Intelligence", icon: FileText, path: "/admin/intelligence" },
  { id: "media", name: "Media", icon: PlayCircle, path: "/admin/media" },
  { id: "collaborations", name: "Collaborations", icon: Users, path: "/admin/collaborate" },
  { id: "join-us", name: "Join Us", icon: UserPlus, path: "/admin/join-us" },
  { id: "applications", name: "Applications", icon: UserCheck, path: "/admin/pipeline" },
  { id: "settings", name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    // Auto-collapse on smaller desktop screens
    if (typeof window !== "undefined" && window.innerWidth < 1280) {
      setIsCollapsed(true);
    }
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  // Prevent layout flash — render a skeleton shell during SSR
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
        <div className="w-[260px] h-screen border-r border-white/5 bg-black/40 shrink-0" />
        <div className="flex-1" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans selection:bg-cyan-500/30">

      {/* ── BACKGROUND SYSTEM ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-small opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(8,145,178,0.02)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(30,58,138,0.02)_0%,_transparent_50%)]" />
      </div>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── SIDEBAR ── */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "relative z-40 h-screen border-r border-white/5 bg-black/60 backdrop-blur-xl flex flex-col shrink-0",
          // Mobile: fixed overlay drawer
          "fixed lg:relative",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "transition-transform duration-300 lg:transition-none"
        )}
        style={{ width: isCollapsed ? 80 : 260 }}
      >
        {/* Sidebar Header */}
        <div className="h-16 lg:h-20 flex items-center px-4 lg:px-6 border-b border-white/5 relative overflow-hidden shrink-0">
          <Link href="/admin" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
              <span className="text-black font-bold text-lg leading-none">∫</span>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold tracking-[0.2em] uppercase leading-tight truncate">Integral</span>
                <span className="text-[9px] text-cyan-500/60 uppercase tracking-[0.3em]">Command_OS</span>
              </div>
            )}
          </Link>

          {/* Collapse Toggle (desktop only) */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/20 hover:text-white transition-colors hidden lg:flex"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/20 hover:text-white transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={14} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 lg:py-6 px-3 space-y-1" aria-label="Admin navigation">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== "/admin" && pathname.startsWith(item.path));
            return (
              <Link key={item.id} href={item.path} aria-label={item.name}>
                <div
                  className={cn(
                    "relative flex items-center h-11 lg:h-12 rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-white/5 text-white"
                      : "text-white/40 hover:text-white/80 hover:bg-white/[0.03]"
                  )}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 w-0.5 h-6 bg-cyan-500 rounded-r-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}

                  <div className="flex items-center px-3 lg:px-4 w-full overflow-hidden">
                    <item.icon
                      size={17}
                      className={cn(
                        "shrink-0 transition-colors duration-200",
                        isActive ? "text-cyan-500" : "group-hover:text-white/60"
                      )}
                    />
                    {!isCollapsed && (
                      <span className="ml-3 text-[11px] uppercase tracking-[0.15em] font-medium truncate">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg bg-cyan-500 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-200 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* System Status */}
        <div className="p-3 lg:p-4 border-t border-white/5 space-y-2 lg:space-y-3 shrink-0">
          {!isCollapsed && (
            <div className="p-3 rounded-xl border border-white/5 bg-black/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Infrastructure</span>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-green-500/80">
                <span>Systems Stable</span>
                <Activity size={10} />
              </div>
              <div className="mt-2 h-0.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-green-500/40 w-full" />
              </div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center h-11 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 group"
            aria-label="Logout"
          >
            <div className="flex items-center px-3 lg:px-4">
              <LogOut size={17} className="shrink-0 transition-colors group-hover:text-red-400" />
              {!isCollapsed && (
                <span className="ml-3 text-[11px] uppercase tracking-[0.15em] font-medium">Terminate Session</span>
              )}
            </div>
          </button>
        </div>
      </motion.aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 h-screen flex flex-col relative z-10 overflow-hidden min-w-0">

        {/* TOPBAR */}
        <header className="h-16 lg:h-20 shrink-0 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 lg:px-10 gap-4">
          <div className="flex items-center gap-3 lg:gap-8">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-white/30 hover:text-white transition-colors"
              aria-label="Open navigation"
            >
              <Menu size={18} />
            </button>

            {/* Live Indicator */}
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
              <div className="flex space-x-0.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"
                    style={{ animationDelay: `${i * 0.2}s`, animationDuration: "1.5s" }}
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/50 font-mono hidden sm:inline">
                Ecosystem_Active
              </span>
            </div>

            {/* Quick Stats — desktop only */}
            <div className="hidden xl:flex items-center space-x-5 text-[10px] uppercase tracking-[0.15em] text-white/30 font-mono">
              <div className="flex items-center space-x-1.5">
                <Globe size={11} className="text-white/20" />
                <span>3 Departments Online</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Cpu size={11} className="text-white/20" />
                <span>System_Load: 12%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-6">
            {/* Search — hidden on small mobile */}
            <div className="relative group hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" size={13} />
              <input
                type="text"
                placeholder="Search Systems..."
                aria-label="Search systems"
                className="bg-white/[0.03] border border-white/5 rounded-full pl-9 pr-4 py-2 text-[11px] uppercase tracking-widest text-white/60 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all w-48 lg:w-64 placeholder:text-white/10"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center space-x-1 text-[9px] text-white/10 border border-white/10 rounded px-1 py-0.5">
                <Command size={7} />
                <span>K</span>
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-white/30 hover:text-white transition-colors" aria-label="Notifications">
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_rgba(6,182,212,1)]" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-3 pl-3 lg:pl-6 border-l border-white/5">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[11px] font-bold tracking-widest uppercase">Admin_Root</span>
                <span className="text-[8px] text-white/20 uppercase tracking-widest">Level_4</span>
              </div>
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                <UserCheck size={18} className="text-cyan-500" />
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {/* Fade mask */}
          <div className="sticky top-0 h-6 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="px-4 lg:px-10 pb-10 lg:pb-20 max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
