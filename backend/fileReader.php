<?php

session_start();

function readCSV($file)
{
    $csv = array();
    $file = fopen($file, 'r');
    $iterator = 0;
    while (($result = fgetcsv($file)) !== false)
    {
        $csv[] = $result;
    }

    fclose($file);

    return $csv;
}

function generateTableFromFile()
{
    $csv = readCSV('../data/balanceplatform_accounting_report.csv');

    $accountHolderIndex = 1;
    $cellIterator = 0;
    $rowIterator = 0;
    var_dump($_ENV["accountHolderId"]);
    foreach($csv as $row)
    {
        /*if($row[1] != $_ENV["accountHolderId"] & $rowIterator > 0)
        {
            continue;
        }*/
        
        echo ($rowIterator < 1) ? '<thead>' : '<tbody>';
        echo    '<tr>';
        foreach($row as $cell)
        {
            echo ($rowIterator < 1) ? '<th>' : '<td>';
            print_r($cell);
            echo ($rowIterator < 1) ? '</th>' : '</td>';
            $cellIterator++;
        }
        echo    '</tr>';
        echo ($rowIterator < 1) ? '</thead>' : '</tbody>';

        $cellIterator = 0;
        $rowIterator++;
    }
}

?>