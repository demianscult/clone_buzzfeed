import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { PostComponent } from './post/post.component';
    import { QuizComponent } from './quiz/quiz.component';
    import { CategoryComponent } from './category/category.component';

    export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'post/:id', component: PostComponent },
      { path: 'quiz/:id', component: QuizComponent },
      { path: 'category/:name', component: CategoryComponent }
    ];