import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, Marker, NavigationControl } from 'maplibre-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(){

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const initialState = { lng: 0, lat: 0, zoom: 1 };

    let map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets/style.json?key=j88RZDhFzleiE35leSkp`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    let dom: any = [];
    let coordenadas = [
      {
      coordx: 139.7525,
      coordy: 35.6846,
      color: '#ae1111'
      },
      {
        coordx: 130.7525,
        coordy: 35.6846,
        color: '#ae1111'
      },
      {
        coordx: 121.7525,
        coordy: 32.6846,
        color: '#ce9219'
      },

  ]
    for (let i in coordenadas) {
      dom[i] = document.createElement('div');
      dom[i].style.width = '50px';
      dom[i].style.height = '50px';
      dom[i].style.backgroundColor = coordenadas[i].color;
      dom[i].style.borderRadius = '100%';
      dom[i].style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c46aa27-a386-493d-ad19-ab503d7994cc/d5x5mkg-e06c71fb-cb72-4e88-bc65-2534d9659aaa.png/v1/fill/w_900,h_800,strp/fondo_transparente_para_textos_png_by_edicionesblanki_d5x5mkg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDAiLCJwYXRoIjoiXC9mXC8wYzQ2YWEyNy1hMzg2LTQ5M2QtYWQxOS1hYjUwM2Q3OTk0Y2NcL2Q1eDVta2ctZTA2YzcxZmItY2I3Mi00ZTg4LWJjNjUtMjUzNGQ5NjU5YWFhLnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lyiNoRKh7xg2fThANHMyCWLUL6wKspqsGFkgDXYVSTg)';

      new Marker(dom[i])
        .setLngLat([coordenadas[i].coordx,coordenadas[i].coordy])
        .addTo(map);
    }

  }
}
