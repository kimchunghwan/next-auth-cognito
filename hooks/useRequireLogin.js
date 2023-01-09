import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useSession} from "next-auth/client";

export function useRequireLogin() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // まだ確認中
    if (!session) router.push("/auth/login"); // 未ログインだったのでリダイレクト
  }, [loading, session])
}
