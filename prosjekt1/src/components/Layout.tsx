import React from 'react'
import Navbar from './navbar.tsx'
interface LayoutProps {
    content: React.ReactNode
}
export default function Layout({content}: LayoutProps) {
  return (
    <>
      <Navbar/>
      {content}
    </>
  )
}
