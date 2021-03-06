import axios from "axios";


/*

type photoResponseType = {
    id:string
    owner:string
    secret:string
    server:string
    farm:number
    title:string
    ispublic:number
    isfriend:number
    isfamily:number
}

type photosResponseType = {
    page:number
    pages:number
    perpage:number
    total:number
    photo:Array<photoResponseType>
}

type ResponseType = {
    photos:photosResponseType
}
*/

const instance =axios.create({
    baseURL: "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=7eb5e5aafb9d8325146b7f7a3c022448&per_page=20"
});

const instance2 =axios.create({
    baseURL: "https://api.imgur.com/",
    headers: {"Authorization": "Client-ID 97b9af1f2c7e09b",
        'Content-Type': 'text/plain'}
});


export const PhotosAPI = {
    getPhotos(searchText:string,pageNumber:number) {
        return instance.get(`&page=${pageNumber}&text=${searchText}`).then(res=>res.data)
    }
}

export const ImgurAPI = {
    postImage(data:string) {
        return instance2.post(`3/image`,{
            image: data
        })
    }
}
