<?php

    if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    //If required
    header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");         
 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
    exit(0);
}

    require("DB.php");
    

/**
* recuperation du user
*/    
    $DB = new DB();
    $req = $DB->query("select * from users"); //a optimiser
    var_dump($req);
    die();

    class Event{};
    $events = array();

    foreach ($req as $row) {
    	$e = new Event();
        $e->id = $row['id'];
        $e->name = $row['name'];
    	$e->hashed_password = $row['hashed_password'];
    	$e->role = $row['role'];
    	$events[] = $e ;
    }

/**
* parser les donnees aux format json
*/
    header('Content-Type: application/json');
    echo json_encode($events);

    ?>


