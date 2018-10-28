# MonexJs development

javascript server and mongodb admin manager

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system for test and developement.

### Prerequisites

What things you need to setup the project and how to install them     

1) node     
    
    - download node from https://nodejs.org/      


2) electron       

    - install electron useing npm install electron -g      



#### to verify you have node and electron installed
```
run node -v
and electron -v
```

### Installing

  - clone using git clone https://github.com/adeojoemmanuel/monexjs_dev.git
  
  - after cloneing go into the directory 

  - lunch your terminal and execute "node installation.js"      
      
       note would take a while

  - you should now have the project in Applications/monexjs directory

  - go to /Application/monjexjs/desktop in your terminal

  - run electron .

  - click start node 

  - and start mongo

  - access the mongoadmin from localhost/9090

  - view console logs on the electron app console

## Running  tests 

    #### for the  node server

    > - create a new project

    > - by creating a folder in the /Application/monjexjs/myprojects directory

    > - create an index html file and write a basic html code in it

    > - access the project by localhost:9090/project folder name

    #### for the  mongoadmin manager

    > - access the mongoadmin from localhost/9090 after following the installation process

    > - create new database in the admin, components etc


### unit test

script could be tested in small units by running them  using terminal 

 
```
e.g node stoprun.js  
```
in the monexjs root directory to stop any running script on the port 9090

###  coding style 

 - modular developement is highly encouraged so that a module could be easily reused 
 - make sure all node_modules on the root directory and monex/node_modules directory are ignored


```
e.g add directory_name/node_modules  in gitignore
```

## Deployment

the app would be compliled as released after debugging and testing

## Built With

* [node](https://nodejs.org/) - JavaScript runtime Server enviroment
* [electron](https://electronjs.org/) - desktop developement
* [express](https://expressjs.com/) - server side developement

## Contributing

you would be added to the contributors when your pull request is accepted.

## Versioning

We would be  useing [SemVer](http://semver.org/) for versioning. 

## Authors

* **Adeojo Emmanuel** - *Initial work* - [Adeojo Emmanuel](https://github.com/adeojoemmanuel)

## Co-Authors

* **Oyindahl**
* **Oyetunmibi Oyinkan**

See also the list of [contributors](https://bitbucket.org/oyink7/monexjs/src/master/contributors.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc



# TASK TO BE DONE

- redevelop userinterface for the mongo admin
- seting up a desktop installer using electron

### any additional task should be added below 

