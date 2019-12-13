import { Component, OnInit } from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: "instruction-view",
    templateUrl: "instruction.view.html",
    styleUrls: ["instruction.view.scss"]
})

export class InstructionView implements OnInit {

    constructor(private _meta: Meta, private _title: Title) {
        this._title.setTitle('Инструкция');
        this._meta.addTag({ name: "description", content: "" });
    }

    ngOnInit() { }
}