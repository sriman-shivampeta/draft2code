<?php
if ($_POST) {
	$connection = new Mongo();
	$db = $connection->mongophp;
	$id = new MongoId($_POST['id']);
	$db->isud->update(
		array('_id' => $id),
		array(
			'$set' => array(
				'name' => $_POST["name"]
				)
			)
		);
	header('location:isud_show.php');
}