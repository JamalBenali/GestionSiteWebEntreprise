
    <div class="container-fluid">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Manage <b>President</b></h2>
                    </div>
                    <div class="col-sm-6">

                        <a href="#editEmployeeModal" class="btn btn-warning" data-toggle="modal"><i
                                class="material-icons">&#xE15C;</i> <span>Update President</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover" id="tbl_users_list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Birth Year</th>
                        <th>Family</th>
                        <th>Cert1</th>
                        <th>Cert2</th>
                        <th>Cert3</th>
                        <th>Resp1</th>
                        <th>Resp2</th>
                        <th>Resp3</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Facebook</th>
                        <th>Word</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Article</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="form-group">
                            <label>Job</label>
                            <input type="text" class="form-control" id="job">
                        </div>
                        <div class="form-group">
                            <label>Birth Year</label>
                            <input type="text" class="form-control" id="year">
                        </div>
                        <div class="form-group">
                            <label>Family</label>
                            <input class="form-control" id="family"></input>
                        </div>
                        <div class="form-group">
                            <label>Cert1</label>
                            <input type="text" class="form-control" id="cert1">
                        </div>
                        <div class="form-group">
                            <label>Cert2</label>
                            <input type="text" class="form-control" id="cert2">
                        </div>
                        <div class="form-group">
                            <label>Cert3</label>
                            <input type="text" class="form-control" id="cert3">
                        </div>
                        <div class="form-group">
                            <label>Resp1</label>
                            <input type="text" class="form-control" id="resp1">
                        </div>
                        <div class="form-group">
                            <label>Resp2</label>
                            <input type="text" class="form-control" id="resp2">
                        </div>
                        <div class="form-group">
                            <label>Resp3</label>
                            <input type="text" class="form-control" id="resp3">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" class="form-control" id="phone">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label>Facebook</label>
                            <input type="text" class="form-control" id="facebook">
                        </div>
                        <div class="form-group">
                            <label>Word</label>
                            <input type="text" class="form-control" id="word">
                        </div>
                        <div class="form-group">
                            <label>Image</label>
                            <input type="text" class="form-control" id="profilPic">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-info" value="Save" onclick="update_pres();">
                    </div>
                </form>
            </div>
        </div>
    </div>