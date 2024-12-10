import { useState, useEffect } from 'react'

export const useOrientation = () => {
    const [orientation, setOrientation] = useState("portrait")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(orientation: portrait)")
            
            const updateOrientation = (e) => {
                setOrientation(e.matches ? "portrait" : "landscape")
            }

            updateOrientation(mediaQuery)

            mediaQuery.addEventListener("change", updateOrientation)

            return () => mediaQuery.removeEventListener("change", updateOrientation)
        }
    }, [])

    return orientation
}
