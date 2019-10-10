<?php
if ($_POST) {
    $url = "mongodb://Sriman:Sriman2389@ds161049.mlab.com:61049/srimandb";

    $connection = new MongoClient($url);
    $db = $connection->srimandb;
    //$rec['text'] = $_POST['username'];

    $username = $_POST['fmname'];
    $username1 = $_POST['fmname1'];

    $qry = array("text" => "$username","text1" => "$username1");

    $db->sample->insert($qry);
}