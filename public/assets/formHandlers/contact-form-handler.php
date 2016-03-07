<?php 
$data = array();
$myemail = 'cody@codymoore.io';//<-----Put Your email address here.

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 

if(!empty($message))
{
	$to = $myemail; 
	$email_subject = "Message from website: $name";
	$email_body = "New Message Submited".
	"\n Name: $name \n Email: $email_address \n Message \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);

	$data['success'] = true;
  $data['message'] = 'Success!';
	echo json_encode($data);  
} 
?> 