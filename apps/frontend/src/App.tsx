/* TypeScript React (TSX) */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Documents from './pages/Documents';
import Header from './components/Header';

export default function App(): React.JSX.Element {
    return (
        <div>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/documents" element={<Documents/>}/>
                </Routes>
            </div>
        </div>
    );
}
