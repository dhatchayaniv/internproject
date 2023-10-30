import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formData: any;

  constructor() {
    // Initialize the form data from local storage if available
    const savedData = localStorage.getItem('formData');
    this.formData = savedData ? JSON.parse(savedData) : {};
  }

  getFormData() {
    return this.formData;
  }

  setFormData(formData: any) {
    this.formData = formData;
    // Save the form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  clearFormData() {
    this.formData = {};
    // Delete the data from local storage
    localStorage.removeItem('formData');
  }
}

