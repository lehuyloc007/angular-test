import {
    Component,
    ElementRef,
    OnInit,
    TemplateRef,
    ViewChild,
} from "@angular/core";
import { TableOrganization } from "./page-table";
import { TableCustomComponent } from "../../shared/components/table-custom/table-custom.component";
import { ModalCustomComponent } from "../../shared/components/modal-custom/modal-custom.component";

@Component({
    selector: "app-page-table",
    standalone: true,
    imports: [TableCustomComponent, ModalCustomComponent],
    templateUrl: "./page-table.component.html",
    styleUrl: "./page-table.component.scss",
})
export class PageTableComponent implements OnInit {
    columnInit = TableOrganization;
    protected serviceName: string | undefined;
    protected jobName: string | undefined;
    protected historyList: any[] = [];
    @ViewChild("columnAction", { static: true })
    columnAction: TemplateRef<any>;
    dataSource = [
        {
            index: 1,
            name: "aaaaa",
        },
        {
            index: 2,
            name: "bbbbb",
        },
    ];

    constructor() {}
    ngOnInit(): void {
        this.columnInit = [
            ...this.columnInit,
            {
                dataIndex: "index",
                title: "",
                width: "120px",
                align: "center",
                render: this.columnAction,
            },
        ];
    }
    handel(r: any) {
        console.log(r);
    }
    handelClick(item: any) {}
    handelClose() {}
}
