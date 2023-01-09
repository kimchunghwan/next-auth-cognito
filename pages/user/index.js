import {signOut, useSession} from "next-auth/client";
import {useRequireLogin} from "../../hooks/useRequireLogin";
import {useRouter} from "next/router";

export default function User() {
    const [session, loading] = useSession()
    useRequireLogin();
    // useSession()가 비동기이기 때문에 loading을 체크해서 확인해줌...뭐지 이런 이상한 로직은 ..
    if (loading) {
        console.log('loading')
        return null;
    }

    if (session) {
        console.log('session', session)
        return (
            <>
                   <h2> {session.user.name} user page</h2>
                <button onClick={() => signOut({
                    callbackUrl: `${window.location.origin}/auth/login`
                })}>Sign Out
                </button>
                <br/>
            </>
        );
    }
}
