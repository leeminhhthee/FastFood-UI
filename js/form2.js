//món 3
    // lấy phần Modal
    var modal = document.getElementById('myModal2');
            
    // Lấy phần button mở Modal
    var btn = document.getElementById("myBtn2");
    // Lấy phần span đóng Modal
    var span = document.getElementsByClassName("close2")[0];

    var n = document.getElementsByClassName("cancel2")[0];
    var m = document.getElementsByClassName("order2")[0];

    // Khi button được click thi mở Modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Khi span được click thì đóng
    span.onclick = function() {
        modal.style.display = "none";
    }
    n.onclick = function(){
      modal.style.display = "none";
    }
    m.onclick = function(){
      modal.style.display = "none";
      alert("Succes Order! See you again...")
    }

    // Khi click ngoài Modal thì đóng Modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }