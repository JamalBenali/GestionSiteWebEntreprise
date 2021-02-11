$(document).ready(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});

var firebaseConfig = {
    apiKey: "AIzaSyDINVl1WQj_bRf4_mLHS99RWt5vLDwVrZg",
    authDomain: "lqliaaapp.firebaseapp.com",
    databaseURL: "https://lqliaaapp.firebaseio.com",
    projectId: "lqliaaapp",
    storageBucket: "lqliaaapp.appspot.com",
    messagingSenderId: "795608392624",
    appId: "1:795608392624:web:3a63da0768da084d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('Maktab/');
var rowIndex = 1;

function CreateImage(SRC) {
    var imgP = document.createElement("IMG");
    imgP.src = SRC;
    imgP.height = imgP.naturalHeight * 0.66;
    imgP.width = imgP.naturalWidth * 0.66;
    return imgP;
}

var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('majlis/');
var rowIndex = 1;

databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        var row = tblUsers.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellprenomNom = row.insertCell(1);
        var celluser_poste = row.insertCell(2);
        var celluser_Image = row.insertCell(3);
        cellId.appendChild(document.createTextNode(childKey));
        cellprenomNom.appendChild(document.createTextNode(childData.prenomNom));
        celluser_poste.appendChild(document.createTextNode(childData.post));
        celluser_Image.appendChild(CreateImage(childData.image));
        rowIndex = rowIndex + 1;    
    });
});

function find_info() {
    if (document.getElementById('user_id').value == "") {
        alert("veuillez entrer l'ID");
    }
    else {
        databaseRef.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                var idTextfield = document.getElementById('user_id').value;
                var textfId = document.getElementById('user_id');
                var textFprenomNom = document.getElementById('prenomNom');
                var textFPoste = document.getElementById('user_poste');
                var textFImage = document.getElementById('user_Image');
                if (childKey == idTextfield) {
                    textfId.value = childKey;
                    textFprenomNom.value = childData.prenomNom;
                    textFImage.value = childData.image;
                    textFPoste.value = childData.post;
                }
            });
        });
    }
}
function save_user() {
    if (document.getElementById('prenomNom').value == "" || document.getElementById('user_poste').value == "") {
        alert("veuillez entrer le nom, le prenom , et le poste");
    }
    else {
        var prenomNom = document.getElementById('prenomNom').value;
        var user_poste = document.getElementById('user_poste').value;
        user_Image = "";
        if (document.getElementById('user_Image').value == "")
            user_Image = "http://lqliaa.com/asset/imgs/member9.png";
        else user_Image = document.getElementById('user_Image').value;

        var uid = firebase.database().ref().child('majlis').push().key;

        var data = {
            user_id: uid,
            prenomNom: prenomNom,
            post: user_poste,
            image: user_Image,
        }

        var updates = {};
        updates['/majlis/' + uid] = data;
        firebase.database().ref().update(updates);

        alert('The user is created successfully!');
        reload_page();
    }
}
function update_user() {
    // if (document.getElementById('prenomNomE').value == "" || document.getElementById('user_posteE').value == "" || document.getElementById('user_idE').value == "") {
    if (document.getElementById('user_idE').value == "") {
        alert("ID Invalide");
    }
    else {
        var prenomNom = document.getElementById('prenomNomE').value;
        var user_poste = document.getElementById('user_posteE').value;
        var user_Image = "";
        if (document.getElementById('user_ImageE').value == "")
            user_Image = "http://lqliaa.com/asset/imgs/member9.png";
        else user_Image = document.getElementById('user_ImageE').value;
        var user_id = document.getElementById('user_idE').value;

        var data = {
            prenomNom: prenomNom,
            post: user_poste,
            image: user_Image,
        }

        var updates = {};
        updates['/majlis/' + user_id] = data;
        firebase.database().ref().update(updates);

        alert('The user is updated successfully!');

        reload_page();
    }
}

function delete_user() {
    if (document.getElementById('user_id').value == "") {
        alert("veuillez entrer l'ID");
    }
    else {
        var user_id = document.getElementById('user_id').value;

        firebase.database().ref().child('/majlis/' + user_id).remove();
        alert('The user is deleted successfully!');
        reload_page();
    }
}

function reload_page() {
    window.location.reload();
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});