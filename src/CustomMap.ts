class CustomMap {
    googleMap: google.maps.Map;

    constructor(divId){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
}