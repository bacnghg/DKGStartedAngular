import { Component } from "@angular/core";


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "productId": 22,
            "productName": "2 Garden Cart",
            "productCode": "GDB-0023",
            "releaseDate": "March 23, 2017",
            'description': "15 gallong capacity",
            "price": 23.99,
            "starRating": 3.2,
            "imageUrl": "https://i-vnexpress.vnecdn.net/2017/07/11/bmw-x6-1-2552-1431307921-1654-1499774262.jpg"
        },
        {
            "productId": 32,
            "productName": "3 Garden Cart",
            "productCode": "GDB-0023",
            "releaseDate": "March 23, 2017",
            'description': "15 gallong capacity",
            "price": 23.99,
            "starRating": 4.4,
            "imageUrl": "https://i-vnexpress.vnecdn.net/2017/07/11/bmw-x6-1-2552-1431307921-1654-1499774262.jpg"
        },
        {
            "productId": 42,
            "productName": "4 Garden Cart",
            "productCode": "GDB-0023",
            "releaseDate": "March 23, 2017",
            'description': "15 gallong capacity",
            "price": 33.99,
            "starRating": 4.2,
            "imageUrl": "https://i-vnexpress.vnecdn.net/2017/07/11/bmw-x6-1-2552-1431307921-1654-1499774262.jpg"
        },
        
        
    ];
}