import Link from 'next/link'
import React from "react";

const Nav = () => {
    return (
        <nav>
            <ul className="flex justify-between items-center p-8">
                <li>
                    <Link href="/" as={process.env.BACKEND_URL + '/'}>
                        <a className="text-blue no-underline">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;