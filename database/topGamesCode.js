const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'top_boardgamesDB',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Find games by number of players',
        'Find games within a specific genre',
        'Search for a specific game',
        'exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Find games by number of players':
          playerSearch();
          break;

        case 'Find all games who have the same rating':
          multiSearch();
          break;

        case 'Find games within a specific genre':
          rangeSearch();
          break;

        case 'Search for a specific game':
          songSearch();
          break;

        case 'Exit':
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const gameSearch = () => {
  inquirer
    .prompt({
      name: 'game',
      type: 'input',
      message: 'What boardgame would you like to search for?',
    })
    .then((answer) => {
      const query = 'SELECT name, genre, players, rate FROM top100games WHERE ?';
      connection.query(query, { game: answer.game }, (err, res) => {
        if (err) throw err;
        res.forEach(({ genre, players, rate }) => {
          console.log(
            `Game: ${game} || Players: ${players} || Rating: ${rating}`
          );
        });
        runSearch();
      });
    });
};

const multiSearch = () => {
  const query =
    'SELECT game FROM top100 game BY genre HAVING players (*) > 1';
  connection.query(query, (err, res) => {
    if (err) throw err;
    res.forEach(({ game }) => console.log(game));
    runSearch();
  });
};

const genreSearch = () => {
  inquirer
    .prompt([
      {
        name: 'start',
        type: 'input',
        message: 'Enter starting genre: ',
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
      {
        name: 'end',
        type: 'input',
        message: 'Enter ending genre: ',
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then((answer) => {
      const query =
        'SELECT game,genre,players,rating FROM top100 WHERE position BETWEEN ? AND ?';
      connection.query(query, [answer.start, answer.end], (err, res) => {
        if (err) throw err;
        res.forEach(({ genre, players, game, rating }) =>
          console.log(
            `Game: ${game} || Players: ${players} || Genre: ${genre} || Rating: ${rating}`
          )
        );
        runSearch();
      });
    });
};

const Search = () => {
  inquirer
    .prompt({
      name: 'player',
      type: 'input',
      message: 'How many players are playing?',
    })
    .then((answer) => {
      console.log(`You searched for "${answer.song}"`);
      connection.query(
        'SELECT * FROM top100 WHERE ?',
        { game: answer.game },
        (err, res) => {
          if (err) throw err;
          if (res[0]) {
            console.log(
              `Genre: ${res[0].genre} || Players: ${res[0].players} || Game: ${res[0].game} || Rating: ${res[0].rating}`
            );
            runSearch();
          } else {
            console.error('game not found :(\n');
            runSearch();
          }
        }
      );
    });
};
