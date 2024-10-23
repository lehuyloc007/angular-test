import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "app-input-form-custom",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: "./input-form-custom.component.html",
    styleUrl: "./input-form-custom.component.scss",
})
export class InputFormCustomComponent {
    @Input() name: string;
    @Input() label: string;
    @Input() form!: FormGroup;

    getErrorMessage(controlName: string, label: string): string | null {
        const control = this.form.get(controlName);
        if (control?.hasError("required")) {
            return `${
                label.charAt(0).toUpperCase() + label.slice(1)
            } is required.`;
        }
        if (control?.hasError("minlength")) {
            return `${
                label.charAt(0).toUpperCase() + label.slice(1)
            } must be at least ${
                control.getError("minlength").requiredLength
            } characters long.`;
        }
        if (control?.hasError("email")) {
            return "Invalid email format.";
        }
        if (control?.hasError("min")) {
            return `${
                label.charAt(0).toUpperCase() + label.slice(1)
            } must be at least 1.`;
        }
        return null;
    }
}
