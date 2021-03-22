import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: 'kimchi',
    rating:5
  },
  {
    id:2,
    name: 'radish',
    rating:3.9
   },
   {
     id:3,
    name: 'ramen',
    rating:4
   },
   {
     id:4,
    name: 'orange',
    rating: 4.9
   }  
]

function Food ({name , rating}){
  return (
    <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}; //props type checking 