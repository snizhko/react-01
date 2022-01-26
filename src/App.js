import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main className="main">
                {/*<Profile />*/}
                <Dialogs/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
