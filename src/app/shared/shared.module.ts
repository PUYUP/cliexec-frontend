import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecurecodeValidationComponent } from './securecode-validation/securecode-validation.component';
import { SecurecodeCreateComponent } from './securecode-create/securecode-create.component';
import { SecurecodeValidationDialogComponent } from './securecode-validation-dialog/securecode-validation-dialog.component';
import { PainListComponent } from './pain-list/pain-list.component';
import { PainEditorComponent } from './pain-editor/pain-editor.component';
import { PainEditorDialogComponent } from './pain-editor-dialog/pain-editor-dialog.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SecurecodeValidationComponent,
    SecurecodeCreateComponent,
    SecurecodeValidationDialogComponent,
    PainListComponent,
    PainEditorComponent,
    PainEditorDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    ScrollingModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SecurecodeValidationComponent,
    SecurecodeValidationDialogComponent,
    SecurecodeCreateComponent,
    PainListComponent,
    PainEditorComponent,
  ],
})
export class SharedModule {}
