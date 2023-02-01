function caesarCipher(s, k) {
    let asciiForm;
    let encryptedMessage = '';
    let rotation;
    let remanent;
    
    while(k > 25){
        k -= 26; //ajusto a mi conjunto el k quitando rataciones sobre el conjunto
    }
    
    for(let i of s){
        asciiForm = i.charCodeAt(0); //convierte a ascii para operar sobre su valor decimal
        if((asciiForm>64 && asciiForm<91) || (asciiForm>96 && asciiForm<123)){ //si es una letra mayuscula o miniscula
            rotation = asciiForm+k //hace la rotacion
            if(((asciiForm+k) > 90) && asciiForm<91){ //si al hacer la rotacion se sale de los limites -caso mayusculas-
                    remanent = k - (90-asciiForm) - 1; //lo que hay que sumar despues de dar la vuelta. El 1 adicional considera que se completa la vuelta y no se queda en la z
                    rotation = 65 + remanent;
            }else if(((asciiForm+k) > 122) && asciiForm<123){ //-caso minusculas-
                    remanent = k - (122-asciiForm) - 1;
                    rotation = 97 + remanent;
            }
            encryptedMessage = encryptedMessage + String.fromCharCode(rotation); //agrega la letra reconvirtiendo de ascii
        }else{
            encryptedMessage = encryptedMessage + i; //si no es letra, solo lo agrega
        }
    }
    return encryptedMessage;

}


caesarCipher('!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U', 62);