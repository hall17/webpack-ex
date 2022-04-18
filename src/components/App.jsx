import { render } from 'react-dom'
import '../styles/index.scss'
import Recipe from './Recipe'
const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>Oh Haiaa, React</h1>
                    </section>
                </main>
            </section>
            <Recipe />
        </>
    )
}

export default App