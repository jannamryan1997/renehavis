import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "slicetextPipe"
})

export class SlicetextPipe implements PipeTransform {

    transform(text: string, length: number = 300) {

        if (text.length > length) {
            return text.slice(0, length) + '...';
        }
        else {
            return text;
        }
    }
}

