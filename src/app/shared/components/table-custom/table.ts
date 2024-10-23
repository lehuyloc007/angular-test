import { TemplateRef } from "@angular/core";

export interface ColumnTableCustom {
    dataIndex: string;
    title: string | undefined;
    width: string | number | undefined;
    align: string | undefined;
    render?: TemplateRef<any>;
}
export interface Pagination {
    pageIndex: number;
    pageSize: number;
    total: number;
}
