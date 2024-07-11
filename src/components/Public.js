import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Samok Ceratec Limited!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the beautiful town of Obollo-Afor, Samok Ceratec Limited  provides a trained staff ready to meet your tech needs. From providing you and your business a befitting online presence to developing user-friendly websites and databases, we are committed to giving you the best!</p>
                <address className="public__addr">
                    Samok Ceratec Limited<br />
                    52, Enugu-Ezike Road<br />
                    Umuezejor, Obollo-Afor<br />
                    Enugu State<br />
                    {/* <a href="tel:+2347031259706">07031259706</a> */}
                </address>
                <br />
                <br />

                {/* <p>Owner: Dan Davidson</p> */}

                <Link to="/contact" style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '18px' }}>Contact Us</Link>
            </main>
            <footer>
                <Link to="/login" style={{ fontWeight: 'bold' }}>Staff Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public