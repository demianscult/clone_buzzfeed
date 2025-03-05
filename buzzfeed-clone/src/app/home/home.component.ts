import { Component, OnInit } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { DataService } from '../data.service';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from '@angular/router';

    @Component({
      selector: 'app-home',
      standalone: true,
      imports: [HttpClientModule, CommonModule, RouterModule],
      templateUrl: './home.component.html',
      styleUrl: './home.component.scss',
      providers: [DataService]
    })
    export class HomeComponent implements OnInit {
      posts: any[] = [];

      constructor(private dataService: DataService) {}

      ngOnInit(): void {
        this.dataService.getData().subscribe(data => {
          this.posts = [data];
        });
      }
    }