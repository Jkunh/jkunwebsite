import Link from 'next/link'

export default function Navbar() {
    return (
        <ul className="flex">
            <li className="flex-1 mr-2">
                <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/">Home</Link>
            </li>
            <li className="flex-1 mr-2">
                <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/Gallery">Gallery</Link>
            </li>
            <li className="flex-1 mr-2">
                <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/Projects">Projects</Link>
            </li>
        </ul>
    )
}

