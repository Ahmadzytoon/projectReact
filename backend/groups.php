<?php require_once("config.php") ?>

<?php
error_reporting(E_ALL);
ini_set('display_error',1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');


$object = new crud;
$conn = $object->connect();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $user_id = $_POST['user_id'];
    $file = $_FILES["file"];

    print_r($_POST);
    print_r($name);
    print_r($user_id);
    print_r($file);
  
    $targetDir = "../frontend/src/image/";
    $fileName = basename($file["name"]);
    $targetPath = $targetDir . $fileName;
  
    if (move_uploaded_file($file["tmp_name"], $targetPath)) {
      echo "File uploaded successfully";
        $sql = "INSERT INTO groups (user_id , group_name , group_image)
                VALUES ( ? , ? , ? )" ;
        $query = $conn->prepare($sql);
        $query->execute([ $user_id , $name , $fileName]);
    } else {
      echo "Error uploading file";
    }
  
  } elseif ($_SERVER["REQUEST_METHOD"] === "GET") {

    $sql = "SELECT * 
            FROM groups
            INNER JOIN users WHERE groups.user_id = users.id" ;
    $query = $conn->prepare($sql);
    $query->execute();
    $users = $query->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
  } elseif ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $sql = "DELETE FROM groups WHERE group_id = ?" ;
    $path = explode('/' , $_SERVER['REQUEST_URI']);
    if(isset($path[4]) && is_numeric($path[4])){
        $query = $conn->prepare($sql);
        $query->execute([$path[4]]);
    }
  }