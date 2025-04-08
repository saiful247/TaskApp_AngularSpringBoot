import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { ShineBorderWrapperComponent } from '../../shared/shine-border-wrapper/shine-border-wrapper.component';
import { InteractiveHoverButtonComponent } from '../../shared/interactive-hover-button/interactive-hover-button.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShineBorderWrapperComponent,
    InteractiveHoverButtonComponent,
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  taskForm: FormGroup;
  loading = false;
  showError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['TO_DO', Validators.required],
      createdAt: ['', Validators.required],

    });
  }

  setStatus(status: string) {
    this.taskForm.get('status')?.setValue(status);
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.showError = true;
      this.taskForm.markAllAsTouched(); // show all error messages
      return;
    }

    this.loading = true;
    this.http.post('http://localhost:8080/api/task/create', this.taskForm.value).subscribe({
      next: () => {
        setTimeout(() => {
          this.loading = false;
          alert('✅ Task created successfully!');
          this.taskForm.reset({
            title: '',
            description: '',
            status: 'TO_DO',
            createdAt: '',
          });
          this.showError = false;
        }, 2000);
      },
      error: (err) => {
        this.loading = false;
        console.error('❌ Task creation failed', err);
      },
    });
  }

  hasError(control: string) {
    const ctrl = this.taskForm.get(control);
    return ctrl && ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }
}
