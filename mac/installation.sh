cp -r monexjs/ /Applications/monexjs
chmod 755 /Applications/monexjs/shell/startmongo.sh
chmod 755 /Applications/monexjs/shell/stopmongo.sh
chmod 755 /Applications/monexjs/shell/terminate.sh

chmod -R a+rwx /Applications/monexjs/shell/startmongo.sh
chmod -R a+rwx /Applications/monexjs/shell/stopmongo.sh
chmod -R a+rwx /Applications/monexjs/shell/terminate.sh

mkdir -p /data/db
mkdir -p /Applications/monexjs/mongodb/data/db
chmod -R a+rwx /data/db
chmod 755 /data/db

chmod -R a+rwx /Applications/monexjs/mongodb/data/db
chmod 755 /Applications/monexjs/mongodb/data/db


