import { createContext, useEffect, useState } from "react"
import { authRepository } from "./repositories/auth"

const SessionContext = createContext([null, () => { }])
const SessionProvider = ({ children }) => {
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
