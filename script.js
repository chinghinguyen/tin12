function login()
{
  let a = username.value
  let b = password.value
  if (a == "chinghi" && b == "1234556789")
  {
    window.open("home.html")
    document.getElementById(complier).style.display="blocked"
  }
  else document.write("Không hợp lệ")
}
