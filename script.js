//your JS code here. If required.
let submitBtn = document.getElementById("submit");
let table = document.getElementsByClassName("table")[0];

submitBtn.onclick = (ev)=>{
  ev.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  if(title && author && isbn){
    table.innerHTML += `
      <tr>
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>
          <input class="delete" type="button" value="X">
        </td>
      </tr>
    `;
  } else{
    alert("Please fill all the form fields")
  }
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

  document.getElementById("book-list").onclick = (ev) => {
    if(ev.target.classList.contains("delete")){
      ev.target.closest("tr").remove();
      console.log("Row is removed...");
    }
  }