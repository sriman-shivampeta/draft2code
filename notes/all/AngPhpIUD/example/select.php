<?php
//database settings
include "connectdb.php";

$query="select * from contactform ORDER BY `id` DESC";
//$data = array();
$rs=$dbhandle->query($query);

while ($row = $rs->fetch_array()) {
  $data[] = $row;
}

	//print_r($data);
    
    print json_encode($data);
?>