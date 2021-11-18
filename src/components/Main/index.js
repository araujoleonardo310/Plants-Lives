import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

const Main = () => {
    return (
        <div class="main-container">
            <div className="icones">Ícones feitos por <a href="https://www.flaticon.com/br/autores/amethystdesign" title="AmethystDesign">AmethystDesign</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
            <Header />
            <Content />
            <Footer />
        </div>
    )

}

export default Main;