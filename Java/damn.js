let senhacorreta = "1234";
let senha;

do {
  senha = prompt("Digite a senha:");

  if (senha !== senhacorreta) {
    console.log("Senha incorreta");
  }
} while (senha !== senhacorreta);

console.log("Acesso permitido");

let opcao;
let preco;
let mensagem;
let total = 0;
let quantidade = 0;

while (true) {
  opcao = Number(prompt("Escolha uma opção:\n1-Hambúrguer\n2-Pizza\n3-Refrigerante\n4-Batata Frita\n0-Finalizar"));

  switch (opcao) {
    case 1:
      preco = 15;
      mensagem = "Hambúrguer adicionado!";
      break;
    case 2:
      preco = 20;
      mensagem = "Pizza adicionada!";
      break;
    case 3:
      preco = 6;
      mensagem = "Refrigerante adicionado!";
      break;
    case 4:
      preco = 10;
      mensagem = "Batata Frita adicionada!";
      break;
    case 0:
      mensagem = "Pedido finalizado!";
      break;
    default:
      console.log("Opção inválida!");
      continue;
  }

  document.getElementById("resultado").innerHTML += mensagem + "<br>";

  if (opcao === 0) {
    break;
  }

  total = total + preco;
  quantidade++;
}

for (let i = 1; i <= quantidade; i++) {
  document.getElementById("resultado").innerHTML += "Produto " + i + " registrado<br>";
}

let desconto = total >= 50 ? total * 0.1 : 0;
let totalFinal = total - desconto;

document.getElementById("resultado").innerHTML +=
  "Subtotal: R$ " + total.toFixed(2) + "<br>" +
  "Desconto: R$ " + desconto.toFixed(2) + "<br>" +
  "Total: R$ " + totalFinal.toFixed(2) + "<br>";