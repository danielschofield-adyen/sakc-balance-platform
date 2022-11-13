<?php

function generateTableFromFile()
{
    $csv = array();
    $file = fopen('../data/settlement_detail_report_batch_41.csv', 'r');
    $iterator = 0;
    while (($result = fgetcsv($file)) !== false)
    {
        $csv[] = $result;
    }

    $rowIterator = 0;
    foreach($csv as $row)
    {
        echo ($rowIterator < 1) ? '<thead>' : '<tbody>';
        echo    '<tr>';
        foreach($row as $cell)
        {
            echo ($rowIterator < 1) ? '<th>' : '<td>';
            print_r($cell);
            echo ($rowIterator < 1) ? '</th>' : '</td>';
        }
        echo    '</tr>';
        echo ($rowIterator < 1) ? '</thead>' : '</tbody>';
        
        $rowIterator++;
    }

    fclose($file);
}

?>