
import { Header } from '../components/header/Header'
import { Naviagtion } from '../components/navigation/Naviagtion'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'


export const Root = () => {
    return (
        <>
            <Header />
            <Naviagtion />
            <div className="min-h-[470px] max-w-7xl mx-auto flex pt-3">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
