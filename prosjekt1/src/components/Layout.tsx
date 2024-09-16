import React from 'react'
interface LayoutProps {
    content: React.ReactNode
}
export default function Layout({content}: LayoutProps) {
  return (
    <>
      {content}
    </>
  )
}
