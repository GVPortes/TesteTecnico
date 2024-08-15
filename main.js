//comentei cada trecho para facilitar a correção e permitir que você entenda o raciocínio de cada trecho, ok?
//espero que esteja de acordo com o esperado
//user é o parametro que a função recebe, se p usuário for ativo, ele é retornado num determinado array
//E se não for ativo ele é ignorado

function transformData(users) {
    // Filtrar usuários ativos
    const activeUsers = users.filter(function(user) {
      return user.isActive;
    });
  
    // criando um array com as propriedades 'id' e 'name'
    const filteredUsers = activeUsers.map(function(user) {
      return { id: user.id, name: user.name };
    });
  
    // aqui ele ordena o array em ordem alfabetic  
    filteredUsers.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  
    return filteredUsers;
  }
  

  const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true }
  ];
  
  // aqui chama a função transformData e mostra o resultado
  const result = transformData(users);
  console.log(result);

  //agora a segunda etapa:

async function fetchUserData() {
    // requisição para a API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // resposta em JSON
    const users = await response.json();
    
    const filteredUsers = users.filter(function(user) {
      return user.username.startsWith('C');
    });
  
    // aqui retornamos os usuários filtrados
    return filteredUsers;
  }
  
  // testando se a função está funcionando
  fetchUserData().then(function(data) {
    console.log('Resultado da Tarefa 2:', data);
  });
  
// tarefa 3

  //Aqui contamos as ocorrencias para cada item no array
  function countOccurrences(arr) {
    // criando um objeto vazio para armazenar as contagens
    const occurrences = {};

    // Segue o loop para percorrer cada item no array e contar as ocorrências
    arr.forEach(function(item) {
      // Se o item já existe no objeto, incrementa a contagem
      if (occurrences[item]) {
        occurrences[item]++;
      } else {
        // Se o item não existir inicializa a contagem como 1, esse será feito só na primeira vez que o programa passar pelo item
        occurrences[item] = 1;
      }
    });

    // retorna o objeto com as contagens
    return occurrences;
  }

  // exemplo de entrada para testar a função. Na versao comentada, temos valores vazios, pois foi assim que testei(mocado)
  // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', '',''
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

  // Chamada da função countOccurrences e exibição do resultado no console
  const occurrencesResult = countOccurrences(fruits);
  console.log('Resultado da Tarefa 3:', occurrencesResult);

// tarefa 4 agrupando os objetos
function groupByCategory(items) {
  // aqui criamos um objeto vazio para armazenar os grupos por tipo
  const groupedItems = {};

  // Loop para percorrer cada item no array se a unidade não existe ainda ele cria uma nova chave com um array vazio
  items.forEach(function(item) {
    // Verificar se a categoria já existe como uma chave no objeto
    if (!groupedItems[item.category]) {
      // Se a categoria não existe, cria uma nova chave com um array vazio
      groupedItems[item.category] = [];
    }
    // Adicionar o item ao array correspondente à sua categoria
    groupedItems[item.category].push(item);
  });

  // retornando o objeto com os itens agrupados por categoria
  return groupedItems;
}

// valores mocados
const items = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'broccoli', category: 'vegetable' }
];

// debug
const groupedResult = groupByCategory(items);
console.log('Resultado da Tarefa 4:', groupedResult);
