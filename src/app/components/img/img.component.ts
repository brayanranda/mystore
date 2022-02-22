import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';
  
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg:string) {
    this.img = newImg;
    console.log("change sjust Img =>", this.img)
  }

  // img:string = 'valor init';
  // Para invocar desde el padre, puedo cambiar el valor de img desde el padre como una props
  // @Input() img:string = 'valor init';
  // @Input() img:string = '';

  // counter = 0;
  // undefined: Porque no vamos asignar ningun valor por defecto
  // counterFn: number | undefined;
  
  constructor() {
    // antes del render
    // NO async, No tener cosas asincronas (osea colocar cosas inmediatas por ejemplo 'this.img = 'aa''
    // Esto solo corre una vez
    console.log('constructor', 'imgValue =>', this.img)
  }
  
  ngOnInit(): void {
    // Corre antes de render - before render
    console.log('ngOnInit', 'imgValue =>', this.img)

    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000)
  }
  
  imgError() {
    this.img = this.imgDefault;
  }
  
  // Esto es una instancia
  @Output() loaded = new EventEmitter<string>();

  imgDefault = './assets/images/default-image.jpg';
    
  imgLoaded() {
    console.log('log hijo');
    // Para enviar información al component padre
    this.loaded.emit(this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before render
    // Actualiza los cambios en inputs
    console.log('ngOnChangdes', 'imgValue =>', this.img)
    // SimpleChanges es para que escuchar todos los inputs, si cualquier input se actualiza
    console.log(changes)
    // Mediante if puedo evaluar cambio de algo en especifico
    // Ejemplo:  if(changes.input) {
    //             code
    //           }
  }

  ngAfterViewInit() {
    // Corre despues de que todo se este renderizando
    // Si quiero manejar algunos hijos del componente this.img, por ejemplo <img src="">
    // Aqui debemos hacerlo
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    // Se corre solo cuando vayamos a eliminar el componente, dejamos de verlo en la interfaz
    console.log('ngOnDestroy')
    // Con esto detengo el componente y no se sigue ejecutando en consola el setInterval
    // window.clearInterval(this.counterFn)
  }


}
