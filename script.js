//==========================================Animations===============================================================

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
  duration:1000,
  offSet:100,
})

//===========================================formulary validation====================================================== //


const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const text =  document.getElementById("story");
const marcado = document.getElementById("todos-meios");
const checkboxOption = document.querySelectorAll(".option");
const radios=document.querySelectorAll('input[name="carnes"]');
const errorDisplay = document.querySelector('#input2 .error');


form.addEventListener("submit", e => {
  e.preventDefault();
  validarNome();
  validarEmail();
  validarTelefone();
  validarCheckBox();
  validarText();
  validarRadio();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validarNome = () => {
  const nameValue = username.value.trim();
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (!regName.test(nameValue)) {
    setError(username, "Digite Nome e Sobrenome");
    username.focus();
    return false;
  } else {
    setSuccess(username);
    return true;
  }
};

const validarEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError(email, "Digite um endereço de email");
    email.focus();
    return false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Digite um endereço de email válido");
    email.focus();
    return false;
  } else {
    setSuccess(email);
    return true;
  }
};

const validarTelefone = () => {
  const telefoneValue = telefone.value.trim();
  const numeroTelefone = telefoneValue.replace(/\D/g, "");

  if (numeroTelefone === '') {
    setError(telefone, "Digite um número de telefone");
    telefone.focus();
    return false;
  } else if (numeroTelefone.length < 11) {
    setError(telefone, "Digite um número válido");
    return false;
  } else if (!/^\d+$/.test(numeroTelefone)) {
    setError(telefone, "Digite um número válido");
    return false;
  } else {
    setSuccess(telefone);
    return true;
  }
};

const validarCheckBox = () => {
  let valid = false;

  if (document.getElementById("todos-meios").checked) {
    valid = true;
  } else if (document.getElementById("email-contato").checked) {
    valid = true;
  } else if (document.getElementById("sms-contato").checked) {
    valid = true;
  } else if (document.getElementById("whatsapp").checked) {
    valid = true;
  }

  if (valid) {
   
    setSuccess(valid); 
    return true;
  } else {
    setError(document.getElementById("todos-meios"), "Selecione ao menos uma opção");
    return false;
  }
};

const validarText = () => {
  const textValue = text.value.trim();

  if (textValue === "") {
    setError(text, "Digite alguma coisa");
    return false;
  }
  if (textValue.length < 5) {
    setError(text, "Nos mande uma frase");
    return false;
  } else {
    setSuccess(text);
    return true;
  }
};

const validarRadio = () => {
  let selectedOption = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedOption = true;
      break;
    }
  }

  if (!selectedOption) {
    setError(radios[0], "Selecione uma opção");
    return false;
  } else {
    setSuccess(radios[0]);
    return true;
  }
};

function marcarTodos() {
  const estaMarcado = marcado.checked;

  for (let i = 0; i < checkboxOption.length; i++) {
    checkboxOption[i].checked = estaMarcado;
  }
}