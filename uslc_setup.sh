cd ./example-tds
echo "Start WAT"
start npm start
echo "Wait 5s"
sleep 5
echo "START Directories"
cd ../linksmart-directory
./buildAndRunMultiple.sh
echo "Wait 5s"
echo "Setup the Directories"
sleep 5
./setupMultiple.sh 
echo "Ready for usecase test, now you can run uslc_run.sh!"

