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

    // Adding waiting for data
    if (!dataTop) {
        return <Loader />;
    }

    //Rendering the rows for the table
    const renderDataList = dataTop.map((data) => {
        return (
            <tr key={ data.id }>
                <td> { <a onClick={ fetchData } href={`${ BaseConfig.API_URL }${ data.minified_url }`} target="_blank" rel="noreferrer"> { data.minified_url } </a> } </td>
                <td> { data.full_url } </td>
                <td> { data.title === null ? 'No title assigned yet' : data.title } </td>
                <td> { data.click_count } </td>
            </tr>
        );
    });

    // We validate if there is any data
    if (dataTop.length === 0) {
        return <DataNotFound />
    } else {
        return (
            <div className="ui container">
                <TopTable >
                    { renderDataList }
                </TopTable>
            </div>
        );
    }
};

export default Top;