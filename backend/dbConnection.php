<?php

function getDatabaseConn()
{
    $host       = "ec2-52-18-201-153.eu-west-1.compute.amazonaws.com";
    $dbname     = "d7o7albbnk0b9h";
    $user       = "dhjwvpzlqxkoys";
    $password   = "7feaa8a9a564847b45c2e9cbff24a1374d46e70f64ab0bd9597e5aeb47fbd87d";
    $port       = "5432";

    $conn_string = $_ENV["DATABASE_URL"];

   // $conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password."";
    $db = pg_connect($conn_string);

    if(!$db) {
    return null;
    } else {
        return $db;
    }
}

?>