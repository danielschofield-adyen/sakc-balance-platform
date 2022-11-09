<?php
include 'dbConnection.php';

$dbConn = getDatabaseConn();

$rawData = file_get_contents('php://input');
$query = $rawData;

if(!$dbConn){
    return false;
} else {
    $result = pg_query($dbConn,$query);
    $resultArray = pg_fetch_all($result);
    return json_encode($resultArray);
}

?>