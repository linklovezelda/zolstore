<?php
include('conn.php');
@$username=$_POST['userphone'];
@$password=$_POST['register_pasword_phone'];
echo $username;
$sql="select * from info1 where username='$username'";
$result=$mysqli->query($sql);
if($result->num_rows>0){
	die("用户名已存在");
}
$insertSql="insert into info1(username, password) VALUES ('$username','$password')";
$res=$mysqli->query($insertSql);
if($res){
	echo '<script>alert("注册成功");
	location.href="login.html";</script>';
}else{
	echo 'false';
}
$mysqli->close();
?>