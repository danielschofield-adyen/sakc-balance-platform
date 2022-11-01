<html>
 <head>
    <script type="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="javascript" src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap4.min.js"></script>
    <style url="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css"></style>
    <style url="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap4.min.css"></style>
    
    <script src="https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/5.12.0/adyen.js"></script>
    <script src="frontend/utils.js"></script>
    <script src="frontend/dropin.js"></script>
 </head>
 <body>
 <table id="example" class="table table-striped table-bordered" style="width:100%">
 <script>
    $(document).ready(function () {
    $('#example').DataTable();
});
 </script>
 <?php

$csv = array();
$file = fopen('data/settlement_detail_report_batch_41.csv', 'r');
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
</table>
 </body>
</html>