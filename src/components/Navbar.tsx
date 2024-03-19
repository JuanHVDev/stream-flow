"use client"
import { MotionDiv } from "@/lib/motion"
import { Popcorn } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"
const tabs = ["Series", "Peliculas", "Settings"]
const Navbar = () =>
{
  const path = usePathname()
  const [selectedTab, setSelectedTab] = useState<string | null>(null)
  useEffect(() =>
  {
    if (path.split("/")[1] === "home")
    {
      setSelectedTab("Peliculas")
    } else if (path.split("/")[1] === "series")
    {
      setSelectedTab("Series")
    } else if (path.split("/")[1] === "settings")
    {
      setSelectedTab("Settings")
    }
  }, [path])
  return (
    <header className="flex items-center h-14 px-4 md:px-6 w-full gap-4">
      <Link className="hidden lg:flex" href="/home">
        <Popcorn className="h-6 w-6" />
        <span>Stream Flow</span>
      </Link>
      <nav className="flex flex-1 justify-end gap-4 lg:gap-6">
        {
          tabs.map((tab, index) => (
            <Link
              key={index + tab}
              onMouseEnter={() =>
              {
                setSelectedTab(tab)

              }}
              className={cn(
                "font-semibold inline-flex h-14 items-center justify-center rounded-md capitalize w-fit px-4 relative",
                path === `/${tab === "Peliculas" ? "home" : tab.toLowerCase()}` && " font-bold",
                // tab === selectedTab && "text-white",
              )}
              href={`/${tab === "Peliculas" ? "home" : tab.toLowerCase()}`}
            >
              <MotionDiv
                transition={{ duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
              >
                {tab}
              </MotionDiv>
              {tab === selectedTab && <MotionDiv className="active-underline" layoutId="active-underline" transition={{ duration: 0.5, type: "spring", bounce: 0.25 }} />}
            </Link>
          ))}

      </nav>
    </header >
  )
}

export default Navbar