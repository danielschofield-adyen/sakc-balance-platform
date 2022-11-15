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
    $csv = readCSV('../data/balanceplatform_accounting_report_2022_11_13.csv');

    $accountHolderIndex = 1;
    $rowIterator = 0;

    echo '<thead>';
    echo    '<tr>';
    foreach($csv[0] as $cell)
    {
        echo '<th>';
        print_r($cell);
        echo '</th>';
    }
    echo    '</tr>';
    echo '</thead>';

    echo '<tbody>';
    for($i = 1; $i < count($csv); $i++)
    {
        if($_SESSION["type"] != "organisation")
        {
            if($row[1] != $_SESSION["accountHolderId"])
            {
                continue;
            }
        }

        echo    '<tr>';
        foreach($csv[$i] as $cell)
        {
            echo '<td>';
            print_r($cell);
            echo '</td>';
        }
        echo    '</tr>';
    }
    echo '</tbody>';
    
    /*
    foreach($csv as $row)
    {
        if($_SESSION["type"] != "organisation")
        {
            if($row[1] != $_SESSION["accountHolderId"] & $rowIterator > 0)
            {
                continue;
            }
        }
        
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
        
        $rowIterator++;
    }
    */
}

?>