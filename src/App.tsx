import React from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    const addName = (name: string) => {
        console.log(`Hello ${name}!`)
    }

    return (
        <div className="App">
            <Button title={'Hello'} callback={() => addName('Alex')}/>
        </div>
    );
}

export default App;
