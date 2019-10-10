<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));

$btnName=$dbhandle->real_escape_string($data->btnName);
if($btnName=='Insert'){

$id=$dbhandle->real_escape_string($data->id);
$name=$dbhandle->real_escape_string($data->name);
$email=$dbhandle->real_escape_string($data->email);
$mess=$dbhandle->real_escape_string($data->mess);
$mob=$dbhandle->real_escape_string($data->mob);

$query="INSERT INTO contactform VALUES('$id','$name','$email','$mess','$mob')";

$dbhandle->query($query);
	}

	else {

		$id=$dbhandle->real_escape_string($data->id);
       $name=$dbhandle->real_escape_string($data->name);
       	$query="UPDATE contactform SET name = '".$name."' WHERE id=$id ";
       	$dbhandle->query($query);



	}

?>