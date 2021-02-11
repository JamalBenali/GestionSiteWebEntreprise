
    <div class="container-fluid">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Manage <b>News</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i
                                class="material-icons">&#xE147;</i> <span>Add New News</span></a>
                        <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i
                                class="material-icons">&#xE15C;</i> <span>Delete News</span></a>
                        <a href="#editEmployeeModal" class="btn btn-warning" data-toggle="modal"><i
                                class="material-icons">&#xE15C;</i> <span>Update News</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover" id="tbl_users_list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Goals</th>
                        <th>Summary</th>
                        <th>Image</th>
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
    <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Add Barnamaj</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" required id="name">
                        </div>
                        <div class="form-group">
                            <label>Summary</label>
                            <input type="text" class="form-control" required id="summary">
                        </div>
                        <div class="form-group">
                            <label>Goal</label>
                            <input class="form-control" required id="goal"></input>
                        </div>
                        <div class="form-group">
                            <label>ImageUrl</label>
                            <input type="text" class="form-control" id="imgUrl">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-success" value="Add" onclick="save_mobadara();">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Barnamaj</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>ID</label>
                            <input type="text" class="form-control" id="mobadara_idE" required>
                        </div>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control"  id="nameE">
                        </div>
                        <div class="form-group">
                            <label>Goal</label>
                            <input class="form-control" id="goalE"></input>
                        </div>
                        <div class="form-group">
                            <label>Summary</label>
                            <input class="form-control" id="summaryE"></input>
                        </div>
                        <div class="form-group">
                            <label>ImageUrl</label>
                            <input type="text" class="form-control" id="imgUrlE">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-info" value="Save" onclick="update_mobadara();">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Delete Modal HTML -->
    <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Delete Barnamaj</h4>
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
                        <input type="submit" class="btn btn-danger" value="Delete" onclick="delete_mobadara();">
                    </div>
                </form>
            </div>
        </div>
    </div>