## Express Application
Express is a nodeJS package which helps in creating web application.

## Prerequisites
You need the following packages to be installed:
* NodeJS
* NPM
* Git
* Mongo DB

##### Express Instalation

    npm install -g express
    
##### Express code generator installation (Optional)

    npm install -g generator-express

Express generator is normally used to generated sample code to start with an application. Here it is optional step, as the source code is already present.
    
##### Create a new project with sample code (Optional)
    
    express express

This is the command to generate a sample project called "express".

##### Check out sources

	git clone https://github.com/karasatishkumar/nodejs.git
    
##### Navigate to project

I have put all my nodeJS project in one project. for this we have to navigate to the express project first.

    cd express

##### Install the dependecies
    
    npm install

This step will create a folder called "node_module" inside the project.
    
##### Mongo DB data population

    mongo
    use express
    db.usercollection.insert({'username' : 'satish','email' : 'karasatishkumar@gmail.com','fullname' : 'Satish Kumar','age' : 27,'location' : 'Bangalore','gender' : 'Male'})
    db.usercollection.insert({'username' : 'sanjeev','email' : 'karasanjeevkumar@gmail.com','fullname' : 'Sanjeev Kumar','age' : 27,'location' : 'Bangalore','gender' : 'Male'})
    db.usercollection.insert({'username' : 'priyam','email' : 'priyam@gmail.com','fullname' : 'Priyam Chaudhary','age' : 27,'location' : 'Bangalore','gender' : 'Male'})
    db.usercollection.insert({'username' : 'pritam','email' : 'pritam@gmail.com','fullname' : 'Pritam Ghosh','age' : 27,'location' : 'Bangalore','gender' : 'Male'})    db.usercollection.insert({'username' : 'pritam','email' : 'pritam@gmail.com','fullname' : 'Pritam Ghosh','age' : 27,'location' : 'Bangalore','gender' : 'Male'})



## Project Deployment

    npm start

Hit the following url in the browser to test the application
    
    http://localhost:3000/

## Contributing
Pull requests are welcome. Looking forward varius sample node projects.

## Staying in touch

## License

## Release
