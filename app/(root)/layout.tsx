import { ReactNode } from "react"

import Navbar from "@/components/layouts/Navbar"

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <Navbar />
      <div className="text-white">{children}</div>
    </main>
  )
}

export default Layout
