import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  selectedTask: any = null;

  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.http.get<any[]>('http://localhost:8080/api/task').subscribe(data => {
      this.tasks = data;
    });
  }

  // selectedTask: any = null;

  selectTask(id: number) {
    this.http.get(`http://localhost:8080/api/task/${id}`).subscribe({
      next: (task) => this.selectedTask = task,
      error: (err) => console.error('Failed to fetch task:', err)
    });
  }
  

  closeCard() {
    this.selectedTask = null;
  }

  showDeleteConfirm: boolean = false;
taskToDeleteId: number | null = null;

deleteTask(id: number) {
  this.taskToDeleteId = id;
  this.showDeleteConfirm = true;
}

cancelDelete() {
  this.taskToDeleteId = null;
  this.showDeleteConfirm = false;
}

confirmDelete() {
  if (this.taskToDeleteId !== null) {
    this.http.delete(`http://localhost:8080/api/task/delete/${this.taskToDeleteId}`).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== this.taskToDeleteId);
      if (this.selectedTask?.id === this.taskToDeleteId) {
        this.selectedTask = null;
      }
      this.cancelDelete(); // close modal
    });
  }
}


updateTask(id: number) {
  this.router.navigate(['/tasks/update', id]);
}

}
