import { useState, useEffect } from "react"

export default function UseWindowsSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)

        handleResize()

        // nettoyage de l'écouteur
        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return windowSize
}
