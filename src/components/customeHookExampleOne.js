import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ExampleOne = () => {
    const [name, setName] = useLocalStorage('user_name', '');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className='App'>

            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <p>Hello, {name || 'stranger'}!</p>
            </form>
        </div>
    );
};

export default ExampleOne;