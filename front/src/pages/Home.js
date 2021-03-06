import React, { useState,useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/client';
import {AuthContext} from '../context/authContext'

const GET_ALL_POSTS = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);

  const {state,dispatch} = useContext(AuthContext)

  console.log('data',data)

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <div className="container">
      <div className="row p-5">
        {data.allPosts.map(p => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>{p.title}</h4>
                </div>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row p-5">
        <button onClick={() => fetchPosts()} className="btn-btn-raised btn-primary">
          Fetch posts
        </button>
      </div>
      <hr />
      {JSON.stringify(state.user)}
    </div>
  );
};

export default Home;
