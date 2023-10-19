import React from "react";
import Navbar from "./components/Navbar"
import "./Main.css"
import CardParent from "./components/CardParent";
function App () {
    return (
        <div className="App">
            {/* Navbar bolimi */}
            <Navbar />
            <CardParent/>
        </div>
    )
};

export default App;
