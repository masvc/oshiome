import { createContext, useEffect, useState } from "react"
import { authRepository } from "./repositories/auth"

type SessionProviderProps = {
    children: React.ReactNode
}

const SessionContext = createContext([null, () => { }])
const SessionProvider = ({ children }: SessionProviderProps) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setSession()
    }, [])

    const setSession = async () => {
        const currentUser = await authRepository.getCurrentUser()
        setCurrentUser(currentUser)
        console.log('currentUser:', currentUser)
        setIsLoading(false)
    }

    if (isLoading) return <div>Loading...</div>
    return (
        <SessionContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </SessionContext.Provider>
    )
}

export { SessionContext, SessionProvider }
