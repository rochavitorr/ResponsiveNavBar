import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../component/layout.js'

function MyApp({ Component, pageProps }) {
  return <Layout>
            <Component {...pageProps} />
          </Layout>
}

export default MyApp
