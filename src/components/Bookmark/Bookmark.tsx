import React, {useState} from "react";
import s from "./../Image/Image.module.css"
import {Button} from "@material-ui/core";

export const Bookmark = () => {

    const [ids, SetIds] = useState("")

    function getImageUrl(farm: any, server: any, id: any, secret: any) {

        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    const renderImageItem = (image: any, idx: any) => {
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
        let values: Array<any> = []
        let keys: Array<string> = Object.keys(localStorage)
        let i = keys.length;

        while (i--) {
            //@ts-ignore
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }

        return values;
    }


    return <div className={s.main}>
        {allStorage().map((image, idx) => renderImageItem(image, idx))}
    </div>
}