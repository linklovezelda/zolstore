<?php  
	
	include('conn.php');
	
	@$id=$_GET['sid'];
	
	$sql = "select * from product where sid=$id ";
   
	$res = $mysqli->query($sql);
   
	$arr = array();
   
	   while($row = $res->fetch_assoc()){
		   array_push($arr,$row);
	   }
   
	   $json = json_encode($arr);
	   
	   echo $json;
   
	   $mysqli->close();
?>