import * as React from "react"
import Nav from './nav'
import Title from './title'
import Footer from './footer'

const Layout = ({children}) => {
   return (
       <section className="relative min-h-screen mt-12">
        <div className="w-3/4 mx-auto font-[Cormorant] pb-6">
            <Title />
            <Nav />
                {children} 
            <Footer />
            </div>
        </section>
   ) 
}

export default Layout 