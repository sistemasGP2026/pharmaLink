import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";
import { BackToHome } from '../back-to-home/back-to-home';

@Component({
  selector: 'app-sgi-videos',
  imports: [CommonModule, BackToHome],
  templateUrl: './sgi-videos.html',
  styleUrl: './sgi-videos.css',
})
export class SgiVideos {
  constructor(private sanitizer: DomSanitizer) {}
  videos: any[] = [
    {name: 'ACCION CORRECTIVA Y DE MEJORA', url: 'https://drive.google.com/file/d/1mcwelTl3qMht2PMls06PCKwumJLg0jFT/preview'},
    {name : 'GESTION DEL CAMBIO', url: 'https://drive.google.com/file/d/1TNTKogJCCYX8vsE66L9VHMhsPSY3mLV3/preview'},
    {name: 'PQRS', url: 'https://drive.google.com/file/d/1donJY3c2tV0C9XqWBTZj38xRTthQ9dTH/preview'},
    {name: 'SALIDA NO CONFORME', url: 'https://drive.google.com/file/d/11EC8gDfBBw1GgtQl0gt6rY-gcbXd9SXR/preview'},
    {name: 'SOLICITUD INTERNA', url: 'https://drive.google.com/file/d/1oEkALbNsjVqaOCnIrv81Dpioy7FMSLMh/preview'},
  ];

   getVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
