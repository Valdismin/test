import React, {useState} from "react";
import s from "./../Image/Image.module.css"
import {Button} from "@material-ui/core";
import {imageType} from "../Image/Image";

export const Bookmark = () => {

    const [ids, SetIds] = useState<string>("")

    function getImageUrl(farm: number, server: string, id: string, secret: string) {

        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    const renderImageItem = (image: imageType, idx: string) => {
        const {farm, server, id, secret, title} = image;
        debugger
        return (
            <ul key={idx}>
                <div className={s.image}>
                    <div className={s.title}>{title}</div>
                    <img src={getImageUrl(farm, server, id, secret)} alt="" width="300px"/>
                    <Button variant="contained" size="small" color="primary"
                            onClick={() => {
                                localStorage.removeItem(id)
                                SetIds(id)
                            }}>Remove it
                    </Button>
                </div>
            </ul>
        );
    }

    function allStorage() {
        let values: Array<imageType> = []
        let keys: Array<string> = Object.keys(localStorage)
        let i = keys.length;

        while (i--) {
            //@ts-ignore
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }

        return values;
    }


    return <div className={s.main}>
        {allStorage().map((image:imageType) => renderImageItem(image, image.id))}
    </div>
}