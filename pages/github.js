import {useSession, signIn, signOut} from "next-auth/client";
import Link from "next/link";

const userClick = () => {
}

export default function Home() {
    const [session, loading] = useSession();

    if (loading) {
        return null;
    }

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br/>
                <button onClick={() => signOut({callbackUrl: '/auth/login'})}>Sign Out</button>
                <br/>
                <Link href="/setting">
                    <a>設定ページへ</a>
                </Link>
            </>
        );
    }

    return (
        <>
            Not signed in <br/>
            <button onClick={() => userClick()}> user</button>
            <button onClick={() => signIn('github', {callbackUrl: 'http://localhost:3000/admin/dashboard'})}>Sign in</button>
            <Link href="post/1">post:1</Link>
        </>
    )
}
