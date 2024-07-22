import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from '../Components/empty/empty.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppTranslateModule } from '../modules/app-translate.module';

const components =[EmptyComponent];
const modules =[CommonModule ,TranslateModule ,AppTranslateModule];

@NgModule({
  declarations: components,
  imports: modules ,
  exports : [
    ...components ,...modules
  ]

})
export class SharedModule { }
