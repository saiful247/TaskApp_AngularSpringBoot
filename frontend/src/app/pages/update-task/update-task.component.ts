import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-task.component.html',
})
export class UpdateTaskComponent implements OnInit {
  taskForm: FormGroup;
  taskId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['TO_DO', Validators.required],
      createdAt: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(`http://localhost:8080/api/task/${this.taskId}`).subscribe((task) => {
      // Convert ISO datetime to local datetime for input[type=datetime-local]
      const createdAtLocal = task.createdAt?.slice(0, 16);
      this.taskForm.patchValue({ ...task, createdAt: createdAtLocal });
    });
  }

  onUpdate() {
    if (this.taskForm.valid) {
      this.http.put(`http://localhost:8080/api/task/update/${this.taskId}`, this.taskForm.value).subscribe({
        next: () => {
          alert('Task updated successfully!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert('Failed to update task');
          console.error(err);
        }
      });
    }
  }
}
