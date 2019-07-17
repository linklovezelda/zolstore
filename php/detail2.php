<?php
  include('conn.php');

  @$sid = $_REQUEST['sid'];
   echo $sid;
  $sql = "select * from product where sid = $sid";

  $res = $mysqli->query($sql);

  $row = $res->fetch_assoc();

  $json = json_encode($row);

  echo $json;

  $mysqli->close();

?>