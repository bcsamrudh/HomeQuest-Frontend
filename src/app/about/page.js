'use client'
import { useEffect, useState } from "react";
import {UserNav} from "@/components/ui/menubar";
import { Menu } from "@/components/menu"
import 'src/app/globals.css'

const Home = () => {
    const [profiles, setProfiles] = useState(null)

    useEffect(() => {
        const fetchProfiles = async () => {
            const response = await fetch('http://localhost:4000/api/profiles')
            const json = await response.json()

            if (response.ok) {
                setProfiles(json)
            }
        }

        fetchProfiles()
    }, [])
    return (
        <div className="home">
          <div className="flex h-16 items-center px-4 border-b">
          <Menu />
          <div className="ml-auto flex items-center space-x-4">
              <UserNav />
          </div>
          </div>
            <div className="profile-details-container">
               {profiles && profiles.map((profile) => (
                 <div className="profile-details" key={profile._id}>
                 <h4 className='profile-details-heading'>{profile.name}</h4>
                 <p className='profile-details-p1'>{profile.srn}</p>
                 <p className='profile-details-p2'>{profile.contribution}</p>
                 </div>
               ))}
            </div>
        </div>
    )
}

export default Home;