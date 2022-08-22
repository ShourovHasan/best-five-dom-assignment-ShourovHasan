// common function for players 
function playerAdd(playerId, btnSelected) {
    const btnSelect = document.getElementById(btnSelected);
    const listContainer = document.getElementById('players_list');

    // maximum 5 players can select verifcation 
    const selectedItemsNumber = listContainer.querySelectorAll('li').length;
    if (selectedItemsNumber > 4) {
        alert("You can't select more than 5 Players");
        return;
    }
    // console.log(listContainer.querySelectorAll('li').length);

    const playerNameFind = document.getElementById(playerId);
    const playerName = playerNameFind.innerText;
    // console.log(playerName);
    // add ordered list 
    const li = document.createElement('li');
    li.innerText = playerName;    
    li.style.marginBottom = '10px';
    li.style.paddingLeft = '10px';
    listContainer.appendChild(li);

    // after click set button disabled and change style 
    btnSelect.classList.add('disabled');
    btnSelect.classList.remove('bg-primary');
    btnSelect.classList.add('bg-white');
}

// select and disabled by eventHandler for all players
// document.getElementById('select_btn_1').addEventListener('click', function (event) {
//     playerAdd('player_name_1', 'select_btn_1');   
// })

document.getElementById('select_btn_2').addEventListener('click', function (event) {
    playerAdd('player_name_2', 'select_btn_2');   
})

document.getElementById('select_btn_3').addEventListener('click', function (event) {
    playerAdd('player_name_3', 'select_btn_3');   
})

document.getElementById('select_btn_4').addEventListener('click', function (event) {
    playerAdd('player_name_4', 'select_btn_4');   
})

document.getElementById('select_btn_5').addEventListener('click', function (event) {
    playerAdd('player_name_5', 'select_btn_5');   
})

document.getElementById('select_btn_6').addEventListener('click', function (event) {
    playerAdd('player_name_6', 'select_btn_6');   
})