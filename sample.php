<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['name']))  {

  //Email information
  $admin_email = "iamsriman2389@gmail.com";
  $email = $_REQUEST['name'];
  $subject = $_REQUEST['email'];
  $comment = $_REQUEST['mess'];

  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);

  //Email response
  echo "Thank you for contacting us!";
  
  header('Location: index.html');  
  }

  //if "email" variable is not filled out, display the form
  else  {
?>


 <?php
  }
?>