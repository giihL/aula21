async function consultarCep(){
    const valor= cep.value
    const result = await (await
        fetch(`https://viacep.com.br/ws/${valor}/json/`)).json;
    
        const resultado = JSON.stringify(result);
        console.log(resultado)

        content.innerHTML = `
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
        `;
}

function criarEAddElement(valor){
    const enderecoSpan = document.createElement("span");
    enderecoSpan.textContent = dado;
    content.appendChild(enderecoSpan);

}


