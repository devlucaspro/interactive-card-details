let inputName = document.getElementById('name');
inputName.addEventListener('keyup', () => {

    let customName = document.getElementById('customName');
    customName.style.textTransform = 'capitalize'
    customName.innerHTML = inputName.value
});


function formatCardNumber(input) {
    // Remove tudo o que não é número
    let cardNumber = input.value.replace(/\D/g, '');

    // Adiciona um espaço a cada 4 dígitos
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Remove o espaço em branco adicionado depois do quarto dígito se o campo já tiver 19 caracteres
    if (cardNumber.length > 19) {
        cardNumber = cardNumber.slice(0, 19);
    } else if (cardNumber.length === 19 && cardNumber.charAt(18) === ' ') {
        cardNumber = cardNumber.slice(0, 18);
    }

    // Atualiza o valor do input
    input.value = cardNumber;

    // Atualiza o valor do elemento customNumber com o número formatado
    let customNumber = document.getElementById('numeroDetails');
    customNumber.innerHTML = cardNumber;
};



let inputMonth = document.getElementById('month');
inputMonth.addEventListener('keyup', () => {

    if (inputMonth.value.length > 2) {
        inputMonth.value = inputMonth.value.slice(0, 2);
    }

    let customMonth = document.getElementById('customMonth');
    customMonth.innerHTML = inputMonth.value
});


let inputYear = document.getElementById('year');
inputYear.addEventListener('keyup', () => {

    if (inputYear.value.length > 2) {
        inputYear.value = inputYear.value.slice(0, 2)
    }

    let customYear = document.getElementById('customYear');
    customYear.innerHTML = inputYear.value
});


let inputCvc = document.getElementById('inputCvc')
inputCvc.addEventListener('keyup', () => {

    if (inputCvc.value.length > 2) {
        inputCvc.value = inputCvc.value.slice(0, 3);
    }

    let customCvc = document.getElementById('customCvc');
    customCvc.innerHTML = inputCvc.value
});


function validarForm(button) {
    let input1 = document.getElementById('name');
    let input2 = document.getElementById('number');
    let input3 = document.getElementById('month');
    let input4 = document.getElementById('year');
    let input5 = document.getElementById('inputCvc');

    if (input1.value === '') {
        // exibe mensagem de erro para input1
        let msg1 = document.getElementById('msg1');
        msg1.innerHTML = "Can't be blank"
        msg1.classList.add('redSpan');

        let input = document.getElementById('name')
        input.style.border = '1px solid var(--inputError)'
    } else {
        let input = document.getElementById('name')
        input.style.border = '1px solid var(--btnPrimary)'

        let msg1 = document.getElementById('msg1');
        msg1.innerHTML = ""
        msg1.classList.remove('redSpan');

        verification()

    }

    if (input2.value === '') {
        // exibe mensagem de erro para input2
        let msg2 = document.getElementById('msg2');
        msg2.innerHTML = "Can't be blank, numbers only"
        msg2.classList.add('redSpan');

        let input = document.getElementById('number')
        input.style.border = '1px solid var(--inputError)'
    } else {
        let input = document.getElementById('number')
        input.style.border = '1px solid var(--btnPrimary)'

        let msg2 = document.getElementById('msg2');
        msg2.innerHTML = ""
        msg2.classList.remove('redSpan');

        verification()

    }

    if (input3.value === '') {
        // exibe mensagem de erro para input3
        let msg3 = document.getElementById('msg3');
        msg3.innerHTML = "Can't be blank"
        msg3.classList.add('redSpan');

        let input = document.getElementById('month')
        input.style.border = '1px solid var(--inputError)'
    } else {
        let input = document.getElementById('month')
        input.style.border = '1px solid var(--btnPrimary)'

        let msg3 = document.getElementById('msg3');
        msg3.innerHTML = ""
        msg3.classList.remove('redSpan');

        verification()

    }

    if (input4.value === '') {
        // exibe mensagem de erro para input3
        let msg4 = document.getElementById('msg4');
        msg4.innerHTML = "Can't be blank"
        msg4.classList.add('redSpan');

        let input = document.getElementById('year')
        input.style.border = '1px solid var(--inputError)'
    } else {
        let input = document.getElementById('year')
        input.style.border = '1px solid var(--btnPrimary)'

        let msg4 = document.getElementById('msg4');
        msg4.innerHTML = ""
        msg4.classList.remove('redSpan');

        verification()

    }

    if (input5.value === '') {
        // exibe mensagem de erro para input3
        let msg5 = document.getElementById('msg5');
        msg5.innerHTML = "Can't be blank"
        msg5.classList.add('redSpan');

        let input = document.getElementById('inputCvc')
        input.style.border = '1px solid var(--inputError)'
    } else {
        let input = document.getElementById('inputCvc')
        input.style.border = '1px solid var(--btnPrimary)'

        let msg5 = document.getElementById('msg5');
        msg5.innerHTML = ""
        msg5.classList.remove('redSpan');

        verification()

    }
}


function verification() {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            return false;
        }
    }
    completeState();
}



function completeState() {
    let elementos = document.querySelectorAll(".my-elements");
    elementos.forEach(function (elemento) {
        elemento.remove();
    });

    let btn = document.getElementById('btn');
    let img = document.createElement('img');
    img.src = './images/icon-complete.svg'
    img.alt = 'Icon completed'
    img.style.margin = '0 auto'
    btn.insertAdjacentElement('beforebegin', img);

    let title = document.createElement('h2');
    title.innerHTML = 'THANK YOU!'
    title.style.textAlign = 'center'
    title.style.marginTop = '15px'
    title.style.letterSpacing = '0.3rem'
    title.style.fontWeight = 500
    btn.insertAdjacentElement('beforebegin', title)

    let description = document.createElement('p');
    description.innerHTML = "We've added your card details"
    description.style.textAlign = 'center'
    description.style.color = 'var(--dark-gray)'
    description.style.marginBottom = '15px'
    btn.insertAdjacentElement('beforebegin', description);

    btn.innerHTML = 'Continue'
}