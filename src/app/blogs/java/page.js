"use client"
import Image from 'next/image'
import React, { useState } from 'react'


export default function page() {
    const [name , setName] = useState("Akleem")
  return (
    <div>
          
         {name}
    </div>
  )
}
