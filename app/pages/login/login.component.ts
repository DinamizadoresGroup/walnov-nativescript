import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    providers: [],
    templateUrl: "./pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit{
    isLoggedIn = true;
    @ViewChild("container") container: ElementRef;
    email: any;
    password: any;

    constructor(private router: Router, private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        //this.page.backgroundImage = "res://bg_login";
    }

    submit() {

    }
}