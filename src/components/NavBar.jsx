"use client"
import { serverLogout } from '@/actions/user'
import { useRouter } from 'next/navigation'

export default function NavBar(){
    const {push} =  useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
      }

    return(
        <nav className="bg-amber-900 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">APP TEV</h1></a></li>
        </ul>

        <button className= "pt-2" onClick={handleLogout}>logout</button>
        
      </nav>
    )
}