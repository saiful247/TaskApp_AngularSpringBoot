import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShineBorderWrapperComponent } from '../../shared/shine-border-wrapper/shine-border-wrapper.component';
import { InteractiveHoverButtonComponent } from '../../shared/interactive-hover-button/interactive-hover-button.component';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,ShineBorderWrapperComponent,InteractiveHoverButtonComponent,],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['TO_DO', Validators.required],
      createdAt: [new Date().toISOString().slice(0, 16), Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.http.post('http://localhost:8080/api/task/create', this.taskForm.value).subscribe({
        next: () => {
          alert('Task created successfully!');
          this.taskForm.reset({
            title: '',
            description: '',
            status: 'TO_DO',
            createdAt: new Date().toISOString().slice(0, 16),
          });
        },
        error: (err) => {
          console.error('Task creation failed', err);
        }
      });
    }
  }
}
