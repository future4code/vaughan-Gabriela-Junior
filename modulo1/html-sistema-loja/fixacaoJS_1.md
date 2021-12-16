```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salarioFixo = 2000
const comissão = (100 * qtdeCarrosVendidos) + (0.05 * valorTotalVendas)
const salarioTotal = salarioFixo + comissão

return salarioTotal
}
```