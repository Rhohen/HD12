<?php

class DB {

    private $host = 'localhost';
    private $username = 'headworkadmin';
    private $password = 'HEAg2r4a3g2';
    private $database = 'headwork';
    private $db;
    static $dab;

    public function __construct($host = null, $username = null, $password = null, $database = null) {
        if ($host != null) {
            $this->host = $host;
            $this->username = $username;
            $this->password = $password;
            $this->database = $database;
        }

        try {
            $this->db = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->database, $this->username, $this->password, [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8', PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING]);
            //self::$dab = $this->db;
        } catch (PDOException $e) {
            die('<h1>Impossible de se connecter à la base de donnee<h1>');
        }
    }

    /**
     *
     * @param type $sql
     * @param type $data
     * @return type
     */


    /**
    * fonction de recuperation de données
    */
    public function query($sql, $data = []) {
        $req = $this->db->prepare($sql);
        $req->execute($data);
        return $req->fetchAll();
    }

     /**
    * fonction de insertion de données
    */
    public function execute($req) {
        return $this->db->exec($req);
    }

     /**
    * fonction de suppression de données
    */
    public function delete($sql, $data = []) {
        $req = $this->db->prepare($sql);
        $req->execute($data);
    }


     /**
    * fonction de verification de donnéees
    */
    public function contain($data = []){
        $nom = $data['name'];
        $passwd = $data['hashed_password'];
        $requ = "SELECT * FROM users WHERE name = '$nom' AND hashed_password ='$passwd'";
        $req = $DB->query($requ);
        if($requ != 'null'){
            return true ;
        }else{
            return false ;
        }

    }


}
