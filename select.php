<?php

include "connectdb.php";

//database settings
$connect = mysqli_connect($servername, $username, $password, $dbname);

$result = mysqli_query($connect, "select * from contacts");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
?>