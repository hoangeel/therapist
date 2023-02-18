import Header from './header'
import Footer from './footer'

const Layout = ({ isPrivate, children }) => {
    return (
        <div className='layout'>
            <Header isPrivate={isPrivate} />
            <div className='contentPage'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout