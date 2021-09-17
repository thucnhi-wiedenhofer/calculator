<?php
session_start();
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// get database connection
include_once '../config/database.php';
  
// instantiate product object
include_once '../models/Calcul.php';
  
$database = new Database();
$db = $database->getConnection();


// instantiate calcul object
$calcul = new Calcul($db);
  
// get  data
$data = json_decode(file_get_contents("php://input"));
  
// make sure data is not empty
if( !empty($data->result) && !empty($data->operation) )
{
    // set product property values
    $calcul->result = $data->result;
    $calcul->operation = $data->operation;

    // create the product
    if($calcul->addCalcul()){
  
        // set response code - 201 created
        http_response_code(201);
  
        // tell the user
        echo json_encode(array("message" => "Opération enregistrée."));
    }
  
    // if unable to create the task, tell the user
    else{
  
        // set response code - 503 service unavailable
        http_response_code(503);
  
        // tell the user
        echo json_encode(array("message" => "impossible d'enregistrer l'opération ."));
    }
}
  
// tell the user data is incomplete
else{
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array("message" => "impossible , Data est incomplet."));
}
?>