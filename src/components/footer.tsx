import * as React from "react"
//import useSiteMetadata from "../hooks/useSiteMetadata"

const Footer = () => {
//   const { siteTitle } = useSiteMetadata()

  return (
    <footer className="flex justify-between absolute bottom-6 h-4">
      <div>
        &copy; {new Date().getFullYear()} by Aaron Zomback. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer