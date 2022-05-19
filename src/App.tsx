import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type FilterType = 'all' | 'rubles' | 'dollars'


function App() {

    const [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    const filterMoney = (fil: FilterType) => {
        setFilter(fil)
    }

    let filteredMoney = money

    if (filter === "rubles") {
        filteredMoney = filteredMoney.filter((cash) => cash.banknots === 'RUBLS')
    } else if (filter === "dollars") {
        filteredMoney = filteredMoney.filter((cash) => cash.banknots === 'Dollars')
    }

    return (
        <div className="App">
            <ol>
                {filteredMoney.map((cash, index) => {
                    return (
                        <li key={index + cash.value}>
                            <span>{cash.banknots}</span>
                            <span>{cash.value}</span>
                            <span>{cash.number}</span>
                        </li>
                    )
                })}
            </ol>
            <Button title={'All'} callback={() => filterMoney('all')}/>
            <Button title={'RUBLS'} callback={() => filterMoney('rubles')}/>
            <Button title={'Dollars'} callback={() => filterMoney('dollars')}/>
        </div>
    );
}

export default App;
