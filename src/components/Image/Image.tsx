import React, {useEffect, useState} from "react";
import {EditableSpan} from "../Common/EditableSpan";
import s from "./Image.module.css"
import {Button} from "@material-ui/core";

export type imageType = {
    farm: number,
    id: string,
    isfamily: number,
    isfriend: number,
    ispublic: number,
    owner: string,
    secret: string,
    server: string,
    title: string
}
type propsType = {
    images: Array<imageType>
}

export const Image = (props: propsType) => {

    const [ids, SetIds] = useState<string>("")

    function getImageUrl(farm: number, server: string, id: string, secret: string) {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    const setValues = (farm: number, server: string, id: string, secret: string, title: string) => {
        localStorage.setItem(id, JSON.stringify({farm, server, id, secret, title}));
        SetIds(id)
    }

    const renderImageItem = (image: imageType, idx: string) => {
        const {farm, server, id, secret, title} = image;


        return (
            <ul key={idx}>
                <div className={s.image}>
                    <div className={s.title}>{title}</div>
                    <img src={getImageUrl(farm, server, id, secret)} width="300px"/>
                    <EditableSpan/>
                    {
                        !!localStorage.getItem(id) ?
                            <Button variant="contained" size="small" color="primary"
                                    onClick={() => {
                                        localStorage.removeItem(id)
                                        SetIds(secret)
                                    }}>Remove it</Button>
                            :
                            <Button variant="contained" size="small" color="primary"
                                    onClick={() => setValues(farm, server, id, secret, title)}>Bookmark it</Button>
                    }
                    <Button></Button>
                </div>
            </ul>
        );
    }

    return <div className={s.main}>
        {props.images.map((image) => renderImageItem(image, image.id))}
    </div>
}