import Link from "next/link"
import { useRouter } from 'next/router'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <h1>NavBar</h1>
            <nav>
                <ul class="flex">
                    <li class={router.pathname == "/" ? "mr-6 text-blue-800" : "mr-6"}><Link href="/">Home</Link></li>
                    <li class={router.pathname == "/employee" ? "mr-6 text-blue-800" : "mr-6"}><Link href="/employee">Employee</Link></li>
                    <li class={router.pathname == "/employer" ? "mr-6 text-blue-800" : "mr-6"}><Link href="/employer">Employer</Link></li>
                </ul>
            </nav>
            <Component {...pageProps} />
            <footer>Any problem mail me <a href="mailto:kwangson@yahoo.com">kwangson@yahoo.com</a></footer>
        </>)
}