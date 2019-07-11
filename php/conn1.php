<?php
header('content-type:text/html;charset="utf-8"');

$mysql_conf = array(
	'HOST'=>'localhost:3306',
	'USERNAME'=>'root',
	'PASSWORD'=>'',
	'db'=>'mydb'
);
$mysqli = new mysqli($mysql_conf['HOST'],$mysql_conf['USERNAME'],$mysql_conf['PASSWORD']);

if($mysqli->connect_errno){
	die('连接错误'.$mysqli->connect_errno);
}

$mysqli->query("set names 'utf8';");  
$select_db = $mysqli->select_db($mysql_conf['db']);
if(!$select_db){
	die('选择数据库错误'.$mysqli->error);
}
?>