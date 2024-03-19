import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-yellow-400 p-4 rounded-lg space-y-3 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span className='text-2xl font-bold'>/mon</span>
            </h1>
            <h3 className='text-4xl font-semibold text-center'>{name}</h3>
            <div className='flex-grow'>
                {
                    features.map((feature, i) => <Feature
                        key={i}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <div>
                <button className='mt-6 bg-green-600 py-2 w-full text-xl font-semibold rounded-lg'>Buy Plan</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;