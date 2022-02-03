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

const App = () => {

    let dialogs = [
        {id: 1, name: 'Natasha'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Yura'},
        {id: 4, name: 'Lesia'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Dasha'}
    ];

    let messages = [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'I\'m fine, and you?'},
        {id: 4, text: 'Me too'},
        {id: 5, text: 'Yo!'},
        {id: 6, text: 'Yo Yo Yo!'},
    ];

    let posts = [
        {id: 1, likesCount: 23, message: 'Hi!'},
        {id: 2, likesCount: 54, message: 'It\'s my first post!'},
        {id: 3, likesCount: 32, message: 'It\'s my first post 1!'},
        {id: 4, likesCount: 11, message: 'It\'s my first post 2!'},
        {id: 5, likesCount: 16, message: 'It\'s my first post 3!'},
        {id: 6, likesCount: 9, message: 'It\'s my first post 4!'},
    ];

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className="main">
                    <Routes>
                        <Route path="/profile" element={<Profile posts={posts} />}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages} />}/>
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
