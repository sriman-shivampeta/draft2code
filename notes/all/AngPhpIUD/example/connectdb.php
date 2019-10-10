<?php 
define("HOSTNAME","localhost");
define("USERNAME","");
define("PASSWORD","");
define("DATABASE","test");

$dbhandle=new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE) or die("Unable to Connect DB");

?>