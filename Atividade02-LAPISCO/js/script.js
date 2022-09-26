function showAlert(imc) {
    let texto;
    if(imc < 18.5){
        texto = "você está abaixo do peso."
    } else if(imc >= 18.5 && imc <= 24.9){
        texto = "você está saudável!"
    } else if (imc > 24.9 && imc <= 29.9){
        texto = "você está com sobrepeso."
    } else if(imc>29.9 && imc <=39.9){
        texto = "você está com obesidade."
    } else if(imc > 39.9){
        texto = "você está com obesidade grave!"
    }
  return alert(`Seu IMC é ${imc}, ${texto}`);
}

function calcIMC(weight, height) {
  if (weight == 0 || height == 0) {
    return alert("Os dados não foram preenchidos.");
  } else {
    height = height / 100;
    let imc = weight / (height * height);
    return showAlert(imc.toFixed(2));
  }
}
