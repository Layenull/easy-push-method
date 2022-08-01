let data = [];
const filtArray = [];
const jobList = document.querySelector(".joblist");
const inputField = document.querySelector(".requirements");

function addToFilter(item) {
  if (filtArray.includes(item)) {
    return;
  } else {
    filtArray.push(item);
    console.log(filtArray);
  }
  let display = "";
  filtArray.map((item) => {
    display += `
        <div class="frontend">
          <button type="button" class="button">
            <span class="button__text">${item}</span>
            <span class="button__icon">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </button>
        </div>
      `;
  });
  inputField.innerHTML = display;
  getData();
}

function getData() {
  fetch("./assets/js/data.json")
    .then((resp) => {
      // console.log(resp.json());
      return resp.json();
    })
    .then((res) => {
      console.log(res);
      data = res;
      console.log(data);
      data.forEach((item, id) => {
        item.languages.unshift(item.level);
        item.languages.unshift(item.role);
        // let languages = item.languages.map((items, id) => {
        //   return `<button class="tag-units">${items}</button>`;
        // });

        // console.log(languages);
        let render = "";
        render += ` <div class="joblisitng__card" >
        <article>
          <div class="job_info">
            <div class="company_logo">
              <img src="${item.logo}" alt="" />
            </div>
            <div class="company-info">
              <div class="job-header">
                <div class="company-name">${item.company}</div>
                <div class="${item.new ? "New" : ""}">${
          item.new ? "NEW" : ""
        }</div>
                <div class="${item.featured ? "Featured" : ""}">${
          item.featured ? "FEATURED" : ""
        }</div>
              </div>
              <h3 class="job-position">${item.position}</h3>
              <div class="job-footer">
                <p>${item.postedAt}</p>

                .

                <p>Full Time</p>

                .

                <p>USA only</p>
              </div>
            </div>
          </div>
        </article>
        <div class="tag-list">
          ${item.languages
            .map(
              (items) =>
                `<button class="tag-units" onclick="addToFilter('${items}')">${items}</button>`
            )
            .join(" ")}
        </div>
      </div>`;
        jobList.innerHTML += render;
      });
    });
}

getData();

console.log(data);

function useData() {}

useData();
