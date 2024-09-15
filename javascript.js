const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const idInput = document.querySelector('#id')
const quantityInput = document.querySelector('#quantity')
const data = document.querySelector('#data')
const userInput = document.querySelector('#user')
const priceInput = document.querySelector('#price')


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Por favor, preencha o nome do produto!");
        return;
    }

    if(idInput.value === "" || idInput.value < 0){
        alert("Por favor, insira um id válido!")
        return;
    }

    if(quantityInput.value === "" || quantityInput.value <= 0){
        alert("Por favor, insira uma quantidade válida!")
        return;
    } 

    if(userInput.value === "" ){
        alert("Por favor, insira o nome do usuário responsável!")
        return;
    } 

    if(priceInput.value === "" || priceInput.value <= 0){
        alert("Por favor, insira um valor válido para o produto!")
        return;
    } 

    
    form.submit();
})

data.value = new Date().toLocaleDateString('pt-BR')


