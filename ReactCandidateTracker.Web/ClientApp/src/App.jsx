import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import PendingDetails from './Pages/PendingDetails';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import { CandidateCountsContextComponent } from './CandidateCountsContext';

const App = () => {
    return (
        <CandidateCountsContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addcandidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/pending/details/:candidateId' element={<PendingDetails />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/refused' element={<Refused />} />
                </Routes>
            </Layout>
        </CandidateCountsContextComponent>
    );
}

export default App;