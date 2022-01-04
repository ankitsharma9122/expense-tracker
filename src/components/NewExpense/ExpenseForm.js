import React,{ useState } from 'react';

import './ExpenseForm.css';
const ExpenseForm = (props) => {
     const [enteredTitle,setEnteredTitle]=useState('');
     const [enteredAmount,setEnteredAmount]=useState('');
     const [enteredDate,setEnteredDate]=useState('');
    

    //in one flow
   // const [userInput,setUserInput]=useState({                       //one state instead of multiple state 
   //     EnteredTitle:'',
    //    enteredAmount:'',
    //    enteredDate: ''
   // })

   

     const titleChangeHandler = (event) =>{   
            setEnteredTitle(event.target.value);                         //1st way phele har ko alag alag karna padta
        //  setUserInput({                                               //2ndst way --->depend karna padega pichla pe
       //   ...userInput,                                               //spread--->will copy the rest
      //   enteredTitle:event.target.value,
     //   })
    // setUserInput(prevState)=>{                                    //3rd way---->ye best hai prev hamesa last updated state dega
   //    return {...prevState,enteredTitle:event.target.value};
  // }
    };

    const amountChangeHandler = (event) =>{    //1st way phele har ko alag alag karna padta
    setEnteredAmount(event.target.value);
    //  };
   // const amountChangeHandler = (event) =>{
   // setUserInput({
   //     ...userInput,
   //     enteredAmount:event.target.value,
   //     })
    };
      const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);   //1st way phele har ko alag alag karna padta   
       // setUserInput({
       //     ...userInput,
       //     enteredDate:event.target.value,
       //     })
      };

     const submitHandler =(event) => {
         event.preventDefault();
          
        const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date:new Date(enteredDate)
      };

     // console.log(expenseData);                      //submission ke badd empty string store karwa rahe
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }; 

  
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className='new-expense__control'>
                <label>Event Title</label>
                <input type ='text'  
                value={enteredTitle} 
                onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type ='number'
                 min="0.00" 
                 
                 value={enteredAmount} 
                 onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type ='date' 
                min="2019-01-01" 
                max="2022-12-31"
                value={enteredDate}                              //two way binding
                onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__action'>
            <button type="button" onClick={props.onCancel} >cancel</button>
            <button type="submit">Add Expense</button>
        </div>
        </form>
    );
};

export default ExpenseForm;

