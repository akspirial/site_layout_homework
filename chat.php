<?php
$pdo = new PDO('sqlite:chat.db');

if (isset($_POST['name', 'message']) && !empty($_POST['name', 'message'])) {
    $message = strip_tags($_POST['name', 'message']);

    $statement = $pdo->prepare(
        'INSERT INTO chat_area (message) VALUES (?)'
    );
    $statement->execute([$message]);

    $result = [
        'status' => 'ok'
    ];
    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    die();
}

$statement = $pdo->prepare(
    'SELECT * FROM chat_area ORDER BY id desc LIMIT 10;'
);

$statement->execute();

$messages = $statement->fetchAll(PDO::FETCH_ASSOC);

$result = [
    'status' => 'ok',
    'chat_area' => $messages
];

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);