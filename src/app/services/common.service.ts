import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  createUser(user) {
    return this._http.post("http://localhost:3000/user", user);
  }
  getAllUsers() {
    return this._http.get("http://localhost:3000/user");
  }
  updateUser(user) {
    return this._http.put("http://localhost:3000/user/" + user.id, user);
  }

  deleteduser(user) {
    return this._http.delete("http://localhost:3000/user/" + user.id);
  }
}
