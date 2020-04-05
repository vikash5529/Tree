import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { ChildTreeComponent } from './components/child-tree/child-tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppComponent, TreeComponent, ChildTreeComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MatCardModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
