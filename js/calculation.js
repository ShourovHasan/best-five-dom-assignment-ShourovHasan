// calculate player expeses 
document.getElementById('calculate_player_expenses').addEventListener('click', function () {

    // get list Total items 
    const listContainer = document.getElementById('players_list');
    const listTotalItems = listContainer.querySelectorAll('li').length;
    // console.log(listTotalItems);

    // get input value of per player cost 
    const perPlayerCostField = document.getElementById('per_player_cost_field');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayerCost = parseInt(perPlayerCostString);
    
    if (listTotalItems === 0) {
        alert('Please selecet some players for calculate');
        return;
    }
    else if ((perPlayerCostString.trim()).length === 0) {
        alert('Please Enter Valid Amount in Per Player Field');
        perPlayerCostField.value = '';
        return;
    }
    else if (isNaN(perPlayerCostField.value)) {
        alert('Please Enter Valid Amount in Per Player Field');
        perPlayerCostField.value = '';
        return;
    }
    else if (perPlayerCost < 1) {
        alert('Please Enter Valid Amount in Per Player Field');
        perPlayerCostField.value = '';
        return;
    }
    perPlayerCostField.value = '';

    // get expenses innerText 
    const playerExpenses = document.getElementById('player_expenses');
    // const playerExpensesElemnt = playerExpenses.innerText;

    playerExpenses.innerText = listTotalItems * perPlayerCost;
    return playerExpenses.innerText;
})

// calculate total expeses 
document.getElementById('calculate_total_expenses').addEventListener('click', function () { 
    // get expenses innerText 
    const playerExpensesElement = document.getElementById('player_expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseInt(playerExpensesString);

    // get manager input amount
    const managerExpensesField = document.getElementById('manager_expenses');
    const managerExpensesString = managerExpensesField.value;
    const managerExpenses = parseInt(managerExpensesString);

    // get coach input amount
    const coachExpensesField = document.getElementById('coach_expenses');
    const coachExpensesString = coachExpensesField.value;
    const coachExpenses = parseInt(coachExpensesString);

    // get total expenses innerText 
    const playerTotalExpensesElement = document.getElementById('total_expenses');
    // const playerTotalExpensesString = playerTotalExpensesElement.innerText;
    // const playerTotalExpenses = parseInt(playerTotalExpensesString);

    if (playerExpenses === 0) {
        alert('Please calculate player expenses');
        return;
    }
    else if ((managerExpensesString.trim()).length === 0 && (coachExpensesString.trim()).length === 0) {
        alert('Please Enter some amount for manager and Coach');
        return;
    }
    else if ((managerExpensesString.trim()).length === 0) {
        alert('Please Enter valid amount for manager');
        return;
    }
    else if (isNaN(managerExpensesField.value)) {
        alert('Please Enter valid amount for manager');
        return;
    }
    else if (managerExpenses < 1) {
        alert('Please Enter valid amount for manager');
        return;
    }
    else if ((coachExpensesString.trim()).length === 0) {
        alert('Please Enter valid amount for coach');
        return;        
    }
    else if (isNaN(coachExpensesField.value)) {
        alert('Please Enter valid amount for coach');
        return;        
    }
    else if (coachExpenses < 1) {
        alert('Please Enter valid amount for coach');
        return;        
    }
    managerExpensesField.value = '';
    coachExpensesField.value = '';

    // calculate total expenses 
    playerTotalExpensesElement.innerText = playerExpenses + managerExpenses + coachExpenses;
})


