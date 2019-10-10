<?php
$id=$_GET['id'];
$connection = new Mongo();
$db = $connection->mongophp;
$id = new MongoId($id);
$mObj = $db->isud->findOne(array('_id' => $id));
//echo "<pre>";
//print_r($mObj);
?>


<html>
<head>
	<title>Update Data</title>
</head>
<body>
<form action="isud_updata.php" method="post">
	<input name="name" placeholder="name" value="<?php echo $mObj['name'] ?>" />
	<input name="id" type="hidden" value="<?php echo $mObj['_id'] ?>" />
	<input type="submit" name="submit" value="submit" />
</form>
</body>
</html>