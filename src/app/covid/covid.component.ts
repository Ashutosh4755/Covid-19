import { Component, OnInit, ViewChild } from '@angular/core';
import {ServcovidService} from '../servcovid.service';
import {Country} from 'src/Country';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';





@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {


  

  ELEMENT_DATA: Country[];

  

  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active'];
  
  
  dataSource = new MatTableDataSource<Country>(this.ELEMENT_DATA);



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service: ServcovidService) { 
    

  }

  ngOnInit(): void {
    

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;

    
    this.getAllReport();
    
    
   
  }

 public getAllReport(){
    let resp=this.service.reportsofcovid();
    resp.subscribe(report=> this.dataSource.data=report as Country[])



   
 }

 

 applyFilter(filterValue: string) {
      
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  


}
