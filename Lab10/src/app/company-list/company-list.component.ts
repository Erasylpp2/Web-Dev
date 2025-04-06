import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Vacancy } from 'src/app/models/vacancy';
import { HhService } from 'src/app/services/hh.service';




@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;

  constructor(private hhService: HhService) {}

  ngOnInit(): void {
    this.hhService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

  onSelectCompany(company: Company): void {
    this.selectedCompany = company;
    this.hhService.getVacanciesByCompany(company.id).subscribe((data: Vacancy[]) => {
      this.vacancies = data;
    });
  }
}
