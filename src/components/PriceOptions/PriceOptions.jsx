import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const priceOptions = [
        {
            id: "001",
            name: "Basic Membership",
            features: [
                "Access to cardio and weight training areas",
                "Limited group fitness classes",
                "Locker room facilities",
                "Personalized fitness assessment upon joining",
                "Discounts on gym merchandise"
            ],
            price: 29.99
        },
        {
            id: "002",
            name: "Standard Membership",
            features: [
                "All features of Basic Membership",
                "Access to all group fitness classes",
                "Complimentary towel service",
                "Access to nutrition consultation",
                "Access to member-exclusive events"
            ],
            price: 49.99
        },
        {
            id: "003",
            name: "Premium Membership",
            features: [
                "All features of Standard Membership",
                "Unlimited access to premium amenities (sauna, steam room, etc.)",
                "Priority booking for group classes",
                "24/7 gym access",
                "Monthly personal training session"
            ],
            price: 79.99
        },
        {
            id: "004",
            name: "Family Membership",
            features: [
                "Standard Membership benefits for two adults and up to two children",
                "Access to family-oriented fitness classes",
                "Discounts on additional services for family members",
                "Family fitness challenges and events",
                "Complimentary child care services during workout sessions"
            ],
            price: 99.99
        },
        {
            id: "005",
            name: "Corporate Membership",
            features: [
                "Standard Membership benefits for employees of registered companies",
                "Discounted rates for group memberships",
                "Access to corporate wellness programs",
                "Monthly wellness workshops for employees",
                "Company-branded gym merchandise"
            ],
            price: 499.99
        }
    ];



    return (
        <div className='md:m-12'>

            <h2 className="text-2xl">Best Price in the tawn</h2>

            <div className='grid md:grid-cols-3 gap-6'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};


PriceOptions.propTypes = {
    priceOptions: PropTypes.object
}

export default PriceOptions;