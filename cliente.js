function consultar_saldo(cliente){
    return `${cliente.nome} seu saldo é de R$${cliente.saldo},00`;
  }
  
  function creditar(cliente, valor) {
     let novo_saldo = valor + cliente.saldo
     cliente.saldo = novo_saldo
     return `Crédito atualizado! ${cliente.nome} seu saldo é de R$${novo_saldo},00` 
  }
  
  function debitar(cliente, valor){
    if (cliente.saldo >= valor && valor > 0){
      cliente.saldo -= valor;
      return true;
    } else{
      return false;
    }
  }
  
  function transferir(origem, valor, destino) {
    if(origem.saldo > 0 && valor <= origem.saldo){
    debitar(origem, valor);
    creditar(destino, valor);
    }
    return `Transferência no valor de R$${valor},00 para ${destino.nome}, realizada com sucesso!`
  }