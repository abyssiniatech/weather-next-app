import Link from "next/link"

const Header =() =>{
    return(
        <div className="bg-indigo-800 p-4 ">
            <nav className="flex items-center justify-between text-2xl ">
                 <h1>Next js 16</h1>
                 <ul className="bg-indigo-800 text-white text-2xl items-center p-2 gap-4 flex justify-center">
                    <Link href="/">
                    <li className  ="hover:bg-indigo-600 hover:p-2 hover:rounded">Home</li>
                    </Link>
                    <Link href="/about">
                     <li className ="hover:bg-indigo-600 hover:p-2 hover:rounded">About</li>
                    </Link>

                    <Link href="/contact">
                    <li className  ="hover:bg-indigo-600 hover:p-2 hover:rounded">Contact</li>
                   </Link>
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold ">Login</button>
            </nav>
        </div>
    )
}
export default Header