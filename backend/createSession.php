<?php

if (file_get_contents('php://input') != '') {
    $request = json_decode(file_get_contents('php://input'), true);
}

session_start();

$_SESSION["username"] = $request["username"];
$_SESSION["firstName"] = $request["firstName"];
$_SESSION["lastName"] = $request["lastName"];
$_SESSION["emailAddress"] = $request["emailAddress"];
$_SESSION["type"] = $request["type"];
$_SESSION["legalEntityId"] = $request["legalEntityId"];
$_SESSION["accountHolderId"] = $request["accountHolderId"];
$_SESSION["balanceAccountId"] = $request["balanceAccountId"];

return json_encode("Session variables have been set");

?>