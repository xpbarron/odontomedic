export class SidenavService{
sidenavs =[];
	getBooks(){
		return ["Administracion", "Pacientes", "Citas", "Reportes", "Enlaces"];
	}
	addBook(title){
		this.sidenavs.push(title);
	}
}