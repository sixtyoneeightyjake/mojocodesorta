"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeLogo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return light theme logo by default to avoid hydration mismatch
    return (
      <img
        src="/mainmojo.png"
        alt="MojoCode"
        className="h-8 w-auto"
      />
    )
  }

  const logoSrc = theme === "dark" 
    ? "/mainmojo1.png" 
    : "/mainmojo.png"

  return (
    <img
      src={logoSrc}
      alt="MojoCode"
      className="h-8 w-auto"
    />
  )
}
