// @Doc: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

import {useRequireLogin} from "../../hooks/useRequireLogin";

export async function getStaticPaths(params) {
    console.table(params)
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // false: 404 error , true: server Error  ex<properties of undefined (reading 'id')>
    }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
    return {
        // Passed to the page component as props
        props: { post: { id: context.params.id} },
    }
}

export default function Post({post}) {
    useRequireLogin()
    return (
        <h2>post: {post.id || '404'}</h2>
    )
}