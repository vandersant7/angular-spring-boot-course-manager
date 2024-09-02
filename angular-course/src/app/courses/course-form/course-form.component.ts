import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CoursesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.courseService.save(this.form.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: () => {
        this.onError('Erro ao salvar curso');
      },
    })
  }

  onCancel() {
    this.form.reset();
  }

  private onError(errorMsg: string) {
    this.snackBar.open(errorMsg, '', {
      duration: 5000
    })
  }
}
