import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar} />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
