import React, {ChangeEvent, useEffect, KeyboardEvent, useState, FocusEventHandler, MouseEventHandler} from "react";
import {PhotosAPI} from "../Api";
import s from "./Search.module.css"
import {Image, imageType} from "./../Image/Image"
import {Paginator} from "../Paginator/Paginator";
import {Button} from "@material-ui/core";


export const Search = () => {

    const [requestText, setRequestText] = useState<string>("")
    const [inputText, setInputText] = useState<string>("")
    const [imageList, setImageList] = useState<Array<imageType>>([])
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [pagesCount, setPagesCount] = useState<number>(0)


    useEffect(() => {
        if (requestText !== "") {
            PhotosAPI.getPhotos(requestText, pageNumber)
                .then((res) => {
                    setImageList(res.photos.photo)
                    setPagesCount(res.photos.pages)
                })
                .catch((err) => {
                    throw err
                })
        }
    }, [requestText, pageNumber])


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setRequestText(inputText)
        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }
    const onButtonClickHandler = () => {
        setRequestText(inputText)
    }
    const onInputBlur = () => {
        setRequestText(inputText)
    }


    return <>
        <div><input onClick={()=>{setInputText("")}} value={inputText} onChange={onInputChange} onBlur={onInputBlur} onKeyPress={onKeyPressHandler} className={s.input}
                    placeholder={"Find images"}/>
            <span><Button onClick={onButtonClickHandler} variant="contained" size="small"
                          color="primary">Find!</Button></span>
        </div>
        {!requestText || imageList.length < 1 ?
            <h2>No images here. Whould you try to search for anything else?</h2>
            : <><Paginator onPageChanged={setPageNumber} currentPage={pageNumber} pagesCount={pagesCount}/>
                <Image images={imageList}/></>
        }

    </>
}