import NextAuth from 'next-auth';
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.Cognito({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            domain: process.env.COGNITO_DOMAIN,
        }),
        /**
         * Settings > Developer settings > oauth-github
         * homepage url: http://localhost:3000/
         * Authorization callback URL >
         */
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    secret: process.env.JWT_SECRET
})
