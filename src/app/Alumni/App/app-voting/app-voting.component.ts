import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AlumniService } from 'src/app/Services/alumni.service';
import { UserInfoService } from 'src/app/helpers/user-info.service';

@Component({
  selector: 'app-app-voting',
  templateUrl: './app-voting.component.html',
  styleUrls: ['./app-voting.component.scss']
})
export class AppVotingComponent implements OnInit {

  elections: any = [];
  posts: any = [];
  candidates: any = [];
  isVoted: boolean = false;
  currentDate= new Date();

  info: any;

  constructor(
    private alumniService: AlumniService,
    private notifire: NotifierService,
    private user: UserInfoService
  ) { }

  ngOnInit(): void {

    this.info = this.user.info();

    this.alumniService.getData('get-voting-data').subscribe((response) => {

      if(response['status'] == 1) {
        this.elections = response['elections'];
        this.posts = response['posts'];
      }
    });
  }

  submitVote(election_id,post_id,candidate_id) {
    if(confirm('Confrim your vote !') == false) {
      return 0;
    }

    this.alumniService.sendVote('add-vote',election_id,post_id,candidate_id).subscribe((response) => {
      if(response['status'] == 1) {
        this.isVoted = true;
        this.notifire.notify('success',response['message']);
      } else {
        this.notifire.notify('error',response['message']);
      }
    });
  }

}
