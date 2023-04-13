let cecilia = criar_conta('Cecília Miranda', '1234567', 'ceci.miranda254@gmail.com', new Date(2003, 11, 29), 7000.00, 100.00)
console.log(cecilia)

let gabriel = criar_conta('Gabriel Marques', '7654321', 'm.gab@gmail.com', new Date(2004, 12, 21), 10000.00, 10.00)
console.log(gabriel)

console.log(autorizar_emprestimo(cecilia, 1000))//true
console.log(realizar_emprestimo(cecilia, 1000))//1100
console.log(autorizar_emprestimo(cecilia, 100000))//false
console.log(realizar_emprestimo(cecilia, 100000))//n vai

console.log(autorizar_financiamento(gabriel, 3000))//true
console.log(realizar_financiamento(gabriel, 3000))//3010
console.log(autorizar_financiamento(gabriel, 300000))//false
console.log(realizar_financiamento(gabriel, 300000))//n vai

console.log(consultar_saldo(cecilia))//aparece o saldo atual, 1100
console.log(consultar_saldo(gabriel))//saldo atual, 3010

console.log(creditar(gabriel, 10.00));//1110
console.log(debitar(cecilia, 510.00));//600
console.log(consultar_saldo(cecilia))

console.log(transferir(cecilia, 50, gabriel))
console.log(consultar_saldo(cecilia))
console.log(consultar_saldo(gabriel))
