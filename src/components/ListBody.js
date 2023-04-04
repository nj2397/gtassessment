import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
    TableCell,
    TableRow,
} from "@mui/material";


const ListBody = ({ lists }) => {
    // Implementing Infinite Scrolling for the list
    const itemsPerPage = 10;
    const [hasMore, setHasMore] = useState(true); 
    const [records, setRecords] = useState(itemsPerPage);

    const loadMore = () => {
        if(records === lists.length)
            setHasMore(false);
        else{
            setTimeout(() => {
                setRecords(records + itemsPerPage);
            }, 2000)
        }
    }

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<h4 className="loader">Loading...</h4>}
            useWindow={false}
        >
            {lists.map((ele) => (
                <TableRow>
                    <TableCell>
                        {ele.schemeName}
                    </TableCell>
                </TableRow>
            ))}
        </InfiniteScroll>
    )

}

export default ListBody;