import './App.css';
import React , { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import MainHeader from './MainHeader/MainHeader';
import Login from './components/Login/Login';

const DUMMY_EXPENSES=[];
function App() 
{
   const  [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
    const addExpenseHandler = (expense) =>{
     setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
     });

    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <NewExpense onAddExpense={addExpenseHandler}/>}
        {isLoggedIn && <Expenses items={expenses}/>}
      </main>
      
    </div>
  );
}

export default App;
