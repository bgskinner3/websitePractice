
Come Back to 
1. command shift F , look for ChangeME to things to change along the way






Notes to remember when building this
1. STATIC MIDDLEWARE
To serve static files such as images, CSS files, and JavaScript files, use the express. static built-in middleware function in Express. Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL. 

2. __dirname
Serves the absolute path when used with path(__dirname, 'filename---- here------' )

3. chalk dependency is used to add color to the terminal 

4. new Sequelize(postgres://localhost:5432/${packageJson.name}, {
  logging: false 
})
    --- the logging part prevents the database pfrom printing in the terminal 

5. db.sync({force : true})
     -- :force

Set to true to drop the table before creating it. Defaults to false.

Basically, this helps ensure database integrity. If you're manually tooling around with your migrations, it's helpful to ensure that you're creating new tables from a clean slate, rather than risking naming conflicts that stem from tables that have been created on a one-off basis