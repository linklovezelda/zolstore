<?php  
	
    header('content-type:text/html;charset=utf-8');
	define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','');//密码是自己数据库的密码。
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);//@:简单的容错处理。
	if(!$conn){
		die('数据库连接失败'.mysql_error());
		//退出并返回括号里面的内容  mysql_error():报错信息。
	}

	//2.选择数据库,设置字符集
	mysql_select_db('mydb');
	mysql_query('set names utf8');

if(isset($_GET['sid'])){
    $sid=$_GET['sid'];

    $result=$conn->query("select * from product where id=$sid ");

    echo json_encode($result->fetch_assoc());

}
?>