function Task1() {
    // Створення об'єкта "Співробітник"
    var employee = {
        LastName: 'Зубенко',
        FirstName: 'Міхаїл',
        Gender: 'чоловічий',
        Age: 50
    };
    
     // Виведення результату
    alert("Прізвище: " + employee.LastName + "\nІм'я: " + employee.FirstName + "\nстать: " + employee.Gender + "\nвік: " + employee.Age);
}

function Task2() {
     // Створення об'єкта "Зарплата" з властивостями
    var salary = {
        Position: "",
        Rate: 0,
    
        // Метод для порахування зарплати
        calculateSalary: function () {
            return "Ставка: " + this.Rate;
        },
    
        // Метод для зміни ставки
        changeRate: function (newRate) {
            this.Rate = newRate;
            return "Ставку змінено на " + newRate;
        },
    
         // Метод для виведення інформації
        displayInformation: function () {
            return "Посада: " + this.Position + "\nСтавка: " + this.Rate;
        }
    };

    salary.Position = "Мафіознік";
    salary.Rate = 1000;

    alert(salary.calculateSalary());
    alert(salary.changeRate(1200));
    alert(salary.displayInformation());
}

function Task3() {
    // Створення об'єкта "Співробітник"
    var employee = {
        LastName: 'Зубенко',
        FirstName: 'Міхаїл',
        Gender: 'чоловічий',
        Age: 50
    };

    // Створення об'єкта "Зарплата"
    var salary = {
        Position: "Мафіознік",
        Rate: 200,

        // Метод для порахування зарплати
        calculateSalary: function () {
            return "Ставка: " + this.Rate;
        },

        // Метод для зміни ставки
        changeRate: function (newRate) {
            this.Rate = newRate;
            return "Ставку змінено на " + newRate;
        },

        // Метод для виведення інформації
        displayInformation: function () {
            return "Посада: " + this.Position + "\nСтавка: " + this.Rate;
        }
    };

    // Копіювання властивостей і методів від "Співробітник" до "Зарплата"
    for (var key in employee) {
        if (employee.hasOwnProperty(key)) {
            salary[key] = employee[key];
        }
    }
    alert("Об'єкт 'Зарплата' після копіювання властивостей та методів з 'Співробітник':\nПосада: " + salary.Position + "\nСтавка: " + salary.Rate + "\nПрізвище: " + salary.LastName + "\nІм'я: " + salary.FirstName + "\nстать: " + salary.Gender + "\nвік: " + salary.Age);
}

function Task4() {
    let employee1 = Task1();
    // Додавання методу "Показати дані" до прототипу об'єкта "Співробітник"
    employee1.prototype.ShowData = function () {
        return "Прізвище: " + this.LastName + "\nІм'я: " + this.FirstName + "\nстать: " + this.Gender + "\nвік: " + this.Age;
    };
    
    alert(employee1.ShowData());
}

function Task5() {
     // Оголошення конструктора для об'єкту "Співробітник"
    function Employee(lastName, firstName, gender, age) {
        this.LastName = lastName;
        this.FirstName = firstName;
        this.Gender = gender;
        this.Age = age;
    }

    // Метод "Показати дані" для об'єкту "Співробітник"
    Employee.prototype.ShowData = function () {
        return "Прізвище: " + this.LastName + "\nІм'я: " + this.FirstName + "\nстать: " + this.Gender + "\nвік: " + this.Age;
    };

    // Оголошення конструктора для об'єкту "Керівник" з використанням успадкування
    function Manager(lastName, firstName, gender, age, department) {
       // Виклик конструктора об'єкту "Співробітник" для успадкування властивостей
        Employee.call(this, lastName, firstName, gender, age);
        // Додавання власної властивості "Відділ" до об'єкту "Керівник"
        this.Department = department;
    }

    // Наслідування прототипу об'єкту "Співробітник" для об'єкту "Керівник"
    Manager.prototype = Object.create(Employee.prototype);

   // Перевизначення методу "Показати дані" для об'єкту "Керівник"
    Manager.prototype.ShowData = function () {
        // Виклик оригінального методу для об'єкту "Співробітник"
        var baseResult = Employee.prototype.ShowData.call(this);
         // Додавання власної інформації про відділ
        return baseResult + "\nВідділ: " + this.Department;
    };

    // Створення об'єкта "Керівник"
    var manager = new Manager('Іванов', 'Олег', 'чоловіча', 45, 'Відділ розробки');
    
    // Виведення інформації про керівника з використанням перевизначеного методу
    alert(manager.ShowData());
}

function Task6() {
    // Клас "СпівробітникКлас"
    class EmployeeClass {
        constructor(lastName, firstName, gender, age) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._gender = gender;
            this._age = age;
        }

        // Геттери та сеттери для властивостей
        get lastName() {
            return this._lastName;
        }

        set lastName(value) {
            this._lastName = value;
        }

        get firstName() {
            return this._firstName;
        }

        set firstName(value) {
            this._firstName = value;
        }

        get gender() {
            return this._gender;
        }

        set gender(value) {
            this._gender = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }

        // Метод "Показати дані"
        showData() {
            return `Прізвище: ${this._lastName}\nІм'я: ${this._firstName}\nстать: ${this._gender}\nвік: ${this._age}`;
        }
    }

    // Клас "КерівникКлас", який успадковує від "СпівробітникКлас"
    class ManagerClass extends EmployeeClass {
        constructor(lastName, firstName, gender, age, department) {
            // Виклик конструктора батьківського класу
            super(lastName, firstName, gender, age);
            this._department = department;
        }

       // Геттер та сеттер для властивості "Відділ"
        get department() {
            return this._department;
        }

        set department(value) {
            this._department = value;
        }

         // Перевизначений метод "Показати дані" для класу "КерівникКлас"
        showData() {
            // Виклик методу батьківського класу за допомогою super
            const baseResult = super.showData();
            // Adding its own information about the department
            return `${baseResult}\nВідділ: ${this._department}`;
        }
    }

    const manager = new ManagerClass('Іванов', 'Олег', 'чоловіча', 45, 'Відділ розробки');
    
     // Виведення інформації про керівника з використанням перевизначеного методу
    alert(manager.showData());
}
