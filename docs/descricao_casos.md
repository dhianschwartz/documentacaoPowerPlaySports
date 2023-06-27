# 4.1 Descrição de Caso de Uso

---

1.0 Descrição de Caso de Uso: Manter Usuário

■ Descrição: este caso de uso permite ao administrador do sistema manter as informações dos usuários cadastrados na loja de artigos esportivos.

■ Objetivo: possibilitar o cadastro, atualização e exclusão de informações dos usuários.

■ Ator envolvido: Administrador

■ Interação entre Ator e Sistema

Administrador Sistema

Solicita ao sistema a manutenção das informações dos usuários.
Exibe uma interface com a lista de usuários cadastrados, contendo nome, e-mail, telefone e outras informações relevantes.
Permite a criação de um novo usuário, informando seus dados.
Armazena as informações do novo usuário (EX01).
Exibe os detalhes de um usuário específico, permitindo a edição de suas informações.
Atualiza as informações do usuário (EX02).
Exclui o registro de um usuário específico (EX03).
Retorna o resultado da operação.
Fecha a interface.

■ Exceções:

◻ EX01 - caso ocorra algum erro ao armazenar as informações do novo usuário, a mensagem "Erro ao cadastrar usuário" é apresentada.

◻ EX02 - caso ocorra algum erro ao atualizar as informações do usuário, a mensagem "Erro ao atualizar usuário" é apresentada.

◻ EX03 - caso ocorra algum erro ao excluir o usuário, a mensagem "Erro ao excluir usuário" é apresentada.

■ Regras de Negócio:

◻ RN01 - o e-mail do usuário deve ser único, não permitindo a duplicação de registros.

1.1 Descrição de Caso de Uso: Manter Produto

■ Descrição: este caso de uso permite ao administrador do sistema manter as informações dos produtos disponíveis na loja de artigos esportivos.

■ Objetivo: possibilitar o cadastro, atualização e exclusão de informações dos produtos.

■ Ator envolvido: Administrador

■ Interação entre Ator e Sistema

Administrador Sistema

Solicita ao sistema a manutenção das informações dos produtos.
Exibe uma interface com a lista de produtos cadastrados, contendo nome, descrição, preço e outras informações relevantes.
Permite a criação de um novo produto, informando seus dados.
Armazena as informações do novo produto (EX04).
Exibe os detalhes de um produto específico, permitindo a edição de suas informações.
Atualiza as informações do produto (EX05).
Exclui o registro de um produto específico (EX06).
Retorna o resultado da operação.
Fecha a interface.

■ Exceções:

◻ EX04 - caso ocorra algum erro ao armazenar as informações do novo produto, a mensagem "Erro ao cadastrar produto" é apresentada.

◻ EX05 - caso ocorra algum erro ao atualizar as informações do produto, a mensagem "Erro ao atualizar produto" é apresentada.

◻ EX06 - caso ocorra algum erro ao excluir o produto, a mensagem "Erro ao excluir produto" é apresentada.

■ Regras de Negócio:

◻ RN02 - o preço do produto deve ser um valor válido, não permitindo valores negativos ou nulos.
