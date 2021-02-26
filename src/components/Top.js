import { React, useState, useEffect } from 'react';
import fetTopData from './../services/TopService';
import Loader from './topComponents/Loader';
import TopTable from './topComponents/TopTable';
import BaseConfig from './../BaseConfig';
import DataNotFound from './topComponents/DataNotFound';

const Top = () => {
    // Setting the hook to fetch the data
    const [dataTop, setDataTop] = useState(null);

    //Method to fetch the data
    const fetchData = async () => {
        try {
         const result = await fetTopData();

         setDataTop(result.data.urls);
        } catch(err) {
          console.log(err);
        } 
    };

    // Meanwhile rendering the view brings the data
    useEffect(() => {
        // call the async fetchData function
        fetchData();
    }, []);

    //Adding pagination method
    const paginationData = ({array, pageSize, pageNumber}) => {
        const start = pageSize * (pageNumber - 1);
        const end = pageSize * pageNumber;
        console.log(array)
        return {
            *[Symbol.iterator]() {
                for(let i = start; i < array.length && i < end; i++) {
                    yield array[i]
                }
            }
        }
    }

    // Adding waiting for data
    if (!dataTop) {
        return <Loader />;
    }

    //Rendering the rows for the table
    const renderDataList = dataTop.map((data) => {
        return (
            <tr key={ data.id }>
                <td className="single line"> { <a onClick={ fetchData } href={`${ BaseConfig.API_URL }${ data.minified_url }`} target="_blank"> { data.minified_url } </a> } </td>
                <td className="single line"> { data.title === null ? 'No title assigned' : data.title } </td>
                <td className="single line"> { data.click_count } </td>
            </tr>
        );
    });

    if (dataTop.length === 0) {
        return <DataNotFound />
    } else {
        return (
            <TopTable >
                { renderDataList }
            </TopTable>
        );
    }
};

export default Top;