<?php

$csv = array();
$file = fopen('settlement_details_report_41.csv', 'r');

while (($result = fgetcsv($file)) !== false)
{
    $csv[] = $result;
}

fclose($file);

echo '<pre>';
print_r($csv);
echo '</pre>';

/*
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("data/settlement_detail_report_41.csv"));
fclose($myfile);
*/
?>