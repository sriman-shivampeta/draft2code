<?php
$id=$_GET['id'];
$connection = new Mongo();
$db = $connection->mongophp;
$id = new MongoId($id);
$db->isud->remove(array('_id' => $id));

header('location:isud_show.php');
?>