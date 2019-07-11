<?php  
	
	include "conn.php";
	
	$id=$_GET['pid'];
	
	$result=mysql_query("select * from product where pid=$id ");
	
	$wronglist=mysql_fetch_array($result,MYSQL_ASSOC);
	
	echo json_encode($wronglist);

?>