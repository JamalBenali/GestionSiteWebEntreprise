
    <div class="container-fluid">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Manage <b>Messages</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i
                                class="material-icons">&#xE15C;</i> <span>Delete Message</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover" id="Contact_Us_list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <!-- Delete Modal HTML -->
    <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Delete Message</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>ID</label>
                            <input type="text" class="form-control" id="mobadara_id" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-danger" value="Delete" onclick="">
                    </div>
                </form>
            </div>
        </div>
    </div>