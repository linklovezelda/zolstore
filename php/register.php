<?php
include('conn.php');
@$username=$_POST['username'];
@$password=$_POST['password'];
echo $username;
$sql="select * from info1 where username='$username'";
$result=$mysqli->query($sql);
if($result->num_rows>0){
	die("用户名已存在");
}
$insertSql="insert into info1(username, password) values ('$username','$password')";
$res=$mysqli->query($insertSql);
if($res){
	echo '<script>alert("注册成功，跳转登陆页面");
	location.href="http://127.0.0.1:8080/zolstore/src/login2.html";</script>';
}else{
	echo '<script> alert("注册失败,继续注册");
	location.href="http://127.0.0.1:8080/zolstore/src/register.html";</script>';
}
$mysqli->close();
?>