import { render } from 'react-dom'
import '../styles/index.scss'
import Recipe from './Recipe'
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

const App = () => {
    return (
        <>
            <section className="hero">
            </section>
            <main>
                <section>
                    <h1>Oh Haiaa, React</h1>
                </section>
                <img src={sword} alt="sword" width="250" />
                <img src={swordSvg} alt="swordSvg" width="250" />
            </main>
            <Recipe />
        </>
    )
}

export default App