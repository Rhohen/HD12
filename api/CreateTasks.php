<?php 


/**
*
* Intruction PHP qui permettront d'utiliser le service web REST 
*/

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    //If required
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    
    // cache for 1 day
}
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");         
 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
    exit(0);
}

/**
* insertion du fichier de connexion
*/

require("DB.php");

/**
* recuperation de toutes les task
*/
    $DB = new DB();
    $req = $DB->query("select * from task");

    class Event{};
    $events = array();

    foreach ($req as $row) {
    	$e = new Event();
    	$e->id = $row['id'];
    	$e->title = $row['title'];
    	$e->description = $row['description'];
    	$e->body = $row['body'];
    	$e->deadline = $row['deadline'];
    	$e->duration = $row['duration'];
    	$e->reward = $row['reward'];
    	$e->checker = $row['checker'];
    	$e->checkermsg = $row['checkermsg'];
    	$events[] = $e ;
    }

/**
* parser les donnees aux format json
*/
    header('Content-Type: application/json');
    echo json_encode($events);
















 ?>