import { Component, Input, OnInit } from "@angular/core";
import { ColumnTableCustom, Pagination } from "./table";
import { CommonService } from "../../common/common.service";
import { finalize } from "rxjs";
import Swal from "sweetalert2";
import {
    NgbDropdownModule,
    NgbPaginationModule,
} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-table-custom",
    standalone: true,
    imports: [CommonModule, FormsModule , NgbDropdownModule, NgbPaginationModule],
    templateUrl: "./table-custom.component.html",
    styleUrl: "./table-custom.component.scss",
})
export class TableCustomComponent implements OnInit {
    @Input() heigthTable: string | undefined;
    @Input() columns: Array<ColumnTableCustom> = [];
    @Input() dataSource: any[] = [];
    @Input() pagination: Pagination = {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
    };
    @Input() service?: {
        url: string;
        method: string;
        data?: any | {};
    };
    @Input() onRowDbClick: Function = () => {};

    constructor() {}

    ngOnInit(): void {
        // if (this.service) this.search();
    }

    // search() {
    //     const dataService = {
    //         ...this?.service?.data,
    //         ...this.pagination,
    //     };

    //     // show loading
    //     Swal.showLoading();
    //     if (this.service) {
    //         this.commonService
    //             .commonService(
    //                 this.service.method,
    //                 this.service.url,
    //                 dataService
    //             )
    //             .pipe(finalize(() => Swal.close()))
    //             .subscribe((data: any) => {
    //                 this.pagination = {
    //                     ...this.pagination,
    //                     total: data.data.totalElements,
    //                 };
    //                 this.dataSource = data.data.data.map(
    //                     (item: any, index: number) => {
    //                         return {
    //                             index: this.pagination.pageIndex * (index + 1),
    //                             ...item,
    //                         };
    //                     }
    //                 );
    //             });
    //     }
    // }
}
