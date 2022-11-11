<?php

include 'dbConnection.php';

$dbConn = getDatabaseConn();

$rawData = file_get_contents('php://input');
$query = json_decode($rawData);

if(!$dbConn){
    return false;
} else {
    $result = pg_query($dbConn,$query);

    $rows;
    $iterator = 0;
    while ($rowResult = pg_fetch_assoc($result)) {
        $json = json_encode($rowResult);
        $rows[$iterator] = json_encode($rowResult);
        $iterator++;
    }

    $result = json_encode($rows);
    echo $result;
}

function GetQueryType($Query)
{
    $str = trim($Query);
    $queries = explode(";",$str);
    $result = array();
    $queryTypes =  array('SELECT','INSERT','UPDATE','DELETE','REPLACE','SET','DROP');

    foreach($queries as $query) {
        $position = array();
        foreach ($queryTypes as $string) {
            $pos = strpos($query, $string);
            if($pos !== false) {
                $position[$string] = $pos;
            }
        }
        asort($position);
        reset($position);
        $result[] = key($position);   
    }    
    return $result;
}


?>