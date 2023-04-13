function criar_conta(nome, cpf, email, nasc, renda, saldo) {
    let conta = {'nome': nome, 'cpf': cpf, 'email': email, 
            'nascimento': nasc, 'renda': renda, 'saldo': saldo };
      return conta;
}



function autorizar_emprestimo(cliente, valor) {
  if(valor <= (30/100) * cliente.renda){
    return true;
  }else{
    return false;
  }
}
function realizar_emprestimo(cliente, valor){
  if(autorizar_emprestimo(cliente, valor) == true){
      creditar(cliente, valor)
        return`${cliente.nome}, o emprestimo no valor de R$${valor},00 foi realizado com sucesso! Seu saldo é de R$${cliente.saldo},00 :)`
  }else{
    return`${cliente.nome}, o emprestimo não pode ser realizado! :(`
  }
}



 function autorizar_financiamento(cliente, valor) {
  if(valor <= 10 * cliente.renda){
    return true;
  }else{
    return false;
  }
}
function realizar_financiamento(cliente, valor){
  if(autorizar_financiamento(cliente, valor) == true){
      creditar(cliente, valor)
        return`${cliente.nome}, o financiamento no valor de R$${valor},00 foi realizado com sucesso! Seu saldo é de R$${cliente.saldo},00 :)`
  }else{
    return`${cliente.nome}, o financiamento não pode ser realizado! :(`
  }
}
