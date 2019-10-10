<?php
	$connection = new Mongo();
	$db = $connection->mongophp;
	$mObj = $db->isud->find();
?>

<html>
<head>
  <title>Show Data</title>
</head>
<body>
<table border="1">
	<tr>
		<td>Name</td>
		<td>Action</td>
	</tr>
	<?php
		foreach ($mObj as $row) {
			//echo "<pre>";
			//print_r($row);die;
	?>
		<tr>
			<td><?php echo $row['name'] ?></td>
			<td>
			<a href="isud_up.php?id=<?php echo $row['_id'];?>">Update</a>
			<a href="isud_del.php?id=<?php echo $row['_id'];?>">Delete</a>
			</td>
		</tr>
	<?php
	}
	?>
</table>

<button><a href="index.php">Add Data</a></button>

</body>
</html>