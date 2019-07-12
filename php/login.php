<?php
include('conn.php');
$username=$_POST['username'];
$password=$_POST['password'];
$sql="select * from info1 where username='$username'and password='$password'";
$result=$mysqli->query($sql);
if($result ->num_rows>0){
	echo "<script>alert('登陆成功，点击跳转');
	location.href='http://127.0.0.1:8080/zolstore/src/zol2_index.html';</script>";
}else{
	echo "<script>alert('登陆失败，点击跳转');
	location.href='http://127.0.0.1:8080/zolstore/src/register.html';</script>";
}
?>