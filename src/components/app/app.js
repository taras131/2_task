import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import Planets from "../planets/planets";
import styles from "./app.module.scss";

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
