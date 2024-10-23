import { FormControl } from "@angular/forms";

export interface formData {
    email: FormControl<string | null>;
    name: FormControl<string | null>;
}
