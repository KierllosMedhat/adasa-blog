import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blogs } from './blogs/blogs';
import { AboutUs } from './about-us/about-us';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:Home, title:'الرئيسية'},
    {path:'blogs', component:Blogs, title:'المدونة'},
    {path:'about-us', component:AboutUs, title:'من نحن'},
    {path:'**', component: NotFound, title:'صفحة غير موجودة'},
];
