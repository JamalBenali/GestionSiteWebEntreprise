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

//===========//
var tblUsers = document.getElementById('tbl_users_list');
        var databaseRef = firebase.database().ref('Raiss/');
        var rowIndex = 1;

        databaseRef.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

                var row = tblUsers.insertRow(rowIndex);

                // var cellId = row.insertCell(0);
                var cellName = row.insertCell(0);
                var cellJob = row.insertCell(1);
                var cellYear = row.insertCell(2);
                var cellFamily = row.insertCell(3);
                var cellCert1 = row.insertCell(4);
                var cellCert2 = row.insertCell(5);
                var cellCert3 = row.insertCell(6);
                var cellRespo1 = row.insertCell(7);
                var cellRespo2 = row.insertCell(8);
                var cellRespo3 = row.insertCell(9);
                var cellPhone = row.insertCell(10);
                var cellEmail = row.insertCell(11);
                var cellFacebook = row.insertCell(12);
                var cellWord = row.insertCell(13);
                var cellProfilePic = row.insertCell(14);

                // cellId.appendChild(document.createTextNode(childKey));
                cellName.appendChild(document.createTextNode(childData.name));
                cellJob.appendChild(document.createTextNode(childData.job));
                cellYear.appendChild(document.createTextNode(childData.year));
                cellFamily.appendChild(document.createTextNode(childData.familly));
                cellCert1.appendChild(document.createTextNode(childData.cert1));
                cellCert2.appendChild(document.createTextNode(childData.cert2));
                cellCert3.appendChild(document.createTextNode(childData.cert3));
                cellRespo1.appendChild(document.createTextNode(childData.resp1));
                cellRespo2.appendChild(document.createTextNode(childData.resp2));
                cellRespo3.appendChild(document.createTextNode(childData.resp3));
                cellPhone.appendChild(document.createTextNode(childData.phone));
                cellEmail.appendChild(document.createTextNode(childData.email));
                cellFacebook.appendChild(document.createTextNode(childData.facebook));
                cellWord.appendChild(document.createTextNode(childData.word));
                cellProfilePic.appendChild(CreateImage(childData.profilPic));

                rowIndex = rowIndex + 1;
            });
        });

        function update_pres() {
            // var pres_id = document.getElementById('pres_id').value;
            var name = document.getElementById('name').value;
            var job = document.getElementById('job').value;
            var year = document.getElementById('year').value;
            var family = document.getElementById('family').value;
            var cert1 = document.getElementById('cert1').value;
            var cert2 = document.getElementById('cert2').value;
            var cert3 = document.getElementById('cert3').value;
            var resp1 = document.getElementById('resp1').value;
            var resp2 = document.getElementById('resp2').value;
            var resp3 = document.getElementById('resp3').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            var facebook = document.getElementById('facebook').value;
            var profilPic = document.getElementById('profilPic').value;
            var word = document.getElementById('word').value;

            var data = {
                name: name,
                job: job,
                year: year,
                familly: family,
                cert1: cert1,
                cert2: cert2,
                cert3: cert3,
                resp1: resp1,
                resp2: resp2,
                resp3: resp3,
                phone: phone,
                email: email,
                facebook: facebook,
                profilPic: profilPic,
                word: word,
            }

            var updates = {};
            updates['/Raiss/President'] = data;
            firebase.database().ref().update(updates);
            alert('The President is updated successfully!');
            reload_page();
        }

        function reload_page() {
            window.location.reload();
        }

        function CreateImage(SRC) {
            var imgP = document.createElement("IMG");
            imgP.src = SRC;
            imgP.height = imgP.naturalHeight;
            imgP.width = imgP.naturalWidth;
            return imgP;
        }

//===========//
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});