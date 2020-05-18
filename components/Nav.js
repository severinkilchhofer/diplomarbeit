import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <ul className="flex justify-between items-center p-8">
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={ '/about' } as={ process.env.BACKEND_URL + '/about' }><a>about</a></Link>
                </li>
            </ul>
        </nav>
    )
}