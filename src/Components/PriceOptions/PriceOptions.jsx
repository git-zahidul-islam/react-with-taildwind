// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Locker room access",
                "Access to group fitness classes (limited)"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "All Basic Membership features",
                "Unlimited access to group fitness classes",
                "Access to sauna and steam room",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "All Standard Membership features",
                "Priority booking for group fitness classes",
                "Complimentary personal training sessions (monthly)",
                "Access to premium equipment",
                "Access to premium equipment vale"
            ]
        }
    ]


    return (
        <div className="mx-10 space-y-4">
            <h1 className="text-center text-3xl text-amber-500 font-semibold">Best Price you got Gym service</h1>
            <div className="grid md:grid-cols-3 md:gap-4 gap-2">
                {
                    PriceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;