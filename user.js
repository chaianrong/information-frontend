const BASE_URL = "https://information-backend.onrender.com";

window.onload = async () => {
    await londdata();
};

const londdata = async () => {
    const userDom = document.getElementById("user");
  // โหลด user จาก API
  console.log("noload");
  const response = await axios.get(`${BASE_URL}/users`);

  console.log(response.data);

  // ดึง  data เข้า  html
 
  let htmlData = "<dev>";
  for (let i = 0; i < response.data.length; i++) {
    let user = response.data[i];

    htmlData += `<div class = 'items'>
        <div class = 'name'>
        <div class = fname>${user.firstname}</div>
        <div class = lname>${user.lasrname} </div>
        </div>
        <div class = 'button'>
        <a href = 'index.html?id=${user.id}'><button>แก้ไข</button></a>
        <button class = 'delete' data-id = ${user.id}>ลบ</button>
        </div>
        </div>
        
        `;
  }

  htmlData += "</dev>";
  userDom.innerHTML = htmlData;

  const deletsDom = document.getElementsByClassName("delete");

  for (let i = 0; i < deletsDom.length; i++) {
      deletsDom[i].addEventListener('click', async (event) => {
          // ดึง ID ออกมา
          const id = event.target.dataset.id;
          try{
              await axios.delete(`${BASE_URL}/user/${id}`);
              londdata();
          }catch(error){
            console.log(error);
          }
      })
  }
}
