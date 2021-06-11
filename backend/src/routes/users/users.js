const [pool] = require('../../controllers/db')

const authLogin = (request, response) => {
  response.status(200).json('logou!');
}

const getUsers = (request, response) => {
    pool.query('SELECT id_cliente,nome,cpf,nascimento,foto FROM clientes ORDER BY id_cliente ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT id_cliente,nome,cpf,nascimento,foto FROM clientes WHERE id_cliente = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { id_cliente, nome, cpf, nascimento, localizacao, foto, senha } = request.body
    if(nome){
    pool.query('INSERT INTO clientes (id_cliente,nome,cpf,nascimento,localizacao,foto,senha) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_cliente, nome, cpf, nascimento, localizacao, foto, senha], (error, results) => {
      if (error) {
        response.status(201).send('Erro no banco, tente novamente mais tarde.')
      }
      response.status(201).send(`Usuário Help adicionado: ${nome}`)
    })
  }
}
  

  module.exports = {
    authLogin,
    getUsers,
    getUserById,
    createUser,
  }