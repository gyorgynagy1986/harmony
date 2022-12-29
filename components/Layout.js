import Nav from './Nav'
import Footer from '../layouts/Footer'


const Layout = ( {children} ) => {
  return (
    <>
        <Nav />
        <main>
         {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout