import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pain-editor-dialog',
  templateUrl: './pain-editor-dialog.component.html',
  styleUrls: ['./pain-editor-dialog.component.css'],
})
export class PainEditorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PainEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  receivePainEditorEvent(event: any): void {
    if (event?.action === 'cancel') this.dialogRef.close();
  }
}
