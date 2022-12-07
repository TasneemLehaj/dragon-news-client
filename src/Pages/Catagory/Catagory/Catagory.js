import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {

    const categoryNews = useLoaderData();
    useTitle('Catagory');

    return (
        <div>
            <h2>This category has news:{categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }

        </div>
    );
};

export default Catagory;