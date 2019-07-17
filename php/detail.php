<?php

include('conn.php');
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    echo $sid;
    $result = $conn->query("select * from product where sid = $sid ");

    echo json_encode($result->fetch_assoc());
   

}
?>