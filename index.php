<?php

$csv = array();
$file = fopen('data/settlement_detail_report_batch_41.csv', 'r');

echo '<table>';
$iterator = 0;
while (($result = fgetcsv($file)) !== false)
{
    /*
    if($iterator <= 0)
    {
        echo '<tr>';
        foreach($result as $element)
        {
            echo '<th>';
            print_r($result);
            echo '</th>';
        }
        echo '</tr>';
    }
    else
    {
        echo '<tr>';
        foreach($result as $element)
        {
            echo '<td>';
            print_r($result);
            echo '</td>';
        }
        echo '</tr>';
    }
    $iterator = $iterator + 1;
    */
    $csv[] = $result;
}


foreach($csv as $element)
{
    foreach($element as $child)
    {
        if($iterator == 0)
        {
            echo '<th>';
        }
        else
        {
            echo '<td>';
        }
        print_r($child);
        if($iterator == 0)
        {
            echo '</th>';
        }
        else
        {
            echo '</td>';
        }
    }
    $iterator++;
    echo '</tr>';
}

echo '</table>';

fclose($file);


/*
echo '<pre>';
print_r($csv);
echo '</pre>';
*/
/*
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("data/settlement_detail_report_41.csv"));
fclose($myfile);
*/
?>


<html>
 <head>
 </head>
 <body>
   <h1>Hello World<h1>
 </body>
</html>