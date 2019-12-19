import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'study-tab',
    template:`
        <ul class="nav nav-tabs" role="tablist">
            <li [permission]="{id:'tab-study-study',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/study" routerLinkActive="active">Studies</a></li>
            <li [permission]="{id:'tab-study-patient',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/patient" routerLinkActive="active">Patients</a></li>
            <li [permission]="{id:'tab-study-mwl',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/mwl" routerLinkActive="active">MWL</a></li>
            <li [permission]="{id:'tab-study-uwl',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/uwl" routerLinkActive="active">UWL</a></li>
            <li [permission]="{id:'tab-study-diff',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/diff" routerLinkActive="active">DIFFs</a></li>
        </ul>
    `
})
export class StudyTabComponent{

  constructor() { }
}
