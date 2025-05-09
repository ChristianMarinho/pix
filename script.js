document.getElementById("copyPix").addEventListener("click", function() {
    const pixCode = "701.551.054-50";
    
    // Criar um elemento de input temporário para copiar o código Pix
    const tempInput = document.createElement("input");
    tempInput.value = pixCode;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alterar o botão após a cópia
    const button = document.getElementById("copyPix");
    button.innerText = "Copiado!";
    button.style.backgroundColor = "#4CAF50"; // Verde moderno

    // Restaurar o texto original após 2 segundos
    setTimeout(() => {
        button.innerText = "Copiar Código Pix";
        button.style.backgroundColor = "#008CBA"; // Volta ao azul original
    }, 2000);
});
