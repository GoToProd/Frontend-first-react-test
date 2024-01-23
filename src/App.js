import React from "react";

import CounterCl from './CounterCl';
import CounterFn from './CounterFn';

import UserCard from "./UserCard";


function App(){
        return <div>
            <header>
                header
            </header>
            <main>
                <h2>Test class</h2>
                <CounterCl/>
                <h2>Test function</h2>
                <CounterFn max={151}/>
                <hr/>
            </main>
            <footer>
                footer
                <UserCard name="Daniil" description="Atros"/>
                <UserCard name="Aleksander" description="Partos" />
                <UserCard name="Ksenia" description="Aramis" />
                <UserCard name="Aleksander" description="Dartoniyan" />
            </footer>
        </div>
    }

export default App;