<?php
session_start();
if (isset($_POST['submit']))
{
	$conn = mysqli_connect("localhost","root","","railway");
if(!$conn){
	echo "<script type='text/javascript'>alert('Database failed');</script>";
  	die('Could not connect: '.mysqli_connect_error());
}
$email=$_POST['email'];
$pw=$_POST['pw'];
$sql = "SELECT * FROM passengers WHERE email = '$email' AND password = '$pw';";
$sql_result = mysqli_query ($conn, $sql) or die ('request "Could not execute SQL query" '.$sql);
		$user = mysqli_fetch_assoc($sql_result);
		if(!empty($user)){
			$_SESSION['user_info'] = $user['email'];
			$message='Logged in successfully';
		}
		else{
			$message = 'Wrong email or password.';
		}
	echo "<script type='text/javascript'>alert('$message');</script>";
}
?>
