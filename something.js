function searchfood(){
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.getElementsByClassName('recipe-card');
    let names = document.getElementsByClassName('food-name');
    
    for (let i = 0; i < names.length; i++) {
        let name = names[i].textContent.toLowerCase();
        if (name.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}