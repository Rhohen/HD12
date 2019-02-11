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
 
}
	
	require ("DB.php");
	$DB = new DB();

	/**
	* rendre lisible a notre controller les données envoyées par angular
	*/
	header('Content-Type: application/json');
	$request = file_get_contents('php://input');

	/**
	* decode l'objet afin de les utiliser en php 
	*/
	$user = json_decode($request, true);
	
	$id = " ";
	$nom = $user["name"];
	$password = $user["hashed_password"];
	$roles = $user["role"];

	/**
	* insertion des données
	*/
	$requete = "INSERT INTO users (name,hashed_password,role) VALUES ('$nom','$password','$roles')";
	$requ = $DB->execute($requete);



























