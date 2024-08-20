const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    // Add more users as needed
];

function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

    if (user) {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';

        // Redirect to another page after successful login
        window.location.href = 'index2.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.color = 'red';
    }
}






document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');
    var shipImages = document.querySelectorAll('.ship-image');

    var shipInfo = [
        {
            name: "АкваСкай",
            type: "Пассажирский лайнер",
            length: "150 м",
            speed: "30 узлов",
            description: "Современный пассажирский лайнер с роскошными каютами и разнообразными развлечениями."
        },
        {
            name: "СпидСтрийм",
            type: "Гоночная яхта",
            length: "20 м",
            speed: "50 узлов",
            description: "Высокотехнологичная гоночная яхта, предназначенная для участия в мировых гонках."
        },
        {
            name: "ТрансКарго",
            type: "Грузовое судно",
            length: "200 м",
            cargoCapacity: "10 000 тонн",
            description: "Надежное грузовое судно с большой грузоподъемностью для эффективной перевозки различных грузов."
        },
        {
            name: "ФьюелМастер",
            type: "Танкер",
            length: "180 м",
            cargoCapacity: "15 000 тонн топлива",
            description: "Специализированный танкер для перевозки больших объемов топлива."
        },
        {
            name: "Эксплорер",
            type: "Исследовательское судно",
            length: "120 м",
            speed: "25 узлов",
            description: "Судно, предназначенное для научных исследований в открытом море."
        },
        {
            name: "ВетроБриз",
            type: "Парусник",
            length: "50 м",
            description: "Экологически чистый парусник с использованием ветровой энергии для движения."
        }
        // Добавьте остальные корабли с выдуманными характеристиками здесь
    ];

    shipImages.forEach(function (shipImage, index) {
        shipImage.addEventListener('click', function () {
            var ship = shipInfo[index];
            var modalInfo = `Название: ${ship.name}<br>Тип: ${ship.type}<br>Длина: ${ship.length}<br>`;
            
            if (ship.speed) {
                modalInfo += `Скорость: ${ship.speed}<br>`;
            }
            
            if (ship.cargoCapacity) {
                modalInfo += `Грузоподъемность: ${ship.cargoCapacity}<br>`;
            }
            
            modalInfo += `<p>${ship.description}</p>`;
            modalText.innerHTML = modalInfo;
            modalImage.src = `/img/transport${index + 1}.png`;
            
            // Показываем модальное окно
            modal.style.display = 'block';
        });
    });

    var closeBtn = document.getElementsByClassName('close')[0];

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});


var shipScheduleData = [
    { number: 1, name: 'АкваСкай', departureTime: '12:00' },
    { number: 2, name: 'СпидСтрийм', departureTime: '14:30' },
    { number: 3, name: 'ТрансКарго', departureTime: '16:45' },
    { number: 4, name: 'ФьюелМастер', departureTime: '18:30' },
    { number: 5, name: 'Эксплорер', departureTime: '20:15' },
    { number: 6, name: 'ВетроБриз', departureTime: '22:00' }
    // Добавьте остальные записи
];

// Получаем ссылку на tbody таблицы
var tbody = document.querySelector('#scheduleTable tbody');

function updateStatus() {
    var currentTime = new Date();
    var rows = document.querySelectorAll('#scheduleTable tbody tr');

    rows.forEach(function(row, index) {
        var ship = shipScheduleData[index];
        var departureTime = new Date(currentTime.toDateString() + ' ' + ship.departureTime);

        var statusCell = row.querySelector('td:last-child');
        statusCell.textContent = currentTime > departureTime ? 'Ушел' : 'Ожидается';
    });
}

// Инициализируем статус при загрузке страницы
updateStatus();

// Запускаем функцию updateStatus каждые 5 секунд для обновления статуса в реальном времени.
setInterval(updateStatus, 5000);

// Заполняем таблицу данными из массива
shipScheduleData.forEach(function(ship) {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${ship.number}</td>
        <td>${ship.name}</td>
        <td>${ship.departureTime}</td>
        <td></td>
    `;
    tbody.appendChild(row);
});

    