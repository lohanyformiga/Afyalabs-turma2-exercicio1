import {api, postform} from "../../../service/api.js";

async function getRandomJoke() {
    const request = await api.get("random");
    const response = request.data;
    return response;
}

let Home = {
  is_private: false,

  render: async () => {
      const jokes = await getRandomJoke();
      let view = `
          <div>
            <h1>Primeira página</h1>
            <img src=${jokes.icon_url} alt=${jokes.value}>
            <p>${jokes.value}</p>
          </div>
          <hr>
          <div class="form-container">
            <form id="form">
                <input type="text" id="name" placeholder="name">
                <input type="text" id="email" placeholder="email">
                <input type="text" id="phone" placeholder="phone">
                <input type="submit" value="Enviar" placeholder="Name">
            </form>
          </div>
      `;

      return view
  },

  after_render: async () => {
    let formContente = document.getElementById("form");

    formContente.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email".value);
        let phone = document.querySelector("#phone").value;

        let postData = {
            name,
            email,
            phone
        }

        postform.post("", postData).then(
            response => {
                alert("Tudo certo!");
            }
        ).catch(e => alert("Algo de errado aconteceu!"));
    });
  }
}

export default Home;