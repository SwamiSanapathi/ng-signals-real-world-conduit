import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ApiConfigurations } from "src/app/config/api-config";

@Injectable()

export class TagsService {
    $destroy = new Subject<void>();
    http = inject(HttpClient)
    apiConfig = inject(ApiConfigurations)

    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete()
    }

    getTags() {
        return this.http.get(`${this.apiConfig.rootUrl}/tags`)
    }
}