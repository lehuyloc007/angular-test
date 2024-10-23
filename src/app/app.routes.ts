import { Routes } from "@angular/router";
import { PageTableComponent } from "./pages/page-table/page-table.component";
import { PageFormComponent } from "./pages/page-form/page-form.component";

export const routes: Routes = [
    {
        path: "",
        component: PageTableComponent,
    },
    {
        path: "page-table",
        component: PageTableComponent,
    },
    {
        path: "page-form",
        component: PageFormComponent,
    },
];
