import React from 'react'
import Navbar from './navbar.tsx'
import { useQuery } from '@tanstack/react-query'
import { fetchTopRatedMovies } from '../server/api.tsx'
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
