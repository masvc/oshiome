import { authRepository } from "../repositories/auth"
import { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { SessionContext } from "../SessionProvider"

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useContext(SessionContext)

    const signin = async () => {
        try {
            const user = await authRepository.signin(email, password)
            setCurrentUser(user)
            // console.log('signin Success：', user)
        } catch (error) {
            console.error('signin Error：', error)
        }
    }

    if (currentUser != null) {
        return <Navigate replace to="/" />
    }

    return (
        <div className="bg-gray-100 py-5 px-4">
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-extrabold text-oshi-purple">
                    ログイン
                </h2>
                <div className="mt-4 w-full max-w-md">
                    <div className="bg-white py-8 px-4 rounded-lg shadow-md">
                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-oshi-purple">
                                    メールアドレス
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="メールアドレス"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oshi-purple focus:border-oshi-purple sm:text-sm"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-oshi-purple">
                                    パスワード
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="パスワード"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oshi-purple focus:border-oshi-purple sm:text-sm"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <button
                                    disabled={email === "" || password === ""}
                                    type="button"
                                    onClick={signin}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-oshi-purple hover:bg-oshi-indigo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oshi-purple">
                                    ログイン
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            登録は
                            <Link to={"/signup"} className="underline">
                                こちら
                            </Link>
                            から
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin