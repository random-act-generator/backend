module.exports = {

  development: {
    client: 'sqlite3' ,

    useNullAsDefault: true,

    connection: {
      filename: './data/users.sqlite3'
    }
  } ,

  migrations: {
    directory: './migrations'
  } ,
}