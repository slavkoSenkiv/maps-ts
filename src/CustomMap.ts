export class CustomMap {

    googleMap: google.maps.Map;

    constructor(divId){
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(entity): void {

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.lad,
                lng: entity.location.lng
            }
        });

        /* marker.addListener('click', ()=>{
            const infoWondow = new google.maps.InfoWindow({
                content: entity.markerContent()
            });
            infoWondow.open(this.googleMap, marker);
        }); */
    }
}