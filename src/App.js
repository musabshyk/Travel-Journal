import React from "react";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Data from "./Data.js";

export default function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    });     
    
    return (
        <div>
            <Navbar />
            <section className="card-list">
                {cards}
            </section>
        </div>
    );
}