<?php

header('content-type:text/html;charset=utf-8');
define('HOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'mydb');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME); 
if ($conn->connect_error) {
    die('数据库连接失败：' . $conn->connect_error);
}
$conn->query('SET NAMES UTF8');
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];

    $result=$conn->query("select * from product where id=$sid ");

    echo json_encode($result->fetch_assoc());

}
?>