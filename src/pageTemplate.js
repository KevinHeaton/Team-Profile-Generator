const generateEmployeeCard = employees => {
  return `
  <div class="">
    <div class="card-header ">
      <h2>${employees.name}</h2>
      <h3>Employee</h3><i class="fa-solid fa-briefcase"></i>
    </div>
    <div class="card-info ">
      <p class="idNumber">ID Number: ${employees.id}</p>
      <p class="email">Email: ${employees.email}</p>
    </div>
  </div>
  `
};

const generateManagerCard = manager => {
  return `
  <div class="">
    <div class="card-header ">
      <h2>${manager.name}</h2>
      <h3>Manager</h3><i class="fa-solid fa-people-roof"></i>
    </div>
    <div class="card-info ">
      <p class="idNumber">ID Number: ${manager.id}</p>
      <p class="email">Email: ${manager.email}</p>
      <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
  `
};

const generateEngineerCard = engineer => {
  return `
  <div class="">
    <div class="card-header ">
      <h2>${engineer.name}</h2>
      <h3>Engineer</h3><i class="fa-solid fa-display-code"></i>
    </div>
    <div class="card-info ">
      <p class="idNumber">ID Number: ${engineer.id}</p>
      <p class="email">Email: ${engineer.email}</p>
      <p class="github">GitHub Username: ${engineer.github}</p>
    </div>
  </div>
  `
};

const generateInternCard = intern => {
  return `
  <div class="">
    <div class="card-header ">
      <h2>${intern.name}</h2>
      <h3>Intern</h3><i class="fa-solid fa-graduation-cap"></i>
    </div>
    <div class="card-info ">
      <p class="idNumber">ID Number: ${intern.id}</p>
      <p class="email">Email: ${intern.email}</p>
      <p class="school">Intern's School: ${intern.school}</p>
    </div>
  </div>
  `
};

const generateHTML = data => {
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Employee') {
      const employeeCard = generateEmployeeCard(employee);

      cardArray.push(employeeCard);
    }

    if (role === 'Manager') {
      const managerCard = generateManagerCard(employee);

      cardArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = generateEngineerCard(employee);

      cardArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = generateInternCard(enployee);

      cardArray.push(internCard);
    }
  }

  const employeeCards = cardArray.join('');

  const generateTeam = generateEmployeePage(employeeCards);
  return generateTeam;
}

const generateEmployeePage = employeeCards => {

  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <script src="https://kit.fontawesome.com/1355427db0.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header>
    <div class="header ">
      <h1 class="text " >My Team</h1> 
    </div>
  </header>
  <main>
    <div class="cards ">
      ${employeeCards}
    </div>
  </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
`;
}

module.exports = { generateHTML };