import * as React from "react"
import { Link } from "gatsby"
import {useState} from 'react'

const Nav = () => {


    return (
        <section className="font-[Cormorant] border-b-2 pb-4 flex flex-wrap items-center justify-start gap-x-12">
            <Link to={'/'} activeClassName="font-bold"> Dailies </Link>
            <Link to={'/films'}> Films </Link>
            <Link to={'/photography'} activeClassName="font-bold"> Photography</Link>
            <Link to={'/timesink'} activeClassName="font-bold"> TimeSink </Link>
            <Link to={'/code'} activeClassName="font-bold"> Code  </Link>
            <Link to={'/contact'} activeClassName="font-bold"> Contact</Link>
        </section>
    )
}

export default Nav