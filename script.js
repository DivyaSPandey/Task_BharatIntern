let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn= document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount  <= 0){
        alert('please enter a valid amount!');
        return;
    }

    if(date==='')
    {
        alert('please select a date');
        return;
    }

    // pushing value in expenses
    expenses.push({category,amount,date})

    // updating amount
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    // creating new row
    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dataCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    
   const deleteBtn = document.createElement('button');
    
   deleteBtn.textContent= 'Delete';
   deleteBtn.classList.add('delete-btn');
   deleteBtn.addEventListener('click', function()
   {
    expenses.splioce(expenses.indexOf(expense),1);

    //minus from total amount
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    expenseTableBody.removeChild(newRow);
   })

  const expense = expenses[expenses.length-1];
  categoryCell.textContent=expense.category;
  AmountCell.textContent=expense.category;
  dataCell.textContent=expense.date;
  deleteCell.appendChild(deleteBtn)

})
for(const expense of expenses ){
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    // creating new row
    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dataCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    
   const deleteBtn = document.createElement('button');
    
   deleteBtn.textContent= 'Delete';
   deleteBtn.classList.add('delete-btn');
   deleteBtn.addEventListener('click', function()
   {
    expenses.splioce(expenses.indexOf(expense),1);

    //minus from total amount
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    expenseTableBody.removeChild(newRow);
   })

  const expense = expenses[expenses.length-1];
  categoryCell.textContent=expense.category;
  AmountCell.textContent=expense.category;
  dataCell.textContent=expense.date;
  deleteCell.appendChild(deleteBtn) 
}