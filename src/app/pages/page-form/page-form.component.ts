import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InputFormCustomComponent } from "../../shared/components/input-form-custom/input-form-custom.component";

@Component({
    selector: "app-page-form",
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        InputFormCustomComponent,
    ],
    templateUrl: "./page-form.component.html",
    styleUrl: "./page-form.component.scss",
})
export class PageFormComponent implements OnInit {
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            name: ["", [Validators.required, Validators.minLength(3)]],
            email: ["", [Validators.required, Validators.email]],
        });
    }

    ngOnInit(): void {}

    onSubmit() {
        if (this.myForm.valid) {
            console.log("Form Submitted!", this.myForm.value);
        } else {
            console.log("Form is invalid");
        }
    }
}
