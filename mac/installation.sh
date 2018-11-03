cp -r monexjs/ /Applications/monexjs
chmod 755 /Applications/monexjs/shell/startmongo.sh
chmod 755 /Applications/monexjs/shell/stopmongo.sh
chmod 755 /Applications/monexjs/shell/terminate.sh
chmod -R a+rwx /Applications/monexjs/shell/startmongo.sh
chmod -R a+rwx /Applications/monexjs/shell/stopmongo.sh
chmod -R a+rwx /Applications/monexjs/shell/terminate.sh
mv mongodb-osx-ssl-x86_64-4.0.3.tgz ~/
cd ~/ 
tar -zxvf mongodb-osx-ssl-x86_64-4.0.3.tgz 
mv mongodb-osx-x86_64-4.0.3 mongodb
mkdir -p /data/db
chown -R `id -un` /data/db
chmod -R a+rwx /data/db
chmod 755 /data/db