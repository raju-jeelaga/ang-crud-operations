import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  allUsers: Object;
  isEdit = false;
  userObj = {
    name: "",
    email: "",
    password: "",
    phone: "",
    id: "",
  };
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getLatestUser();
  }

  addNewUser(formObj) {
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((responce) => {
      this.getLatestUser();
    });
  }
  getLatestUser() {
    this.commonService.getAllUsers().subscribe((response) => {
      this.allUsers = response;
    });
  }

  editUser(user) {
    this.isEdit = true;
    this.userObj = user;
  }

  delete(user) {
    //console.log("Deleted Sucessfully");
    this.commonService.deleteduser(user).subscribe(() => {
      this.getLatestUser();
    });
  }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(() => {
      this.getLatestUser();
    });
  }
}
