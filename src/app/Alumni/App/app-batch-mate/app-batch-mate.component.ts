import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlumniService } from 'src/app/Services/alumni.service';

@Component({
  selector: 'app-app-batch-mate',
  templateUrl: './app-batch-mate.component.html',
  styleUrls: ['./app-batch-mate.component.scss']
})
export class AppBatchMateComponent implements OnInit {
  filterForm: FormGroup;
  batchMates: any = [];

  searchKey: any = [];
  searchValue: any = [];
  searchId: any = [];
  searchName: any = [];

  isLoading: boolean = false;

  constructor(
    private alumniService: AlumniService
  ) { }

  ngOnInit(): void {
    this.filterFormInti();
    this.getBatchmates();
  }

  filterFormInti() {
    this.filterForm = new FormGroup({
      type: new FormControl('get-batch-mates'),
      token: new FormControl(this.alumniService.access_token()),
      searchBy: new FormControl('all'),
      search: new FormControl('')
    });
  }

  getBatchmates() {
    this.isLoading = true;
    let key = this.filterForm.controls['searchBy'].value;
    let value = this.filterForm.controls['search'].value;

    if(this.searchKey.length == 0) {
      this.searchKey.push(key.split(',')[0]);
      this.searchValue.push(value);
      this.searchId.push(key.split(',')[1]);
      this.searchName.push(key.split(',')[2]);
    } else {
      if(this.searchKey.indexOf(key.split(',')[0]) === -1) {
        this.searchKey.push(key.split(',')[0]);
        this.searchValue.push(value);
        this.searchId.push(key.split(',')[1]);
        this.searchName.push(key.split(',')[2]);
      } else {
        this.searchValue[this.searchKey.indexOf(key.split(',')[0])] = value;
        this.searchId[this.searchKey.indexOf(key.split(',')[0])] = key.split(',')[1];
      }
    }

    if(key.split(',')[0] == 'all') {
      this.searchKey = [];
      this.searchValue = [];
      this.searchId = [];
      this.searchName = [];
    }

    // console.log(this.searchKey,this.searchValue,this.searchId);

    this.alumniService.getBuddyData(this.searchKey,this.searchValue,this.searchId).subscribe((response) => {
      this.batchMates = response;
      this.isLoading = false;
    })
  }

  removeMe(item) {
    this.searchKey.splice(item,1);
    this.searchValue.splice(item,1);
    this.searchId.splice(item,1);
    this.searchName.splice(item,1);

    this.alumniService.getBuddyData(this.searchKey,this.searchValue,this.searchId).subscribe((response) => {
      this.batchMates = response;
    })
  }

  ifChange(val) {
    let ele = document.getElementById('search');

    if(val == 'all') {
      ele.classList.add('d-none');
    } else {
      ele.classList.remove('d-none');
    }

    this.filterForm.controls['search'].setValue('');
  }


}
