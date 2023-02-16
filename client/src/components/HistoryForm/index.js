// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_THOUGHT } from '../../utils/mutations';
// import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

// import Auth from '../../utils/auth';

// const ThoughtForm = () => {
//   const [thoughtText, setThoughtText] = useState('');

//   const [characterCount, setCharacterCount] = useState(0);

//   const [addThought, { error }] = useMutation(ADD_THOUGHT, {
//     update(cache, { data: { addThought } }) {
//       try {
//         const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

//         cache.writeQuery({
//           query: QUERY_THOUGHTS,
//           data: { thoughts: [addThought, ...thoughts] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
//       });
//     },
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//   return (
//     <div>
//       <h3>What's on your techy mind?</h3>

//       {Auth.loggedIn() ? (
//         <>
//           <p></p>
//       };

// export default ThoughtForm;
