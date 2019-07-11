<?php
header('content-type:text/html;cahrset=utf-8');
$mysql_conf =array(
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
};
// define('HOST','localhost');
// define('USERNAME','root');
// define('PASSWORD','');
// define('DBNAME','mydb');
// $conn=new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
// if($conn ->connect_error){
// 	die('数据库连接失败:'.$conn->connect_error);
// }
?>