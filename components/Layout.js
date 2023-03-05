import Nav from './Nav'
import Footer from '../layouts/Footer'


const Layout = ( {children} ) => {
  return (
    <>
        <Nav />
         {children}
        <Footer />
    </>
  )
}

export default Layout