<?php

function getDatabaseConn()
{
    $host       = "ec2-52-48-159-67.eu-west-1.compute.amazonaws.com";
    $dbname     = "d5cgqrrqhrup53";
    $user       = "kvblihuqnemnmr";
    $password   = "024849930009758495f13d56922f3683fc8a07ce67fa9044e26411fac0a40f50";
    $port       = "5432";

    $conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password."";
    $db = pg_connect($conn_string);

    if(!$db) {
    return null;
    } else {
        return $db;
    }
}

?>