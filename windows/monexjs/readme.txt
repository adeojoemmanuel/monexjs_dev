###### MonexJS Version 0.1.1 ############# by team  monex ####
#          MONEXJS MONEXJS MONEXJS MONEXJS                   #
#                                                            #
##############################################################

Important! Javascript this package needs nodeJS and mongo DB 



Download from
http://www.Nodejs.com. 
http://www.mongodb.com    


  + Nodejs 
  + MongoDB
  + Monexjs  admin
  + Monexjs security
  + MonexJs Control Panel Version 0.1.1 by Team Monex (Great Thanks!!))
    See: http://www.monexjs.com/about/creators


--------------------------------------------------------------- 

* System Requirements:
 
  + 64 MB RAM (RECOMMENDED)
  + 750 MB free fixed disk 
  + Windows 2003, XP (RECOMMENDED), VISTA, Windows 7

---------------------------------------------------------------

* ATTENTION!!!!

For trouble with the MongoDB connection (via mongo and API in node) see also the startpage: 
http://monexjs/help/index.html

* QUICK Setup for development:

clone project from http://github.com/___dir will be added

[NOTE:
 * desktop folder is for the desktop app 
 * monex/admin folder is for the database admin 
 * help/electron help folder is electron official example 
 * help/electron exam is just a basic electron example 
]   

*** TO RUN THE DESKTOP APP

Step 1:  cut the monex folder and paste it to your c: drive 
  
  -navigate into the desktop folder
  -open cli 
  -type in electron .

*** TO RUN THE MONEXADMIN APP

Step 2: If Desktop app sets up successfully,  
"serverstart".bat", mongo with "mongostart".bat". Stop the mongo Server with "mongostop.bat". For shutdown the node server, only close the serverstart Command (CMD). Or use the  Control Panel with click on the red cancle button  on "monexjscontol.exe"! 

Step 3: Start your browser and type http://127.0.0.1:9090 or http://localhost:9090 in the location bar. You should see our pre-made
start page with certain examples and test screens.

Step 4: html, js (with js, as *.js, *.ts, *.html, *.jade), Perl by default with *.cgi, SSI with *.html are all located in => C:\monex\myprojects\.
Examples:
- C:\monex\myproject\test.html => http://localhost:3000/test.html
- C:\monex\myproject\myhome\test.html => http://localhost:3000/myhome/test.php

Step 5: Monex UNINSTALL? Simply remove the "monex" Directory.
But before please shutdown the node and mongo.

---------------------------------------------------------------

* PASSWORDS:

1) mongo:

   User: root
   Password:
   (means no password!)

  

----------------------------------------------------------------

A matter of security (A MUST READ!)

As mentioned before, MONEX is not meant for production use but only for developers in a development environment. The way MONEX is configured is to be open as possible and allowing the developer anything he/she wants. For development environments this is great but in a production environment it could be fatal. Here a list of missing security 
in MONEX:

- The MONGO administrator (root) has no password.
- The MONGO daemon is accessible via network.
- monex admin is accessible via network.
- Examples are accessible via network.

To fix most of the security weaknesses simply call the following URL:

	http://localhost:9090/security/

The root password for MONGO and MONGO ADMIN, and also a MONEX directory protection can being established here.

* NOTE: Some example sites can only access by the local systems, means over localhost. 

---------------------------------------------------------------

* NOTES:

(1) The Mongo server can be started by double-clicking (executing) mongostart.bat
This file can be found in the same folder you installed Monex in, most likely this will be C:\Monex\.
The exact path to this file is X:\Monex\monex_start.bat, where "X" indicates the letter of the drive you unpacked Monex into. 
This batch file starts the Mongo server in console mode. The first intialization might take a few minutes.
Do not close the DOS window or you'll crash the server! To stop the server, please use mongostop.bat, which is located in the same directory. Or use the fine monex Control Panel with double-click on "monex-control.exe" for all these things! 


(2) Mongo starts with standard values for the user id and the password. The preset user id is "root", the password is "" (= no password). 


    

  	    	
              ---------------------------------------------------------------    

        		        Have a lot of fun! | team monex! | keep Coding!
