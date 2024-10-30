import { Outlet } from 'react-router-dom'
import { Navbar } from './components'
import { Footer } from './components'


const App = () => {
    return (
        <div>
            <Navbar />
            <main className="m-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App
