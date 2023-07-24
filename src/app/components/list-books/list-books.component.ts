import { Component } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { librosDeLectura } from 'src/app/services/service-list.service';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {	
  closeResult:string = '';
	datas = librosDeLectura;
  constructor(private offcanvasService: NgbOffcanvas){}
  open(content:any) {
		//console.log(librosDeLectura)
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title',position: 'bottom' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
