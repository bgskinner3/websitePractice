const { db } = require('./server/db');
const { red, yellow } = require('chalk')


const seed = async () => {
  try {
    await db.sync({ force: true})
    //add models here with Promise.all
    //example fomr before, build dummy data above and then ...
    // models .map((model)) => {
    //   return 'name of model creating it'.create(model);
    // });
  } catch (error) {
    console.log(red(error))
  }
}
module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(yellow('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}