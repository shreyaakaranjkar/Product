import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations : [],
    imports : [MatButtonModule,
        MatDividerModule,
    MatSnackBarModule


    ],
    exports : [MatSnackBarModule,MatDividerModule,MatButtonModule,MatCardModule],
    providers : []
})

export class MaterialModule{}