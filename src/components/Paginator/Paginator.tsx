import React, {useState} from "react";
import styles from "./Paginator.module.css";



type paginatorPropsType = {
    pagesCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?:number
}

export const Paginator = ({pagesCount,currentPage,onPageChanged,portionSize=10}: paginatorPropsType) => {


    let pages = []
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i)
    }

    let portionCount= Math.ceil(pagesCount / portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1
    let rightPortionPageNumber = portionNumber*portionSize

    return  <div className={styles.main}>
        {portionNumber > 1  && <button onClick={()=> setPortionNumber(portionNumber-1)}>Previous</button>}
        {pages.filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
                // @ts-ignore
                return <span className={currentPage === p ? styles.selectedPage : styles.item}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber  && <button onClick={()=> setPortionNumber(portionNumber+1)}>Next</button>}
    </div>
}