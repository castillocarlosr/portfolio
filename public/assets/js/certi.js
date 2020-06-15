var carlos = false;

function toggle_visibility(id) {
    var e = document.getElementById(id);
     if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    b = true;
}

function twenty21() {
    var e = document.getElementById('twenty21');
    if(!carlos) e.style.display = 'none';
    carlos=false;
}

function twenty20() {
    var e = document.getElementById('twenty20');
    if(!carlos) e.style.display = 'none';
    carlos=false;
}