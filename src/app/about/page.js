'use client'
import React from 'react';
import { useEffect, useState } from "react";
import 'src/app/globals.css';

const AboutPage = () => {
  const [profiles, setProfiles] = useState([])

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
    <div>
      <h2>About Us</h2>
      <div className="about-page">
        <div className="details">
          {profiles && profiles.map((profile) => (
            <p key={profile._id}>{profile.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage;