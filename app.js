//variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre el 1 y el ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    /* Este codigo realiza la comparación */
    if (numeroUsuario == numeroSecreto){
        //Se cumple la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //incrementamos el contador cuando no acierta
        intentos++;
        
        if (intentos > maximosIntentos){
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}    