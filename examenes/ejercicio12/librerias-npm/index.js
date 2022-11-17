import axios from "axios";
import chalk from 'chalk';

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("Successssss!!!!!!")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROOROEROEROROE")
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  console.log(chalk.green("HOLA MUNDO"))