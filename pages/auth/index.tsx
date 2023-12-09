import Sidebar from "@/components/sidebar"
import '@/app/globals.css'
import FormGroup from "@/components/formGroup"
import { useState } from "react"

const Signup = () => {

  const [statusAuth, setStatusAuth] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-blue-100">
        
        {/* Sidebar */}
        <Sidebar type="auth" />
    
        <div className="relative md:ml-[26%] w-full md:w-[74%] bg-blue-100 h-max border-box pb-6 px-2 md:px-6 pt-5">
            <div className="rounded-lg p-4 w-full">
               <FormGroup type={!statusAuth ? "signin" : "signup"} onClick={() => setStatusAuth(!statusAuth)} />
            </div>
        </div>

    </div>
  )
}

export default Signup
