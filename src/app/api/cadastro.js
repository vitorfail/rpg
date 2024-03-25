const fs = require('fs');
export default function Cadastro(user, senha) {
    // Lê um arquivo usando o módulo fs
    const fileData = fs.readFileSync('users.json');
    const jsonData = JSON.parse(fileData);
    if(jsonData.users.some(usuario => usuario.nome === nome)){
        return "EXIST"
    }
    else{
        const novoUsuario = {
            nome: user,
            senha:senha
            // outras propriedades do usuário, se houver
        };
        jsonData.usuarios.push(novoUsuario);
        
        // Converter o objeto JSON de volta para uma string JSON
        const jsonAtualizado = JSON.stringify(jsonData, null, 2);
    
        // Salvar o arquivo JSON atualizado
        fs.writeFileSync('dados.json', jsonAtualizado);
        return true
    }
  }