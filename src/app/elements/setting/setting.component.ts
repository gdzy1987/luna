import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SettingService} from '@app/services';
import {GlobalSetting, Setting} from '@app/model';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'elements-setting',
  templateUrl: './setting.component.html',
  styles: ['.mat-form-field { width: 100%;}']
})
export class ElementSettingComponent implements OnInit {
  resolutionsChoices = ['Auto', '1024x768', '1366x768', '1600x900', '1920x1080'];
  public boolChoices: any[];
  setting: Setting;
  globalSetting: GlobalSetting;

  constructor(public dialogRef: MatDialogRef<ElementSettingComponent>,
              public translate: TranslateService,
              private settingSrv: SettingService) {
    this.boolChoices = [
      {name: translate.instant('Yes'), value: '1'},
      {name: translate.instant('No'), value: '0'}
    ];
  }

  ngOnInit() {
    this.setting = this.settingSrv.setting;
    this.globalSetting = this.settingSrv.globalSetting;
  }

  onSubmit() {
    this.settingSrv.save();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
