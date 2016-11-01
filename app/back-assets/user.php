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
    }

    function getData()
    {
        $postdata = file_get_contents("php://input");
        return json_decode($postdata);
    }

    function subscribe()
    {
        $users = (array)json_decode($this->getUsers());// converting object to array
        $types = $this->getSubscriptionData();

        array_push($users, $types);


        if ($this->setUsers($users)) {
            $this->response->setUserMsg('פרטים נשמרו בהצלחה');
            $this->response->setResult(10);
        }
        $this->response->setAjaxResponce();
    }

    function getUsers()
    {
        return file_get_contents($this->usersData);
    }

    function setUsers($data)
    {
        if (file_put_contents($this->usersData, json_encode($data))) {
            return true;
        } else {
            $this->response->setError(true);
            $this->response->setErrorMsg('Unable to save users');
            return false;

        }
    }

    function getSubscriptionData()
    {
        $data = $this->getData();
        $types = ['dateTime' => date('d.m.Y;h:i:sa')];
        foreach ($data as $key => $val) {
            if ($val != '') {
                array_push($types, array($key => $val));
            }
        }
        return $types;
    }

    function sendMessage()
    {

        $data = $this->getData();

        if (empty($data['name']) || empty($data['email'])) {
            echo "Please fill at list your name and email";
        } else {
            $message = "<html><head></head><body><h3>Want to contact us:</h3>";
            $message .= "<p>From:" . $name . "<br />Email:" . $email . "<br />Telephone: " . $tel . "<br />Message:" . $mess . "</p></body></html>";

            $headers = "From: Schnicel Company" . "\r\n";
            $headers .= "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
            $headers .= "Sensitivity: Personal" . "\r\n";

            $sent = mail("ivgi84@gmail.com", "Schnizel Company Message", $message, $headers);
            if ($sent) {
                $this->response->setUserMsg('המייל נשלח בהצלחה');
                $this->response->setResult(true);
            } else {
                $this->response->setUserMsg('שליחת מייל נחשלה');
                $this->response->setResult(false);
                $this->response->sentMessage(true);
            }

        }
    }
}



if (isset($_GET['action'])) {

    $action = $_GET['action'];
    $User = new User();
    switch ($action) {
        case 'subscribe':
            $User->subscribe();
            break;
    }
}
