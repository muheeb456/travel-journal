import './App.css'
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js"

function App() {
    const entries = data.map((entry)=>{
        return (
            <Entry
                key = {entry.id}
                {...entry}
            />
        );
    })
    return (
        <>
            <Header/>
            <main>
                {entries}
            </main>
        </>
    );
}

export default App
