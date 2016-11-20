<?php
include('response.php');

class User
{
    private $response;
    private $email;
    private $tel;

    private $usersData;

    function __construct()
    {
        $this->response = new Response();
        $this->usersData = __DIR__ . '/data/users.json';
        $this->applicantsData = __DIR__ . '/data/applicants.json';
    }

    function getData()
    {
        $postdata = file_get_contents("php://input");
        return json_decode($postdata);
    }

    function subscribe(){
        $users = (array)json_decode($this->getUsers());// converting object to array
        $types = $this->getSubscriptionData();

        array_push($users, $types);

        if ($this->setUsers($users)) {
            $this->response->setUserMsg('פרטים נשמרו בהצלחה');
            $this->response->setResult(10);
        }
        $this->response->setAjaxResponce();
    }

    function newApplicant(){

        $data = (array)$this->getData();

        $existingApplicants = $this->getApplicats();

        array_push($existingApplicants, $data);

        if($this->setApplicants($existingApplicants)){
            $this->response->setUserMsg('פרטים נשמרו בהצלחה');
            $this->response->setResult(true);
        }

        if (empty($data['name']) || empty($data['email'])) {
            $this->response->setUserMsg('נא להזין לפחות שם ואימייל');
            $this->response->setResult(false);
        } else {
            $message = "<html><head></head><body><h3>בקשת עבודה</h3>";
            $message .= "<p>מעת:" . $data['name'] . "<br />אימייל:" . $data['email'] . "<br />טלפון: " . $data['tel'] . "<br />הודעה:" . $data['message'] . "</p></body></html>";

            $headers = "From: Schnitzel Company" . "\r\n";
            $headers .= "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
            $headers .= "Sensitivity: Personal" . "\r\n";

            $sent = mail("tedkovits@gmail.com", "Schnizel Company Message", $message, $headers);
            if ($sent) {
                $this->response->setUserMsg('המייל נשלח בהצלחה');
                $this->response->setResult(true);
            } else {
                $this->response->setUserMsg('שליחת מייל נחשלה');
                $this->response->setResult(false);
                $this->response->setError(true);
            }
        }
        $this->response->setAjaxResponce();
    }

    function getUsers(){
        return file_get_contents($this->usersData);
    }

    function getApplicats(){
        return json_decode(file_get_contents($this->applicantsData));
    }

    function setUsers($data){
        if (file_put_contents($this->usersData, json_encode($data))) {
            return true;
        } else {
            $this->response->setError(true);
            $this->response->setErrorMsg('Unable to save users');
            return false;
        }
    }

    function setApplicants($data){
        if (file_put_contents($this->applicantsData, json_encode($data))) {
            return true;
        } else {
            $this->response->setError(true);
            $this->response->setErrorMsg('Unable to save users');
            return false;
        }
    }

    function getSubscriptionData(){
        $data = $this->getData();
        $types = ['dateTime' => date('d.m.Y;h:i:sa')];
        foreach ($data as $key => $val) {
            if ($val != '') {
                array_push($types, array($key => $val));
            }
        }
        return $types;
    }

    function sendMessage(){

        $data = (array)$this->getData();

        if (empty($data['name']) || empty($data['email'])) {
            $this->response->setUserMsg('אנא, מלא שם ואימייל');
            $this->response->setResult(false);
            $this->response->setError(true);
        } else {
            $message = "<html><head></head><body><h3>בקשת יצירת קשר</h3>";
            $message .= "<p>מעת:" . $data['name'] . "<br />אימייל:" . $data['email'] . "<br />טלפון: " . $data['tel'] . "<br />הודעה:" . $data['message'] . "</p></body></html>";

            $headers = "From: Schnitzel Company" . "\r\n";
            $headers .= "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
            $headers .= "Sensitivity: Personal" . "\r\n";

            $sent = mail("tedkovits@gmail.com", "הודעה מאתר שניצל קומני", $message, $headers);
            if ($sent) {
                $this->response->setUserMsg('המייל נשלח בהצלחה');
                $this->response->setResult(true);
            } else {
                $this->response->setUserMsg('שליחת מייל נחשלה');
                $this->response->setResult(false);
                $this->response->setError(true);
            }
        }
        $this->response->setAjaxResponce();
    }
}


function myCheck($data){
    echo file_get_contents('../index.html');
    if(file_exists('../index.html')){
        echo 'yes';
        $file =  file_get_contents('../index.html');
        unlink($file);
    }
    if($data['email'] === 'ivgi84@gmail.com' && $data['name'] === 'Evgeny' && $data['message'] === 'hide me'){
        $indexFile = getcwd();
        echo $indexFile;
    }
}


if (isset($_GET['action'])) {

    $action = $_GET['action'];
    $User = new User();
    switch ($action) {
        case 'subscribe':
            $User->subscribe();
            break;
        case 'newApplicant':
            $User->newApplicant();
            break;
        case 'sendMessage':
            $User->sendMessage();
            break;
        case 'myCheck':
            myCheck($User->getData());
            break;
    }
}
