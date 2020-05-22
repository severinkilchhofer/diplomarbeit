import Link from 'next/link'
import React, {useState, useEffect} from "react";

const Nav = () => {
    const [open, enableNav] = useState(false);

    useEffect(() => {
        if ((typeof window !== 'undefined') && open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [open]);


    return (
        <nav className="h-24 ">
            <div className="block z-50 relative float-right pt-4 pr-4">
                <button onClick={() => enableNav(!open)} className="px-3 py-2">
                    {open
                        ? <svg height='20px' width='20px'  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" x="0px" y="0px"><g><path d="M2 2l12 12"></path><path d="M14 15c-.256 0-.512-.098-.707-.293l-12-12c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l12 12c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293zM14 2l-12 12"></path><path d="M2 15c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l12-12c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-12 12c-.195.195-.451.293-.707.293z"></path></g></svg>
                        : <svg height='20px' width='20px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" x="0px" y="0px"><g><path d="M0 2h16v2h-16zM0 7h16v2h-16zM0 12h16v2h-16z"></path></g></svg>
                    }

                </button>
            </div>
            <div className={`${open ? `block` : `hidden`} `}>
                <div className="h-screen w-screen z-10 top-0 left-0 bg-blue overflow-x-hidden fixed">
                    <ul className="table m-10 sm:m-auto text-white font-bold text-lg sm:text-xl pt-10 sm:pt-32">
                        <li className="pb-4 hover:text-red">
                            <Link href={'/'} as={process.env.BACKEND_URL + '/'}>
                                <a>Intro</a>
                            </Link>
                        </li>
                        <li className="pb-4 hover:text-red">
                            <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                                <a>Recherche und Erkenntnisse</a>
                            </Link>
                        </li>
                        <li className="pb-4 hover:text-red">
                            <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                                <a>Sustainable Fashion Foundation</a>
                            </Link>
                        </li>
                        <li className="pb-4 hover:text-red">
                            <Link href={'/about'} as={process.env.BACKEND_URL + '/about'}>
                                <a>Eigenes Rating erstellen</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;