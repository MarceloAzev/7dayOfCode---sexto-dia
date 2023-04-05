var listaDeCompra = {
            frutas: [],
            laticinios: [],
            congelados: [],
            doces:[]     
        }

let decisao = "sim"; //condição pra entrar no Loop

decisao = prompt("Você deseja adicionar ou remover uma comida na sua lista de compras?");

while(decisao.toLowerCase() != "sair" && decisao.toLowerCase() != 'sai'){ // vai permancer no loop até uma das condições serem falsas, por isso o E e não o OU
    if(decisao.toLowerCase() == "adicionar"){
      let lista = prompt("Qual item deseja adicionar a lista de compra?"); //adiciona o elemento na lista
      let categoria = prompt("Qual dessas categoria deseja adicionar o item: Frutas, laticínios, congelados, doces?") // adiciona o item a categoria correta
      
      if(categoria.toLowerCase() == "frutas"){
          listaDeCompra.frutas.push(lista);
      }else if(categoria.toLowerCase() == "laticínios"){
          listaDeCompra.laticínios.push(lista);
      }else if(categoria.toLowerCase() == "congelados"){
          listaDeCompra.congelados.push(lista);
      }else if(categoria.toLowerCase() == "doces"){
          listaDeCompra.doces.push(lista);
      }else{
        alert("opção invalida");
      }
      
    }else if (decisao.toLowerCase() == "remover"){
     if(listaDeCompra.frutas.length === 0 && listaDeCompra.laticinios.length === 0 && listaDeCompra.congelados.length === 0 && listaDeCompra.doces.length === 0){
      alert("Lista Vazia!");
     }else{
      
      let remover = prompt(`Lista de compras:\n  Frutas: ${listaDeCompra.frutas}\n  Laticínios: ${listaDeCompra.laticinios}\n  Doces: ${listaDeCompra.doces}\n  Congelados: ${listaDeCompra.congelados}\n\nQual produto você deseja remover?`);
		if(listaDeCompra.frutas.indexOf(remover) != -1){
			listaDeCompra.frutas.splice(listaDeCompra.frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(listaDeCompra.laticinios.indexOf(remover) != -1){
			listaDeCompra.laticinios.splice(listaDeCompra.laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (listaDeCompra.doces.indexOf(remover) != -1){
			listaDeCompra.doces.splice(listaDeCompra.doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (listaDeCompra.congelados.indexOf(remover) != -1){
			listaDeCompra.congelados.splice(listaDeCompra.congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
     }
    }
    
    decisao = prompt("O que deseja fazer na lista de compras:\n Adicionar \n Remover \n Sair"); // a pergunta no final para continuar ou sair do loop
  

}
alert(`Lista de compras:\n  Frutas: ${listaDeCompra.frutas}\n  Laticínios: ${listaDeCompra.laticinios}\n  Doces: ${listaDeCompra.doces}\n  Congelados: ${listaDeCompra.congelados}`);


