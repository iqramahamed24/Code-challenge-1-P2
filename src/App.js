import React, { useState } from 'react';
import TransactionForm from './Components/TransactionForm';
import SearchButton from './Components/searchButton';
import TransactionTable from './Components/Main';

const App = () => {
    return(
        <div className="App" >
        <TransactionForm/>
        <SearchButton/>
        <TransactionTable/>

        
        </div>
    );
}
export default App;
