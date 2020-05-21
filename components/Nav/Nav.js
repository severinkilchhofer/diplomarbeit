import Link from 'next/link'
import React from "react";

const Nav = () => {
    return (
        <nav>
            <ul className="flex justify-between items-center p-8 font-bold">
                <li className="w-40">
                    <Link  href="/" as={process.env.BACKEND_URL + '/'}>
                        <a className="no-underline">Diplomarbeit {`\n`} Severin Kilchhofer</a>
                    </Link>
                </li>
                <li className="w-40">
                    <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                        <a>Intro</a>
                    </Link>
                </li>
                <li className="w-40">
                    <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                        <a>Recherche und Erkenntnisse</a>
                    </Link>
                </li>
                <li className="w-40">
                    <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                        <a>Sustainable Fashion Foundation</a>
                    </Link>
                </li>
                <li className="w-40">
                    <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                        <a>Eigenes Rating erstellen</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;