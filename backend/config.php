<?php



class crud{

    public static function connect(){
        try{

        $con=new PDO('mysql:localhost=localhost;dbname=405_found','root','');

       
        return $con;

    }catch(PDOException $error){

        echo 'the error ' . $error->getMessage();


    }

    
   
        
    }
}