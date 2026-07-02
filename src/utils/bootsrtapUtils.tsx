// src/component/BootstrapClient.tsx
'use client'
import { useEffect } from 'react'

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
    import("bootstrap-icons/font/bootstrap-icons.css")
  }, [])

  return null
}