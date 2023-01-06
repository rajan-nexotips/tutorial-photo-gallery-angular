import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StockTipsComponent } from "./pages/stocksTips/stock-tips/stock-tips.component";

const routes: Routes = [{ path: "stockTips", component: StockTipsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
