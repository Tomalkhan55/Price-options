import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, features, price } = option;

    return (
        <div className='flex flex-col bg-blue-500 text-white rounded-md p-4 '>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl my-8 text-center'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='w-full bg-green-600 mt-12 rounded-lg py-2'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;