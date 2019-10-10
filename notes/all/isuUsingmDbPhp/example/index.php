<!DOCTYPE html>
<html>
<head>
  <title>ISUD</title>
</head>
<body>
<form action="?" method="post">  
<input type="text" name="name" placeholder="name" /><br>
<input type="submit" name="submit" value="submit" /><br>
<button><a href="isud_show.php">Show</a></button>
</form>

<br>


</body>
</html>



<?php
if ($_POST) {
	$connection = new Mongo();
	$db = $connection->mongophp;
	$rec['name'] = $_POST['name'];
	$db->isud->insert($rec);
}
?>