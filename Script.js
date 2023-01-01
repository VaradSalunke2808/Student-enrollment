let submit = document.querySelector(".submit");

submit.addEventListener('click', () => {

  var output = document.querySelector(".output");
  console.log(output);

  //storing the data in objects got from the form
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    LinkedInLink: document.getElementById("LinkedInLink").value,
    Phonenumber: document.getElementById("Phonenumber").value
  };
  console.log(data);

  let newlist = document.createElement('div');
  newlist.classList.add('addData');
  newlist.innerHTML = `
      <div class="NameContainer">${data.name}</div>
      <a href="LetsGrowMore.org">${data.email}</a><br>
      <a href="www.neerajjsr2000@gmail.com.com">${data.LinkedInLink}</a>
      <div class="Phonenumber">${data.Phonenumber}</div>
    `
  console.log(newlist);

  output.appendChild(newlist);

  let input = document.querySelectorAll('input');
  input.forEach(input => {
    input.value = '';
  });
})