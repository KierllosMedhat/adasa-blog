import { Component } from '@angular/core';
import * as data from '../../../public/posts.json'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from "@angular/router";
@Component({
  selector: 'app-blogs',
  imports: [CommonModule, FormsModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {
  posts: Post[] = (data as any).default.posts;

   // Filtering
  searchTerm: string = '';
  selectedCategory: string = 'all';

  categories: string[] = [];

  // Pagination
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 0;


  // After filtering
  filteredPosts: Post[] = [];

  ngOnInit() {
    this.categories = [
      'all',
      ...new Set(this.posts.map(p => p.category))
    ];

    this.applyFilters();
  }

   applyFilters() {
    let temp = [...this.posts];

    //  Search
    if (this.searchTerm.trim() !== '') {
      temp = temp.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    //  Category
    if (this.selectedCategory !== 'all') {
      temp = temp.filter(post =>
        post.category === this.selectedCategory
      );
    }

    this.filteredPosts = temp;
    this.setupPagination();
  
  }

  setupPagination() {
    this.totalPages = Math.ceil(this.filteredPosts.length / this.pageSize);
    this.currentPage = 1;
  }

  paginatedPosts(): Post[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPosts.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}

export interface Root {
  posts: Post[]
  categories: Category[]
  siteInfo: SiteInfo
}

export interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: Author
  image: string
  date: string
  readTime: string
  featured: boolean
  tags: string[]
}

export interface Author {
  name: string
  avatar: string
  role: string
}

export interface Category {
  name: string
  count: number
  color: string
}

export interface SiteInfo {
  name: string
  tagline: string
  description: string
  email: string
  social: Social
}

export interface Social {
  twitter: string
  github: string
  linkedin: string
  youtube: string
}
