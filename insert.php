<?php
include "connectdb.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$name = $request->name;
$email = $request->email;
$mess = $request->mess;
$mob = $request->mob;

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO contact(conname, conemail, conmess, conmob) VALUES('$name', '$email', '$mess', '$mob')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
}
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


include "mailscript.php";

?>