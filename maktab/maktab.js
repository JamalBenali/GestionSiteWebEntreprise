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

databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        var row = tblUsers.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellPosition = row.insertCell(2);
        var cellPart = row.insertCell(3);
        var cellImage = row.insertCell(4);
        var cellEditDelete = row.insertCell(5);
        cellId.appendChild(document.createTextNode(childKey));
        cellPart.appendChild(document.createTextNode(childData.part));
        cellName.appendChild(document.createTextNode(childData.name));
        cellPosition.appendChild(document.createTextNode(childData.position));
        cellImage.appendChild(CreateImage(childData.img));
        // cellEditDelete.appendChild(settingsNode());
        rowIndex = rowIndex + 1;

    });
});

function addPerson() {
    var name = document.getElementById('name').value;
    var position = document.getElementById('position').value;
    var part = document.getElementById('part').value;
    var img = "";

    if (document.getElementById('img').value == "")
        img = "http://www.lqliaa.com/asset/imgs/member9.png";
    else img = document.getElementById('img').value;
    var uid = firebase.database().ref().child('Maktab').push().key;
    var data = {
        // user_id: uid,
        name: name,
        position: position,
        part: part,
        img: img,
    }
    if (!name || !position || !part) {
        alert('Fill all ');
    } else {

        var updates = {};
        updates['/Maktab/' + uid] = data;
        firebase.database().ref().update(updates);

        alert('The person is created successfully!');
        reload_page();
    }
}

function updatePerson() {
    var name = document.getElementById('nameE').value;
    var position = document.getElementById('positionE').value;
    var part = document.getElementById('partE').value;
    var id = document.getElementById('person_idE').value;
    var img = "";

    if (document.getElementById('imgE').value == "")
        img = "http://www.lqliaa.com/asset/imgs/member9.png";
    else img = document.getElementById('imgE').value;

    var data = {
        name: name,
        position: position,
        part: part,
        img: img,
    }
    if (!id || !name || !position || !part) {
        alert('Fill all ');
    } else {
        var updates = {};
        updates['/Maktab/' + id] = data;
        firebase.database().ref().update(updates);
        alert('The person is updated successfully!');
        reload_page();
    }
}

function deletePerson() {
    var news_id = document.getElementById('person_id').value;

    firebase.database().ref().child('/Maktab/' + news_id).remove();
    alert('The person is deleted successfully!');
    reload_page();
}

function reload_page() {
    window.location.reload();
}

function CreateImage(SRC) {
    var imgP = document.createElement("IMG");
    imgP.src = SRC;
    imgP.height = imgP.naturalHeight * 0.66;
    imgP.width = imgP.naturalWidth * 0.66;
    return imgP;
}

function settingsNode() {
    var par = document.createElement("p");
    var editL = document.createElement("a");
    var deleteL = document.createElement("a");
    var editIcon = document.createElement("i");
    var deleteIcon = document.createElement("i");
    editL.setAttribute("href", "#editEmployeeModal");
    editL.setAttribute("class", "edit");
    editL.setAttribute("data-toggle", "modal");


    deleteL.setAttribute("href", "#deleteEmployeeModal");
    deleteL.setAttribute("class", "delete");
    deleteL.setAttribute("data-toggle", "modal");



    editIcon.setAttribute("class", "material-icons");
    editIcon.setAttribute("data-toggle", "tooltip");
    editIcon.setAttribute("title", "Edit");
    editIcon.innerHTML = '&#xE254;';

    deleteIcon.setAttribute("class", "material-icons");
    deleteIcon.setAttribute("data-toggle", "tooltip");
    deleteIcon.setAttribute("title", "Delete");
    deleteIcon.innerHTML = '&#xE872;';

    editL.appendChild(editIcon);
    deleteL.appendChild(deleteIcon);

    // par.appendChild(editL);
    par.appendChild(deleteL);
    return par;
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});