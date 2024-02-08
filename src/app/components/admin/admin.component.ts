import { Component, OnInit  } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent  implements OnInit{
  users: any[] = [];
  selectedUser: any;
  showUpdateForm: boolean = false;

  constructor(
    private AdminService: AdminService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.AdminService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  deleteUser(userId: string): void {
    this.AdminService.deleteUser(userId).subscribe(
      (res) => {
        console.log(res)
        this.loadUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  updateUser(): void {
    this.AdminService.updateUser(this.selectedUser._id, this.selectedUser).subscribe(
      (updatedUser) => {
        console.log(updatedUser)
        this.loadUsers();
        this.closeUpdateForm();
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  openUpdateForm(user: any): void {
    this.selectedUser = { ...user };
    this.showUpdateForm = true;
  }

  closeUpdateForm(): void {
    this.selectedUser = null;
    this.showUpdateForm = false;
  }

}
