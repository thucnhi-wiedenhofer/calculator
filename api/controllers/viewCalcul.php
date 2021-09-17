<?php

session_start();

// required headers

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  
// include database and object files
include_once '../config/database.php';
include_once '../models/Calcul.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// instantiate object
$calcul = new Calcul($db);
  
// read the details of product to be edited
$calcul->viewCalcul();

if($calcul->id_calcul!=null){   
    // create array
    $calcul_arr = array(
        "id_calcul" =>  $calcul->id_calcul,
        "result"=> $calcul->result,
        "operation"=> $calcul->operation        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($calcul_arr);
}
  
else{
    // set response code - 404 Not found
    http_response_code(401);
  
    $calcul_arr["records"]= "Pas de résultat.";
    echo json_encode($calcul_arr);

}
?>