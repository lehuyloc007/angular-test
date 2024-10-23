import { Component, inject, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-modal-custom",
    standalone: true,
    imports: [],
    templateUrl: "./modal-custom.component.html",
    styleUrl: "./modal-custom.component.scss",
})
export class ModalCustomComponent {
    @Input() close?: any
}
