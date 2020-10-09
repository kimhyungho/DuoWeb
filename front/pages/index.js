import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import LolPostCard from '../components/LolPostCard';

const Home = () => {
    const { mainPosts } = useSelector((state) => state.post);
    
    return (
        <AppLayout>
            {mainPosts.map((c)=>{
                return(
                    <LolPostCard key={c.id} post={c} />
                );
            })}
        </AppLayout>

    );

};


export default Home;