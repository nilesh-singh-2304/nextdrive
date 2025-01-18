import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaClipboardQuestion } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdRequestPage } from "react-icons/md";

export function FloatingDockDemo() {
  //blog , home , contact , why us , portfolio ,admin , services
  const links = [
    
    {
      title: "Contact US",
      icon: (
        <IoCall/>
      ),
      href: "/contact",
    },
    {
      title: "Why Us",
      icon: (
        <FaClipboardQuestion/>
      ),
      href: "/whyus",
    },
    {
      title: "Services",
      icon: <GrServices/>,
      href: "/services",
    },
    {
      title: "Home",
      icon: (
        <FaHome className="text-yellow-300"/>
      ),
      href: "/",
    },
    {
      title: "Tech Blogs",
      icon: (
        <FaBlogger/>
      ),
      href: "/blogs",
    },

    {
      title: "Admin Panel",
      icon: (
        <MdAdminPanelSettings/>
      ),
      href: "/admin",
    },
    {
      title: "What We Do",
      icon: (
        <MdRequestPage/>
      ),
      href: "/portfolio",
    },
  ];
  return (
    <div className="flex mt-5  items-center justify-center fixed z-50 w-full">
      <FloatingDock 

        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
