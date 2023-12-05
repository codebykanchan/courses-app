import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursesApp';

  images = [
    { imgSrc: 'assets/image1.jpg', imgAlt: 'Get Future-Proofing Skills' },
    { imgSrc: 'assets/image2.jpg', imgAlt: 'Get Critical Thinking ' },
    { imgSrc: 'assets/finalmatrix.gif', imgAlt: 'Image 4' },
    { imgSrc: 'assets/image3.jpg', imgAlt: 'Get Problem-Solving Skills' },
    { imgSrc: 'assets/image4crop.gif', imgAlt: 'Image 4 gif' },
    { imgSrc: 'assets/image5.jpg', imgAlt: 'Image 5' },
    { imgSrc: 'assets/highresgif3.gif', imgAlt: 'Image 6' },
    { imgSrc: 'assets/image7.jpg', imgAlt: 'Image 7' },
    { imgSrc: 'assets/image8.jpg', imgAlt: 'Image 8' },
    { imgSrc: 'assets/image9.jpg', imgAlt: 'Image 9' },
    { imgSrc: 'assets/image10.jpg', imgAlt: 'Image 10' },
    { imgSrc: 'assets/image11.jpg', imgAlt: 'Image 11' },
    { imgSrc: 'assets/highresgif1.gif', imgAlt: 'Image 11' },
    { imgSrc: 'assets/image12.jpg', imgAlt: 'Image 12' },
    { imgSrc: 'assets/highresgif4.gif', imgAlt: 'Image 13' },
    { imgSrc: 'assets/image14.jpg', imgAlt: 'Image 14' },
    { imgSrc: 'assets/image15.jpg', imgAlt: 'Image 15' },
    { imgSrc: 'assets/baymax1.gif', imgAlt: 'Image 16' },
    
    // Add more images as needed
];
}
