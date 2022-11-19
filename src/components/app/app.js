import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import styles from "./app.module.scss"
import Planets from "../planets/planets";

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header/>
                <Main/>
                <Footer/>
                <Planets/>
            </div>
        </div>
    );
}

export default App;
