import '../styles/globals.css'
import {Provider} from "next-auth/client";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({Component, pageProps}) {
    const Layout = Component.layout || (({children}) => <>{children}</>);
    return (
        <Provider session={pageProps.session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
