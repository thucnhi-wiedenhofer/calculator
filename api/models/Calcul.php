<?php
class Calcul{

    // database connection and table name
    private $conn;

    // object properties
    public $id_calcul;
    public $result;
    public $operation;      

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }    

      
    function addCalcul(){
         // query to insert record
        $query = "INSERT INTO calcul SET result=:result, operation=:operation";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize

        $this->result=htmlspecialchars($this->result);
        $this->operation=htmlspecialchars($this->operation);
       
        // bind valuesu
        
        $stmt->bindParam(":result", $this->result);
        $stmt->bindParam(":operation", $this->operation);        
       
        // execute query
        if($stmt->execute()){
            return $this->conn->lastInsertId();      
        }
        return false;
    }

   
    function viewCalcul(){
        $query = "SELECT * FROM calcul ORDER BY id_calcul DESC LIMIT 1";
        // prepare the query
        $stmt = $this->conn->prepare( $query );

       $stmt->execute();

            // get retrieved row
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // set values to object properties
            $this->id_calcul =  $row['id_calcul'];
            $this->result = $row['result'];
            $this->operation = $row['operation'];            
        }

}
