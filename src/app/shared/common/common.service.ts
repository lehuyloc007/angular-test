import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export const GlobalComponent = {
    // Api Calling
    API_URL: "sssss",
    //headerToken: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
};

@Injectable({
    providedIn: "root",
})
export class CommonService {
    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };

    commonService(
        type: string = "GET",
        url: string,
        params: any
    ): Observable<any> {
        if (type === "POST") {
            return this.http.post(
                GlobalComponent.API_URL + url,
                params,
                this.httpOptions
            );
        } else {
            return this.http.get(GlobalComponent.API_URL + url, {
                ...this.httpOptions,
                params: params,
            });
        }
    }
}
